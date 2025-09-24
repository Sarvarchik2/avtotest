<template>
    <div class="home">
        <section class="hero">
            <div class="hero-content">
                <h1 class="hero-title">
                    <span class="hero-icon">🚗</span>
                    АвтоТест - Подготовка к экзамену ПДД
                </h1>
                <p class="hero-subtitle">
                    Пройдите экзамен с первого раза! Изучайте билеты, тренируйтесь на реальных тестах и изучайте
                    дорожные знаки.
                </p>
            </div>
        </section>

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
                    </NuxtLink>

                    <NuxtLink to="/tickets" class="feature-card">
                        <div class="card-icon">📚</div>
                        <h3 class="card-title">Билеты ПДД</h3>
                        <p class="card-description">
                            Изучайте все билеты ПДД по категориям. Подробные объяснения к каждому вопросу
                        </p>
                    </NuxtLink>

                    <NuxtLink to="/handbook" class="feature-card">
                        <div class="card-icon">🚦</div>
                        <h3 class="card-title">Справочник знаков</h3>
                        <p class="card-description">
                            Полный справочник дорожных знаков с описаниями и примерами применения
                        </p>
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
useHead({
    title: 'АвтоТест - Подготовка к экзамену ПДД',
    meta: [
        { name: 'description', content: 'Подготовка к экзамену ПДД: тесты, билеты, справочник знаков' }
    ]
})
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
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
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
    text-align: center;
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-icon {
    font-size: 4rem;
    margin-bottom: 20px;
}

.card-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 15px;
}

.card-description {
    color: #666;
    line-height: 1.6;
}

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

    .features {
        padding: 50px 15px;
    }

    .features-grid {
        grid-template-columns: 1fr;
    }
}
</style>
