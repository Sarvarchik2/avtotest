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
                        <p class="card-description">Пройдите реальный тест из 20 вопросов, как на настоящем экзамене в
                            ГИБДД</p>
                    </NuxtLink>

                    <NuxtLink to="/tickets" class="feature-card">
                        <div class="card-icon">📚</div>
                        <h3 class="card-title">Билеты ПДД</h3>
                        <p class="card-description">Изучайте все билеты ПДД по категориям. Подробные объяснения к
                            каждому вопросу</p>
                    </NuxtLink>

                    <NuxtLink to="/handbook" class="feature-card">
                        <div class="card-icon">🚦</div>
                        <h3 class="card-title">Справочник знаков</h3>
                        <p class="card-description">Полный справочник дорожных знаков с описаниями и примерами
                            применения</p>
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
useHead({
    title: 'АвтоТест - Подготовка к экзамену ПДД',
    meta: [{ name: 'description', content: 'Подготовка к экзамену ПДД: тесты, билеты, справочник знаков' }]
})
</script>
