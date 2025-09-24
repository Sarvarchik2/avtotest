<template>
    <nav class="navbar">
        <div class="navbar-container">
            <NuxtLink to="/" class="navbar-brand">
                <span class="brand-icon">🚗</span>
                <span class="brand-text">АвтоТест</span>
            </NuxtLink>

            <div class="navbar-menu" :class="{ 'is-active': isMenuOpen }">
                <div class="navbar-nav">
                    <NuxtLink to="/" class="nav-link" @click="closeMenu">
                        Главная
                    </NuxtLink>
                    <NuxtLink to="/test" class="nav-link" @click="closeMenu">
                        Экзамен
                    </NuxtLink>
                    <NuxtLink to="/tickets" class="nav-link" @click="closeMenu">
                        Билеты
                    </NuxtLink>
                    <NuxtLink to="/handbook" class="nav-link" @click="closeMenu">
                        Справочник
                    </NuxtLink>
                </div>
            </div>

            <button class="navbar-burger" :class="{ 'is-active': isMenuOpen }" @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
    isMenuOpen.value = false
}
</script>

<style scoped>
.navbar {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.navbar-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 70px;
}

.navbar-brand {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    transition: transform 0.3s ease;
}

.navbar-brand:hover {
    transform: scale(1.05);
}

.brand-icon {
    font-size: 2rem;
    margin-right: 10px;
}

.brand-text {
    color: white;
}

.navbar-menu {
    display: flex;
    align-items: center;
}

.navbar-nav {
    display: flex;
    gap: 30px;
}

.nav-link {
    color: white;
    text-decoration: none;
    font-weight: 500;
    position: relative;
    transition: all 0.3s ease;
    padding: 8px 16px;
    border-radius: 25px;
}

.nav-link:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
}

.nav-link.router-link-active {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.navbar-burger {
    display: none;
    flex-direction: column;
    width: 30px;
    height: 30px;
    cursor: pointer;
    background: none;
    border: none;
    justify-content: space-between;
}

.navbar-burger span {
    width: 100%;
    height: 2px;
    background: white;
    transition: 0.3s;
}

@media (max-width: 768px) {
    .navbar-burger {
        display: flex;
    }

    .navbar-menu {
        position: absolute;
        top: 70px;
        left: 0;
        right: 0;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    }

    .navbar-menu.is-active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }

    .navbar-nav {
        flex-direction: column;
        padding: 20px;
        gap: 15px;
    }

    .nav-link {
        padding: 15px 20px;
        border-radius: 10px;
        text-align: center;
    }

    .navbar-burger.is-active span:nth-child(1) {
        transform: rotate(45deg) translate(8px, 8px);
    }

    .navbar-burger.is-active span:nth-child(2) {
        opacity: 0;
    }

    .navbar-burger.is-active span:nth-child(3) {
        transform: rotate(-45deg) translate(8px, -8px);
    }
}
</style>
