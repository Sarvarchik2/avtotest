<template>
  <div class="tickets-page">
    <div class="container">
      <div class="tickets-header">
        <h1 class="tickets-title"><span class="tickets-icon">📚</span> Билеты ПДД</h1>
        <p class="tickets-description">Изучайте все 40 билетов ПДД с подробными объяснениями к каждому вопросу</p>
      </div>

      <div class="tickets-stats">
        <div class="stat-card"><div class="stat-number">40</div><div class="stat-label">билетов</div></div>
        <div class="stat-card"><div class="stat-number">800</div><div class="stat-label">вопросов</div></div>
        <div class="stat-card"><div class="stat-number">20</div><div class="stat-label">вопросов в билете</div></div>
      </div>

      <div class="tickets-grid">
        <div v-for="ticket in tickets" :key="ticket.id" class="ticket-card" @click="openTicket(ticket.id)">
          <div class="ticket-number">Билет {{ ticket.id }}</div>
          <div class="ticket-info">
            <div class="ticket-questions">{{ ticket.questions }} вопросов</div>
            <div class="ticket-status" :class="ticket.status">{{ getStatusText(ticket.status) }}</div>
          </div>
          <div class="ticket-action"><span class="action-icon">→</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

useHead({ title: 'Билеты ПДД - АвтоТест', meta: [{ name: 'description', content: 'Изучайте все 40 билетов ПДД' }] })

const tickets = ref([])
onMounted(() => { for (let i = 1; i <= 40; i++) tickets.value.push({ id: i, questions: 20, status: Math.random() > 0.7 ? 'completed' : Math.random() > 0.4 ? 'in-progress' : 'not-started' }) })
const getStatusText = (status) => status === 'completed' ? 'Пройден' : status === 'in-progress' ? 'В процессе' : 'Не начат'
const openTicket = (id) => console.log('Открываем билет', id)
</script>
