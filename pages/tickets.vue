<template>
    <div class="tickets-page">
        <div class="container">
            <div class="tickets-header">
                <h1 class="tickets-title">
                    <span class="tickets-icon">📚</span>
                    Билеты ПДД
                </h1>
                <p class="tickets-description">
                    Изучайте все 40 билетов ПДД с подробными объяснениями к каждому вопросу
                </p>
            </div>

            <div class="tickets-stats">
                <div class="stat-card">
                    <div class="stat-number">40</div>
                    <div class="stat-label">билетов</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">800</div>
                    <div class="stat-label">вопросов</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">20</div>
                    <div class="stat-label">вопросов в билете</div>
                </div>
            </div>

            <div class="tickets-grid">
                <div v-for="ticket in tickets" :key="ticket.id" class="ticket-card" @click="openTicket(ticket.id)">
                    <div class="ticket-number">Билет {{ ticket.id }}</div>
                    <div class="ticket-info">
                        <div class="ticket-questions">{{ ticket.questions }} вопросов</div>
                        <div class="ticket-status" :class="ticket.status">
                            {{ getStatusText(ticket.status) }}
                        </div>
                    </div>
                    <div class="ticket-action">
                        <span class="action-icon">→</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Настройка мета-данных страницы
useHead({
    title: 'Билеты ПДД - АвтоТест',
    meta: [
        { name: 'description', content: 'Изучайте все 40 билетов ПДД с подробными объяснениями к каждому вопросу' }
    ]
})

// Генерация билетов

const tickets = ref([])

onMounted(() => {
    // Генерируем 40 билетов
    for (let i = 1; i <= 40; i++) {
        tickets.value.push({
            id: i,
            questions: 20,
            status: Math.random() > 0.7 ? 'completed' : Math.random() > 0.4 ? 'in-progress' : 'not-started'
        })
    }
})

const getStatusText = (status) => {
    switch (status) {
        case 'completed': return 'Пройден'
        case 'in-progress': return 'В процессе'
        case 'not-started': return 'Не начат'
        default: return 'Не начат'
    }
}

const openTicket = (ticketId) => {
    // Здесь будет логика открытия билета
    console.log(`Открываем билет ${ticketId}`)
}
</script>

<style scoped>
.tickets-page {
    min-height: calc(100vh - 140px);
    padding: 50px 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.tickets-header {
    text-align: center;
    margin-bottom: 50px;
}

.tickets-title {
    font-size: 3rem;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.tickets-icon {
    font-size: 3.5rem;
}

.tickets-description {
    font-size: 1.3rem;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
}

.tickets-stats {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-bottom: 50px;
    flex-wrap: wrap;
}

.stat-card {
    text-align: center;
    background: rgba(255, 255, 255, 0.2);
    padding: 25px;
    border-radius: 15px;
    backdrop-filter: blur(10px);
}

.stat-number {
    font-size: 3rem;
    font-weight: bold;
    color: #ffd700;
    display: block;
}

.stat-label {
    font-size: 1rem;
    opacity: 0.9;
}

.tickets-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
    max-width: 1200px;
    margin: 0 auto;
}

.ticket-card {
    background: white;
    color: #333;
    padding: 25px;
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.ticket-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.ticket-number {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c3e50;
}

.ticket-info {
    flex: 1;
    margin: 0 20px;
}

.ticket-questions {
    color: #666;
    font-size: 0.95rem;
    margin-bottom: 5px;
}

.ticket-status {
    font-size: 0.9rem;
    font-weight: 500;
    padding: 4px 12px;
    border-radius: 20px;
    display: inline-block;
}

.ticket-status.completed {
    background: #d4edda;
    color: #155724;
}

.ticket-status.in-progress {
    background: #ffeaa7;
    color: #856404;
}

.ticket-status.not-started {
    background: #f8d7da;
    color: #721c24;
}

.ticket-action {
    font-size: 1.5rem;
    color: #667eea;
    transition: transform 0.3s ease;
}

.ticket-card:hover .ticket-action {
    transform: translateX(5px);
}

@media (max-width: 768px) {
    .tickets-page {
        padding: 30px 15px;
    }

    .tickets-title {
        font-size: 2.5rem;
        flex-direction: column;
        gap: 10px;
    }

    .tickets-icon {
        font-size: 3rem;
    }

    .tickets-description {
        font-size: 1.1rem;
    }

    .tickets-stats {
        gap: 20px;
    }

    .stat-card {
        padding: 20px;
    }

    .stat-number {
        font-size: 2.5rem;
    }

    .tickets-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .ticket-card {
        flex-direction: column;
        text-align: center;
        gap: 15px;
    }

    .ticket-info {
        margin: 0;
    }
}
</style>
