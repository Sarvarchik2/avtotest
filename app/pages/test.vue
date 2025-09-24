<template>
    <div class="test-page">
        <div class="container">
            <div class="test-header">
                <h1 class="test-title"><span class="test-icon">📝</span> Экзаменационный тест</h1>
                <div class="test-meta">
                    <div class="pill">⏱ {{ mm }}:{{ ss }}</div>
                    <div class="pill">Ошибки: {{ mistakes }}/2</div>
                    <div class="pill">Вопрос {{ currentIndex + 1 }} / {{ total }}</div>
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

            <!-- Finished screen -->
            <div v-if="finished" class="result">
                <div class="card result-card" :class="{ pass: passed, fail: !passed }">
                    <div class="result-icon">{{ passed ? '✅' : '❌' }}</div>
                    <h2 class="result-title">{{ passed ? 'Тест пройден' : 'Тест провален' }}</h2>
                    <div class="result-stats">
                        <div class="stat">
                            <div class="num">{{ correctCount }}</div>
                            <div class="label">верно</div>
                        </div>
                        <div class="stat">
                            <div class="num">{{ mistakes }}</div>
                            <div class="label">ошибки</div>
                        </div>
                        <div class="stat">
                            <div class="num">{{ total }}</div>
                            <div class="label">вопросов</div>
                        </div>
                        <div class="stat">
                            <div class="num">{{ elapsedMin }}:{{ elapsedSec }}</div>
                            <div class="label">время</div>
                        </div>
                    </div>
                    <div class="result-actions">
                        <button class="btn btn-primary" @click="restart">Пройти снова</button>
                        <NuxtLink to="/" class="btn">На главную</NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Question area -->
            <div v-else class="question-area">
                <div class="question-head">
                    <div class="q-left">
                        <button class="q-flag" :class="{ active: flags.has(currentIndex) }"
                            @click="toggleFlag(currentIndex)" aria-label="Отметить вопрос" title="Отметить вопрос">
                            ⚑
                        </button>
                        <div class="q-label">Вопрос {{ currentIndex + 1 }} из {{ total }}</div>
                    </div>
                    <div class="q-right">
                        <button class="btn btn-outline btn-sm" @click="finishExamEarly">Завершить</button>
                    </div>
                </div>

                <div class="question-card card">
                    <div class="q-media" :class="{ placeholder: !current.image }">
                        <img v-if="current.image" :src="current.image" :alt="current.text" />
                        <div v-else class="ph">🚗</div>
                    </div>
                    <div class="q-text">{{ current.text }}</div>

                    <div class="answers">
                        <button v-for="(opt, idx) in current.options" :key="opt.id" class="answer"
                            :class="answerClass(idx)" :disabled="isAnswered(currentIndex) || finished"
                            @click="selectAnswer(idx)">
                            <span class="a-letter">{{ String.fromCharCode(65 + idx) }}</span>
                            <span class="a-text">{{ opt.text }}</span>
                        </button>
                    </div>

                    <div v-if="showExplanation(currentIndex)" class="explain muted">{{ current.explanation }}</div>
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
// Seed: 20 примерных вопросов. Замените на реальные ПДД при необходимости.
const questions = reactive([
    {
        id: 1,
        text: 'Разрешено ли обгонять на этом участке дороги?',
        image: 'https://images.unsplash.com/photo-1533122250115-cabf8f30d0d3?q=80&w=1200&auto=format&fit=crop',
        options: [
            { id: 'a', text: 'Да, без ограничений', correct: false },
            { id: 'b', text: 'Только при видимости более 100 м', correct: true },
            { id: 'c', text: 'Запрещено', correct: false },
        ],
        explanation: 'Обгон допускается при достаточной видимости и отсутствии разметки/знаков, запрещающих манёвр.'
    },
    {
        id: 2,
        text: 'Какой сигнал светофора разрешает движение?',
        image: '',
        options: [
            { id: 'a', text: 'Красный', correct: false },
            { id: 'b', text: 'Жёлтый', correct: false },
            { id: 'c', text: 'Зелёный', correct: true },
        ],
        explanation: 'Зелёный сигнал разрешает движение.'
    },
    {
        id: 3,
        text: 'С какой максимальной скоростью можно двигаться в населённом пункте (если не указано иное)?',
        image: '',
        options: [
            { id: 'a', text: '40 км/ч', correct: false },
            { id: 'b', text: '50 км/ч', correct: true },
            { id: 'c', text: '60 км/ч', correct: false },
        ],
        explanation: 'По умолчанию — 60 или 50 в зависимости от страны. Для учебной цели: 60/50. Замените под локальные ПДД.'
    },
    ...Array.from({ length: 17 }).map((_, i) => ({
        id: 4 + i,
        text: `Пример вопроса №${4 + i}. Замените на реальный вопрос ПДД.`,
        image: i % 2 === 0 ? '' : 'https://images.unsplash.com/photo-1520350094758-3a3f3b5b8b91?q=80&w=1200&auto=format&fit=crop',
        options: [
            { id: 'a', text: 'Вариант A', correct: i % 3 === 0 },
            { id: 'b', text: 'Вариант B', correct: i % 3 === 1 },
            { id: 'c', text: 'Вариант C', correct: i % 3 === 2 },
        ],
        explanation: 'Пояснение к ответу. Замените на реальное объяснение.'
    }))
])

