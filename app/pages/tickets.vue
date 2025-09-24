<template>
  <div class="tickets-page">
    <div class="container">
      <div class="tickets-header">
        <h1 class="tickets-title"><span class="tickets-icon">📚</span> Билеты ПДД</h1>
        <p class="tickets-description">Изучайте все 40 билетов ПДД. В каждом билете 10 вопросов с объяснениями.</p>
      </div>

      <div class="tickets-stats">
        <div class="stat-card">
          <div class="stat-number">40</div>
          <div class="stat-label">билетов</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">400</div>
          <div class="stat-label">вопросов</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">10</div>
          <div class="stat-label">вопросов в билете</div>
        </div>
      </div>

      <div class="tickets-grid">
        <div v-for="ticket in tickets" :key="ticket.id" class="ticket-card" @click="openTicket(ticket.id)">
          <div class="ticket-number">Билет {{ ticket.id }}</div>
          <div class="ticket-info">
            <div class="ticket-questions">{{ ticket.questions }} вопросов</div>
            <div class="ticket-status" :class="ticket.status">{{ getStatusText(ticket.status) }}</div>
          </div>
          <div class="ticket-progress">
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: ticket.percent + '%' }"></div>
            </div>
            <div class="progress-text muted">{{ ticket.answered }}/{{ ticket.questions }} · верно {{ ticket.correct }},
              ошибок {{ ticket.wrong }}</div>
          </div>
          <div class="ticket-action"><span class="action-icon">→</span></div>
          <div class="ticket-actions-row">
            <button class="btn btn-outline btn-sm" @click.stop="resetTicket(ticket.id)">Сбросить прогресс</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
const router = useRouter()

useHead({ title: 'Билеты ПДД - АвтоТест', meta: [{ name: 'description', content: 'Изучайте все 40 билетов ПДД' }] })

const TICKET_QUESTIONS = 10
const tickets = ref([])

onMounted(() => {
  // статичный пример из 12 карточек с разными статусами/прогрессом
  const samples = [
    { id: 1, answered: 0, correct: 0, wrong: 0 },
    { id: 2, answered: 3, correct: 2, wrong: 1 },
    { id: 3, answered: 10, correct: 8, wrong: 2 },
    { id: 4, answered: 7, correct: 5, wrong: 2 },
    { id: 5, answered: 10, correct: 10, wrong: 0 },
    { id: 6, answered: 0, correct: 0, wrong: 0 },
    { id: 7, answered: 1, correct: 1, wrong: 0 },
    { id: 8, answered: 5, correct: 4, wrong: 1 },
    { id: 9, answered: 9, correct: 7, wrong: 2 },
    { id: 10, answered: 10, correct: 6, wrong: 4 },
    { id: 11, answered: 2, correct: 1, wrong: 1 },
    { id: 12, answered: 0, correct: 0, wrong: 0 }
  ]
  tickets.value = samples.map(s => ({
    id: s.id,
    questions: TICKET_QUESTIONS,
    answered: s.answered,
    correct: s.correct,
    wrong: s.wrong,
    percent: Math.round((s.answered / TICKET_QUESTIONS) * 100),
    status: s.answered === 0 ? 'not-started' : s.answered >= TICKET_QUESTIONS ? 'completed' : 'in-progress'
  }))
})

const getStatusText = (status) => status === 'completed' ? 'Пройден' : status === 'in-progress' ? 'В процессе' : 'Не начат'
const openTicket = () => router.push({ path: `/demo` })
function resetTicket(id) {
  try { localStorage.removeItem(`ticket:${id}`) } catch { }
  // recompute list
  const list = []
  for (let i = 1; i <= 40; i++) {
    const key = `ticket:${i}`
    let saved
    try { saved = JSON.parse(localStorage.getItem(key) || 'null') } catch { saved = null }
    const answered = saved?.answers ? Object.keys(saved.answers).length : 0
    const correct = saved?.results ? Object.values(saved.results).filter(v => v === 'correct').length : 0
    const wrong = saved?.results ? Object.values(saved.results).filter(v => v === 'wrong').length : 0
    const percent = Math.round((answered / TICKET_QUESTIONS) * 100)
    const status = answered === 0 ? 'not-started' : answered >= TICKET_QUESTIONS ? 'completed' : 'in-progress'
    list.push({ id: i, questions: TICKET_QUESTIONS, answered, correct, wrong, percent, status })
  }
  tickets.value = list
}
</script>
