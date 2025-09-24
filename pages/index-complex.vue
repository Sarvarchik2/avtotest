<template>
    <div class="home">
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-content">
                <h1 class="hero-title">
                    <span class="hero-icon">🚗</span>
                    Подготовка к экзамену ПДД
                </h1>
                <p class="hero-subtitle">
                    Пройдите экзамен с первого раза! Изучайте билеты, тренируйтесь на реальных тестах и изучайте
                    дорожные знаки.
                </p>
                <div class="hero-stats">
                    <div class="stat">
                        <span class="stat-number">20</span>
                        <span class="stat-label">вопросов в тесте</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">800+</span>
                        <span class="stat-label">билетных вопросов</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">200+</span>
                        <span class="stat-label">дорожных знаков</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="features">
            <div class="container">
                <h2 class="section-title">Выберите способ подготовки</h2>
                <div class="features-grid">
                    <NuxtLink to="/test" class="feature-card">
                        <div class="card-icon">📝</div>
                        <h3 class="card-title">Экзаменационный тест</h3>
                        <p class="card-description">
                            Пройдите реальный тест из 20 вопросов, как на настоящем экзамене в ГИБДД
                        </p>
                        <div class="card-footer">
                            <span class="card-badge">20 вопросов</span>
                            <span class="card-time">⏱️ 20 минут</span>
                        </div>
                    </NuxtLink>

                    <NuxtLink to="/tickets" class="feature-card">
                        <div class="card-icon">📚</div>
                        <h3 class="card-title">Билеты ПДД</h3>
                        <p class="card-description">
                            Изучайте все билеты ПДД по категориям. Подробные объяснения к каждому вопросу
                        </p>
                        <div class="card-footer">
                            <span class="card-badge">40 билетов</span>
                            <span class="card-time">📖 Изучение</span>
                        </div>
                    </NuxtLink>

                    <NuxtLink to="/handbook" class="feature-card">
                        <div class="card-icon">🚦</div>
                        <h3 class="card-title">Справочник знаков</h3>
                        <p class="card-description">
                            Полный справочник дорожных знаков с описаниями и примерами применения
                        </p>
                        <div class="card-footer">
                            <span class="card-badge">8 категорий</span>
                            <span class="card-time">🔍 Справочник</span>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- Additional Info Section -->
        <section class="info">
            <div class="container">
                <div class="info-content">
                    <div class="info-text">
                        <h3 class="info-title">Почему выбирают нас?</h3>
                        <ul class="info-list">
                            <li>✅ Актуальные вопросы согласно последним изменениям ПДД</li>
                            <li>✅ Подробные объяснения к каждому вопросу</li>
                            <li>✅ Удобный интерфейс для изучения на любом устройстве</li>
                            <li>✅ Статистика вашего прогресса</li>
                            <li>✅ Бесплатный доступ ко всем материалам</li>
                        </ul>
                    </div>
                    <div class="info-visual">
                        <div class="success-rate">
                            <div class="rate-circle">
                                <span class="rate-number">95%</span>
                                <span class="rate-label">успешных сдач</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// Здесь можно добавить логику для главной страницы
</script>

<style scoped>
.home {
    min-height: 100vh;
}

.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 100px 20px;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.1"><circle cx="30" cy="30" r="2"/></g></svg>');
    opacity: 0.3;
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.hero-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.hero-icon {
    font-size: 3.5rem;
}

.hero-subtitle {
    font-size: 1.3rem;
    margin-bottom: 40px;
    opacity: 0.9;
    line-height: 1.6;
}

.hero-stats {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
}

.stat {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: bold;
    color: #ffd700;
}

.stat-label {
    font-size: 0.95rem;
    opacity: 0.8;
}

.features {
    padding: 80px 20px;
    background: #f8f9fa;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 60px;
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
}

.feature-card {
    background: white;
    border-radius: 20px;
    padding: 40px 30px;
    text-decoration: none;
    color: inherit;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.feature-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.feature-card:hover::before {
    transform: scaleX(1);
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-icon {
    font-size: 4rem;
    text-align: center;
    margin-bottom: 20px;
}

.card-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 15px;
    text-align: center;
}

.card-description {
    color: #666;
    line-height: 1.6;
    margin-bottom: 25px;
    text-align: center;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid #eee;
}

.card-badge {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
}

.card-time {
    color: #888;
    font-size: 0.9rem;
}

.info {
    padding: 80px 20px;
    background: white;
}

.info-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.info-title {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 30px;
}

.info-list {
    list-style: none;
    padding: 0;
}

.info-list li {
    padding: 10px 0;
    font-size: 1.1rem;
    color: #555;
    display: flex;
    align-items: center;
}

.info-visual {
    display: flex;
    justify-content: center;
    align-items: center;
}

.success-rate {
    text-align: center;
}

.rate-circle {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
}

.rate-number {
    font-size: 3rem;
    font-weight: bold;
}

.rate-label {
    font-size: 1rem;
    opacity: 0.9;
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .hero {
        padding: 60px 15px;
    }

    .hero-title {
        font-size: 2rem;
        flex-direction: column;
        gap: 10px;
    }

    .hero-icon {
        font-size: 2.5rem;
    }

    .hero-subtitle {
        font-size: 1.1rem;
    }

    .hero-stats {
        gap: 20px;
    }

    .stat-number {
        font-size: 2rem;
    }

    .features {
        padding: 50px 15px;
    }

    .section-title {
        font-size: 2rem;
    }

    .features-grid {
        grid-template-columns: 1fr;
    }

    .info {
        padding: 50px 15px;
    }

    .info-content {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
    }

    .info-title {
        font-size: 1.5rem;
    }

    .rate-circle {
        width: 150px;
        height: 150px;
    }

    .rate-number {
        font-size: 2.5rem;
    }
}
</style>
