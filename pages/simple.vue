<template>
    <div>
        <h1>Тест страница</h1>
        <p>Это простая тестовая страница для проверки работы Nuxt</p>
    </div>
</template>

<script setup>
useHead({
    title: 'Тест - АвтоТест'
})
</script>

<style scoped>
h1 {
    color: #2c3e50;
    text-align: center;
    margin: 50px 0;
}

p {
    text-align: center;
    font-size: 1.2rem;
    color: #666;
}
</style>
