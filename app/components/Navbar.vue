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
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid var(--border);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
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
    color: var(--text);
    font-weight: 800;
    font-size: 1.2rem;
    letter-spacing: .2px;
    transition: transform 0.25s ease;
}

.navbar-brand:hover {
    transform: translateY(-1px);
}

.brand-icon {
    font-size: 1.6rem;
    margin-right: 10px;
}

.brand-text {
    color: var(--text);
}

.navbar-menu {
    display: flex;
    align-items: center;
}

.navbar-nav {
    display: flex;
    gap: 22px;
}

.nav-link {
    color: var(--text);
    text-decoration: none;
    font-weight: 600;
    position: relative;
    transition: color .2s ease, transform .2s ease;
    padding: 10px 6px;
}

.nav-link::after {
    content: '';
    position: absolute;
    left: 6px;
    right: 6px;
    bottom: 4px;
    height: 2px;
    background: linear-gradient(90deg, var(--primary), var(--accent));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform .25s ease;
}

.nav-link:hover {
    transform: translateY(-1px);
}

.nav-link:hover::after {
    transform: scaleX(1);
}

.nav-link.router-link-active::after {
    transform: scaleX(1);
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
    background: var(--text);
    transition: .3s;
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
        background: rgba(15, 21, 48, 0.9);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        transform: translateY(-8px);
        opacity: 0;
        visibility: hidden;
        transition: all .25s ease;
        border-bottom: 1px solid var(--border);
        box-shadow: 0 10px 30px rgba(0, 0, 0, .35);
    }

    .navbar-menu.is-active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }

    .navbar-nav {
        flex-direction: column;
        padding: 18px;
        gap: 12px;
    }

    .nav-link {
        padding: 14px 6px;
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
