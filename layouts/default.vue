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
// Импорт компонентов происходит автоматически в Nuxt
</script>

<style>
/* Global styles */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
    scroll-behavior: smooth;
}

body {
    background: #ffffff;
    color: #333;
    overflow-x: hidden;
}

.app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.main-content {
    flex: 1;
}

/* Utility classes */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Custom scrollbar */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
}

/* Selection color */
::selection {
    background: rgba(102, 126, 234, 0.3);
    color: #2c3e50;
}

/* Focus styles */
*:focus {
    outline: 2px solid #667eea;
    outline-offset: 2px;
}

/* Animation keyframes */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Animation classes */
.fade-in-up {
    animation: fadeInUp 0.6s ease-out;
}

.slide-in-left {
    animation: slideInLeft 0.6s ease-out;
}

.slide-in-right {
    animation: slideInRight 0.6s ease-out;
}

/* Button styles */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    font-size: 1rem;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.btn:active {
    transform: translateY(0);
}

.btn-outline {
    background: transparent;
    color: #667eea;
    border: 2px solid #667eea;
}

.btn-outline:hover {
    background: #667eea;
    color: white;
}

.btn-large {
    padding: 16px 32px;
    font-size: 1.1rem;
}

.btn-small {
    padding: 8px 16px;
    font-size: 0.9rem;
}

/* Card styles */
.card {
    background: white;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
}

.card:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
}

/* Text styles */
.text-gradient {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.text-center {
    text-align: center;
}

.text-left {
    text-align: left;
}

.text-right {
    text-align: right;
}

/* Margin and padding utilities */
.mt-1 {
    margin-top: 0.5rem;
}

.mt-2 {
    margin-top: 1rem;
}

.mt-3 {
    margin-top: 1.5rem;
}

.mt-4 {
    margin-top: 2rem;
}

.mb-1 {
    margin-bottom: 0.5rem;
}

.mb-2 {
    margin-bottom: 1rem;
}

.mb-3 {
    margin-bottom: 1.5rem;
}

.mb-4 {
    margin-bottom: 2rem;
}

.pt-1 {
    padding-top: 0.5rem;
}

.pt-2 {
    padding-top: 1rem;
}

.pt-3 {
    padding-top: 1.5rem;
}

.pt-4 {
    padding-top: 2rem;
}

.pb-1 {
    padding-bottom: 0.5rem;
}

.pb-2 {
    padding-bottom: 1rem;
}

.pb-3 {
    padding-bottom: 1.5rem;
}

.pb-4 {
    padding-bottom: 2rem;
}

/* Loading animation */
.loading {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid rgba(102, 126, 234, 0.3);
    border-radius: 50%;
    border-top-color: #667eea;
    animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

/* Responsive design */
@media (max-width: 768px) {
    .container {
        padding: 0 15px;
    }

    .btn {
        width: 100%;
        justify-content: center;
    }

    .card {
        padding: 20px;
    }
}

@media (max-width: 480px) {
    html {
        font-size: 14px;
    }

    .card {
        padding: 16px;
    }
}
</style>
