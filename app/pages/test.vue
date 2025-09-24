<template>
    <div class="test-page">
        <div class="container">
            <div class="test-header">
                <h1 class="test-title"><span class="test-icon">📝</span> Экзаменационный тест</h1>
                <p class="test-description">Пройдите реальный экзаменационный тест из 20 вопросов. У вас есть 20 минут.
                </p>
            </div>
            <div class="test-actions">
                <NuxtLink to="/" class="btn">На главную</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({ title: 'Экзамен - АвтоТест' })
</script>
