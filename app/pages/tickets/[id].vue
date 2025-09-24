<template>
    <div class="ticket-page">
        <div class="container">
            <div class="test-header">
                <h1 class="test-title"><span class="test-icon">📖</span> Билет {{ ticketId }}</h1>
                <div class="test-meta">
                    <div class="pill">Вопрос {{ currentIndex + 1 }} / {{ total }}</div>
                    <div class="pill">Верно: {{ correctCount }}</div>
                    <div class="pill">Ошибки: {{ wrongCount }}</div>
                </div>
            </div>

            <!-- Progress dots -->
            <div class="progress-dots">
                <button v-for="(q, i) in questions" :key="q.id" class="dot" :class="{
                    current: i === currentIndex,
                    correct: results[i] === 'correct',
                    wrong: results[i] === 'wrong',
                    flagged: flags.has(i)
                }" @click="goTo(i)" :title="`Вопрос ${i + 1}`">
                    <span v-if="flags.has(i)" class="dot-flag">⚑</span>
                    <span class="dot-num">{{ i + 1 }}</span>
                </button>
            </div>

            <!-- Result summary (optional at bottom as well) -->
            <div v-if="finished" class="result">
                <div class="card result-card">
                    <div class="result-icon">📊</div>
                    <h2 class="result-title">Итоги билета</h2>
                    <div class="result-stats">
                        <div class="stat">
                            <div class="num">{{ correctCount }}</div>
                            <div class="label">верно</div>
                        </div>
                        <div class="stat">
                            <div class="num">{{ wrongCount }}</div>
                            <div class="label">ошибок</div>
                        </div>
                        <div class="stat">
                            <div class="num">{{ total }}</div>
                            <div class="label">вопросов</div>
                        </div>
                    </div>
                    <div class="result-actions">
                        <button class="btn btn-primary" @click="restart">Пройти заново</button>
                        <NuxtLink to="/tickets" class="btn">К списку билетов</NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Question area -->
            <div class="question-area">
                <div class="question-head">
                    <div class="q-left">
                        <button class="q-flag" :class="{ active: flags.has(currentIndex) }"
                            @click="toggleFlag(currentIndex)" aria-label="Отметить вопрос"
                            title="Отметить вопрос">⚑</button>
                        <div class="q-label">Вопрос {{ currentIndex + 1 }} из {{ total }}</div>
                    </div>
                    <div class="q-right" style="display:flex; gap:8px">
                        <button class="btn btn-outline btn-sm" @click="resetProgress">Сбросить</button>
                        <button class="btn btn-outline btn-sm" @click="finish">Завершить</button>
                    </div>
                </div>

                <div class="question-card card">
                    <div class="q-media" :class="{ placeholder: !current.image }">
                        <img v-if="current.image" :src="current.image" :alt="current.text" />
                        <div v-else class="ph">🚦</div>
                    </div>
                    <div class="q-text">{{ current.text }}</div>

                    <div class="answers">
                        <button v-for="(opt, idx) in current.options" :key="opt.id" class="answer"
                            :class="answerClass(idx)" :disabled="isAnswered(currentIndex)" @click="selectAnswer(idx)">
                            <span class="a-letter">{{ String.fromCharCode(65 + idx) }}</span>
                            <span class="a-text">{{ opt.text }}</span>
                        </button>
                    </div>

                    <!-- Объяснение под ответами всегда при ответе -->
                    <div v-if="showExplanation(currentIndex)" class="explain">{{ current.explanation }}</div>
                </div>

                <div class="q-footer">
                    <button class="btn" @click="prev" :disabled="currentIndex === 0">Назад</button>
                    <button class="btn" @click="next" :disabled="currentIndex === total - 1">Далее</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const ticketId = computed(() => route.params.id === 'demo' ? 'demo' : Number(route.params.id))

// 10 вопросов в билете
const total = 10
const questions = reactive([])

const storageKey = computed(() => `ticket:${ticketId.value}`)
const currentIndex = ref(0)
const flags = reactive(new Set())
const answers = reactive({})
const results = reactive({})
const finished = ref(false)

