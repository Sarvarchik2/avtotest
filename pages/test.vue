<template>
    <div class="test-page">
        <div class="container">
            <div class="test-header">
                <h1 class="test-title">
                    <span class="test-icon">📝</span>
                    Экзаменационный тест
                </h1>
                <p class="test-description">
                    Пройдите реальный экзаменационный тест из 20 вопросов. У вас есть 20 минут на выполнение.
                </p>
            </div>

            <div class="test-info">
                <div class="info-card">
                    <div class="info-icon">⏱️</div>
                    <div class="info-text">
                        <h3>Время</h3>
                        <p>20 минут</p>
                    </div>
                </div>

                <div class="info-card">
                    <div class="info-icon">❓</div>
                    <div class="info-text">
                        <h3>Вопросы</h3>
                        <p>20 вопросов</p>
                    </div>
                </div>

                <div class="info-card">
                    <div class="info-icon">✅</div>
                    <div class="info-text">
                        <h3>Для сдачи</h3>
                        <p>Не более 2 ошибок</p>
                    </div>
                </div>
            </div>

            <div class="test-actions">
                <button class="btn btn-large start-test-btn">
                    Начать тест
                </button>

                <div class="test-rules">
                    <h3>Правила прохождения:</h3>
                    <ul>
                        <li>Время выполнения ограничено 20 минутами</li>
                        <li>Для успешной сдачи допускается не более 2 ошибок</li>
                        <li>Каждый вопрос имеет только один правильный ответ</li>
                        <li>После завершения теста вы увидите результаты</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// Настройка мета-данных страницы
useHead({
    title: 'Экзаменационный тест - АвтоТест',
    meta: [
        { name: 'description', content: 'Пройдите реальный экзаменационный тест по ПДД из 20 вопросов за 20 минут' }
    ]
})
</script>

<style scoped>
.test-page {
    min-height: calc(100vh - 140px);
    padding: 50px 20px;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.test-header {
    text-align: center;
    margin-bottom: 50px;
}

.test-title {
    font-size: 3rem;
    color: #2c3e50;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.test-icon {
    font-size: 3.5rem;
}

.test-description {
    font-size: 1.3rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
}

.test-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-bottom: 50px;
}

.info-card {
    background: white;
    padding: 30px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    gap: 20px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.info-card:hover {
    transform: translateY(-5px);
}

.info-icon {
    font-size: 3rem;
    width: 80px;
    text-align: center;
}

.info-text h3 {
    font-size: 1.3rem;
    color: #2c3e50;
    margin-bottom: 5px;
}

.info-text p {
    font-size: 1.1rem;
    color: #666;
    font-weight: 500;
}

.test-actions {
    text-align: center;
}

.start-test-btn {
    margin-bottom: 40px;
    font-size: 1.3rem;
    padding: 20px 40px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.start-test-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
}

.test-rules {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 0 auto;
    text-align: left;
}

.test-rules h3 {
    color: #2c3e50;
    margin-bottom: 20px;
    text-align: center;
}

.test-rules ul {
    list-style: none;
    padding: 0;
}

.test-rules li {
    padding: 10px 0;
    color: #555;
    position: relative;
    padding-left: 25px;
}

.test-rules li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #667eea;
    font-weight: bold;
}

@media (max-width: 768px) {
    .test-title {
        font-size: 2.5rem;
        flex-direction: column;
        gap: 10px;
    }

    .test-icon {
        font-size: 3rem;
    }

    .test-description {
        font-size: 1.1rem;
    }

    .info-card {
        flex-direction: column;
        text-align: center;
        padding: 25px;
    }

    .start-test-btn {
        width: 100%;
        max-width: 300px;
    }

    .test-rules {
        padding: 25px;
    }
}
</style>
