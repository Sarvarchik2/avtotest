<template>
    <div class="app">
        <Navbar />
        <main class="main-content">
            <slot />
        </main>
        <Footer />
    </div>
</template>

<script setup>
// Автоимпорт из app/components
</script>

<style>
/* минимальный базовый стиль */
.app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.main-content {
    flex: 1;
}
</style>