onMounted(async () => {
    // временно все id ведем на демо-страницу
    if (route.params.id !== 'demo') {
        router.replace('/tickets/demo')
        return
    }
    await loadTicket()
    // подгружаем прогресс из localStorage
    try {
        const saved = JSON.parse(localStorage.getItem(storageKey.value) || 'null')
        if (saved) {
            Object.assign(answers, saved.answers || {})
            Object.assign(results, saved.results || {})
            if (saved.flags && Array.isArray(saved.flags)) saved.flags.forEach(i => flags.add(i))
            currentIndex.value = saved.currentIndex || 0
            finished.value = !!saved.finished
        }
    } catch { }
})

async function loadTicket() {
    const q = Array.from({ length: total }).map((_, i) => ({
        id: i + 1,
        text: `Вопрос ${i + 1} билета ${ticketId.value}. Пример текста — замените на реальный.`,
        image: i % 2 ? 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop' : '',
        options: [
            { id: 'a', text: 'Вариант A', correct: i % 3 === 0 },
            { id: 'b', text: 'Вариант B', correct: i % 3 === 1 },
            { id: 'c', text: 'Вариант C', correct: i % 3 === 2 },
        ],
        explanation: 'Объяснение к вопросу. Здесь будет подробный разбор.'
    }))
    questions.splice(0, questions.length, ...q)
}

watch([answers, results, flags, currentIndex, finished], save, { deep: true })

function save() {
    const data = {
        answers: { ...answers },
        results: { ...results },
        flags: Array.from(flags),
        currentIndex: currentIndex.value,
        finished: finished.value,
    }
    try { localStorage.setItem(storageKey.value, JSON.stringify(data)) } catch { }
}

const current = computed(() => questions[currentIndex.value])
const correctCount = computed(() => Object.values(results).filter(v => v === 'correct').length)
const wrongCount = computed(() => Object.values(results).filter(v => v === 'wrong').length)

function isAnswered(idx) { return answers[idx] !== undefined }
function answerClass(optIdx) {
    if (!isAnswered(currentIndex.value)) return ''
    const selected = answers[currentIndex.value]
    const isCorrectOpt = current.value.options[optIdx]?.correct
    if (isCorrectOpt) return 'is-correct'
    if (optIdx === selected) return 'is-wrong'
    return ''
}
function showExplanation(idx) { return isAnswered(idx) && !!questions[idx].explanation }

function selectAnswer(optIdx) {
    if (isAnswered(currentIndex.value)) return
    answers[currentIndex.value] = optIdx
    const ok = !!current.value.options[optIdx]?.correct
    results[currentIndex.value] = ok ? 'correct' : 'wrong'
    // авто-переход к следующему, без провала по 3 ошибкам
    nextAuto()
}
function next() { if (currentIndex.value < total - 1) currentIndex.value++ }
function prev() { if (currentIndex.value > 0) currentIndex.value-- }
function goTo(i) { currentIndex.value = i }
function toggleFlag(i) { flags.has(i) ? flags.delete(i) : flags.add(i) }

function nextAuto() {
    const nextIdx = findNextUnanswered(currentIndex.value)
    if (nextIdx !== -1) currentIndex.value = nextIdx
}
function findNextUnanswered(from) {
    for (let i = from + 1; i < total; i++) { if (!isAnswered(i)) return i }
    for (let i = 0; i <= from; i++) { if (!isAnswered(i)) return i }
    return -1
}
function finish() { finished.value = true }
function restart() {
    Object.keys(answers).forEach(k => delete answers[k])
    Object.keys(results).forEach(k => delete results[k])
    flags.clear()
    finished.value = false
    currentIndex.value = 0
}

function resetProgress() {
    try { localStorage.removeItem(storageKey.value) } catch { }
    restart()
}

useHead({ title: () => `Билет ${ticketId.value} — АвтоТест` })
</script>

<style scoped>
/* переиспользуем визуал теста */
.test-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 18px 0
}