const total = questions.length
const currentIndex = ref(0)
const flags = reactive(new Set())
const answers = reactive({}) // index -> optionIdx
const results = reactive({}) // index -> 'correct' | 'wrong'
const mistakes = ref(0)
const finished = ref(false)
const passed = ref(false)

// Timer 20 minutes
const totalSeconds = 20 * 60
const left = ref(totalSeconds)
let tId

const mm = computed(() => String(Math.floor(left.value / 60)).padStart(2, '0'))
const ss = computed(() => String(left.value % 60).padStart(2, '0'))
const elapsed = computed(() => totalSeconds - left.value)
const elapsedMin = computed(() => String(Math.floor(elapsed.value / 60)).padStart(2, '0'))
const elapsedSec = computed(() => String(elapsed.value % 60).padStart(2, '0'))

onMounted(() => {
    tId = setInterval(() => {
        if (finished.value) return
        if (left.value > 0) left.value--
        if (left.value === 0) {
            finishExam(false)
        }
    }, 1000)
})
onUnmounted(() => clearInterval(tId))

const current = computed(() => questions[currentIndex.value])
const correctCount = computed(() => Object.values(results).filter(v => v === 'correct').length)

function isAnswered(idx) {
    return answers[idx] !== undefined
}
function answerClass(optIdx) {
    if (!isAnswered(currentIndex.value)) return ''
    const selected = answers[currentIndex.value]
    const isCorrectOpt = current.value.options[optIdx]?.correct
    if (isCorrectOpt) return 'is-correct'
    if (optIdx === selected) return 'is-wrong'
    return ''
}
function showExplanation(idx) {
    return isAnswered(idx) && !!questions[idx].explanation
}

function selectAnswer(optIdx) {
    if (finished.value || isAnswered(currentIndex.value)) return
    answers[currentIndex.value] = optIdx
    const ok = !!current.value.options[optIdx]?.correct
    results[currentIndex.value] = ok ? 'correct' : 'wrong'
    if (!ok) {
        mistakes.value++
        if (mistakes.value >= 3) {
            finishExam(false)
            return
        }
    }
    // авто-переход к следующему неотвеченному
    nextAuto()
}

function next() {
    if (currentIndex.value < total - 1) currentIndex.value++
}
function prev() {
    if (currentIndex.value > 0) currentIndex.value--
}
function goTo(i) { currentIndex.value = i }
function toggleFlag(i) { flags.has(i) ? flags.delete(i) : flags.add(i) }

function nextAuto() {
    // если есть следующий вопрос — перейти; иначе, если все отвечены — завершить
    const nextIdx = findNextUnanswered(currentIndex.value)
    if (nextIdx !== -1) {
        currentIndex.value = nextIdx
    } else {
        finishExam(mistakes.value <= 2)
    }
}
function findNextUnanswered(from) {
    for (let i = from + 1; i < total; i++) { if (!isAnswered(i)) return i }
    for (let i = 0; i <= from; i++) { if (!isAnswered(i)) return i }
    return -1
}

function finishExamEarly() {
    finishExam(mistakes.value <= 2)
}
function finishExam(pass) {
    finished.value = true
    passed.value = pass
}
function restart() {
    Object.keys(answers).forEach(k => delete answers[k])
    Object.keys(results).forEach(k => delete results[k])
    flags.clear()
    mistakes.value = 0
    finished.value = false
    passed.value = false
    left.value = totalSeconds
    currentIndex.value = 0
}

useHead({ title: 'Экзамен - АвтоТест' })
</script>

<style scoped>
/* Keep scoped to avoid leakage if needed; layout uses global tokens */
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
    grid-template-columns: repeat(20, minmax(28px, 1fr));
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
    height: 260px;
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
    margin-top: 8px
}

.q-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 12px
}

/* Toolbar styles */
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

.result-card.pass {
    border-color: rgba(52, 211, 153, .35);
    background: linear-gradient(180deg, rgba(52, 211, 153, .12), rgba(255, 255, 255, .03))
}

.result-card.fail {
    border-color: rgba(239, 68, 68, .35);
    background: linear-gradient(180deg, rgba(239, 68, 68, .12), rgba(255, 255, 255, .03))
}

.result-icon {
    font-size: 48px
}

.result-title {
    margin: 10px 0 4px
}

.result-stats {
    display: grid;
    grid-template-columns: repeat(4, minmax(120px, 1fr));
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
        grid-template-columns: repeat(10, 1fr);
    }

    .result-stats {
        grid-template-columns: repeat(2, 1fr)
    }
}

@media (max-width: 520px) {
    .test-header{
        flex-direction: column;
    }
    .progress-dots{
        overflow: auto;
    }
}
</style>