.test-title {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 10px
}

.test-meta {
    display: flex;
    gap: 10px;
    flex-wrap: wrap
}

.pill {
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 6px 10px;
    background: rgba(255, 255, 255, .04)
}

.progress-dots {
    display: grid;
    grid-template-columns: repeat(10, minmax(28px, 1fr));
    gap: 8px;
    margin: 10px 0 18px
}

.dot {
    position: relative;
    height: 34px;
    border: 1px solid var(--border);
    background: rgba(255, 255, 255, .04);
    border-radius: 999px;
    color: var(--muted);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .2s
}

.dot.current {
    border-color: var(--primary);
    color: var(--text);
    box-shadow: 0 0 0 2px rgba(76, 111, 255, .25) inset
}

.dot.correct {
    background: rgba(52, 211, 153, .18);
    border-color: rgba(52, 211, 153, .35);
    color: #b7f2d6
}

.dot.wrong {
    background: rgba(239, 68, 68, .18);
    border-color: rgba(239, 68, 68, .35);
    color: #f5b3b3
}

.dot.flagged {
    box-shadow: 0 0 0 2px rgba(34, 211, 238, .3) inset
}

.dot-flag {
    position: absolute;
    top: 2px;
    left: 4px;
    font-size: 12px
}

.dot-num {
    font-weight: 800;
    font-size: 13px
}

.question-card {
    padding: 16px
}

.q-media {
    height: 240px;
    border: 1px solid var(--border);
    border-radius: 14px;
    overflow: hidden;
    background: #0f1530;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px
}

.q-media img {
    width: 100%;
    height: 100%;
    object-fit: cover
}

.q-media.placeholder .ph {
    font-size: 54px;
    opacity: .6
}

.q-text {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px
}

.answers {
    display: grid;
    gap: 10px
}

.answer {
    display: flex;
    gap: 10px;
    border: 1px solid var(--border);
    background: rgba(255, 255, 255, .04);
    border-radius: 12px;
    padding: 12px 14px;
    text-align: left;
    color: var(--text);
    transition: .2s
}

.answer:hover {
    background: rgba(255, 255, 255, .06);
    transform: translateY(-1px)
}

.answer[disabled] {
    opacity: .8;
    cursor: default;
    transform: none
}

.answer.is-correct {
    background: rgba(52, 211, 153, .15);
    border-color: rgba(52, 211, 153, .35)
}

.answer.is-wrong {
    background: rgba(239, 68, 68, .15);
    border-color: rgba(239, 68, 68, .35)
}

.a-letter {
    width: 22px;
    height: 22px;
    border-radius: 6px;
    background: rgba(255, 255, 255, .06);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 12px
}

.explain {
    margin-top: 8px;
    color: var(--text)
}

.q-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 12px
}

.question-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 10px 12px;
    border: 1px solid var(--border);
    border-radius: 12px;
    background: rgba(255, 255, 255, .04);
    margin-bottom: 12px
}

.q-left {
    display: flex;
    align-items: center;
    gap: 10px
}

.q-label {
    font-weight: 700
}

.q-flag {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: rgba(255, 255, 255, .05);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--muted);
    cursor: pointer;
    transition: .2s
}

.q-flag:hover {
    background: rgba(255, 255, 255, .08);
    color: var(--text)
}

.q-flag.active {
    background: linear-gradient(135deg, var(--primary), var(--accent));
    color: #0b0f18;
    border-color: transparent
}

.btn-sm {
    height: 36px;
    padding: 0 12px;
    font-size: 14px
}

.result {
    padding: 20px 0 40px
}

.result-card {
    padding: 24px;
    text-align: center
}

.result-icon {
    font-size: 42px
}

.result-title {
    margin: 10px 0 4px
}

.result-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(120px, 1fr));
    gap: 12px;
    margin: 12px 0
}

.result-actions {
    display: flex;
    gap: 10px;
    justify-content: center
}

@media (max-width: 900px) {
    .progress-dots {
        grid-template-columns: repeat(5, 1fr);
    }
}
</style>