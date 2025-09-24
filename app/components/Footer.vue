<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3 class="footer-title"><span class="footer-icon">🚗</span> АвтоТест</h3>
                    <p class="footer-description">Ваш надежный помощник в подготовке к экзаменам по теории ПДД. Изучайте
                        правила дорожного движения легко и эффективно.</p>
                </div>

                <div class="footer-section">
                    <h4 class="section-title">Обучение</h4>
                    <div class="footer-links">
                        <NuxtLink to="/test" class="footer-link">Экзаменационный тест</NuxtLink>
                        <NuxtLink to="/tickets" class="footer-link">Билеты ПДД</NuxtLink>
                        <NuxtLink to="/handbook" class="footer-link">Справочник знаков</NuxtLink>
                    </div>
                </div>

                <div class="footer-section">
                    <h4 class="section-title">Информация</h4>
                    <div class="footer-links">
                        <NuxtLink to="/about" class="footer-link">О проекте</NuxtLink>
                        <NuxtLink to="/contacts" class="footer-link">Контакты</NuxtLink>
                        <NuxtLink to="/help" class="footer-link">Помощь</NuxtLink>
                    </div>
                </div>

                <div class="footer-section">
                    <h4 class="section-title">Связь с нами</h4>
                    <div class="social-links">
                        <a href="#" class="social-link" title="Telegram"><span class="social-icon">📱</span></a>
                        <a href="#" class="social-link" title="Email"><span class="social-icon">✉️</span></a>
                        <a href="#" class="social-link" title="VK"><span class="social-icon">🌐</span></a>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="footer-copyright">
                    <p>&copy; {{ currentYear }} АвтоТест. Все права защищены.</p>
                </div>
                <div class="footer-legal">
                    <NuxtLink to="/privacy" class="legal-link">Политика конфиденциальности</NuxtLink>
                    <span class="divider">|</span>
                    <NuxtLink to="/terms" class="legal-link">Условия использования</NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-top: 1px solid var(--border);
    color: var(--text);
    margin-top: 100px;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 38px 20px 20px;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 26px;
    margin-bottom: 26px;
}

.footer-section {
    display: flex;
    flex-direction: column;
}

.footer-title {
    display: flex;
    margin: 0;

    align-items: center;
    font-size: 1.4rem;
    font-weight: 800;
    margin-bottom: 12px;
    color: var(--text);
}

.footer-icon {
    font-size: 1.6rem;
    margin-right: 10px;
}

.footer-description {
    color: var(--muted);
    line-height: 1.7;
    font-size: .95rem;
}

.section-title {
    font-size: 1.05rem;
    text-align: start;
    margin: 0;

    font-weight: 700;
    margin-bottom: 12px;
    color: var(--text);
    border-bottom: 1px dashed var(--border);
    padding-bottom: 8px;
    display: inline-block;
    opacity: .95;
}

.footer-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.footer-link {
    color: var(--muted);
    text-decoration: none;
    transition: color .2s ease, transform .2s ease;
    padding: 5px 0;
    position: relative;
}

.footer-link:hover {
    color: var(--text);
    transform: translateX(2px);
}

.footer-link::before {
    content: '→';
    position: absolute;
    left: -14px;
    opacity: 0;
    transition: all .25s ease;
    color: var(--muted);
}

.footer-link:hover::before {
    opacity: 1;
    left: -10px;
    color: var(--accent);
}

.social-links {
    display: flex;
    gap: 12px;
    margin-top: 10px;
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid var(--border);
    border-radius: 12px;
    text-decoration: none;
    transition: all .25s ease;
    backdrop-filter: blur(10px);
}

.social-link:hover {
    transform: translateY(-3px) scale(1.04);
    background: linear-gradient(135deg, var(--primary), var(--accent));
    box-shadow: 0 10px 25px rgba(0, 0, 0, .35);
}

.social-icon {
    font-size: 1.1rem;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 16px;
    border-top: 1px solid var(--border);
    flex-wrap: wrap;
    gap: 16px;
    color: var(--muted);
}

.footer-legal {
    display: flex;
    align-items: center;
    gap: 12px;
}

.legal-link {
    color: var(--muted);
    text-decoration: none;
    font-size: .9rem;
    transition: color .2s ease;
}

.legal-link:hover {
    color: var(--text);
}

.divider {
    color: var(--muted);
}

@media (max-width: 768px) {
    .footer-container {
        padding: 28px 15px 15px;
    }

    .footer-content {
        grid-template-columns: 1fr;
        gap: 20px;
        text-align: center;
    }

    .footer-bottom {
        flex-direction: column;
        text-align: center;
        gap: 12px;
    }

    .social-links {
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .footer-title {
        font-size: 1.2rem;
    }

    .section-title {
        font-size: 1rem;
    }

    .footer-legal {
        flex-direction: column;
        gap: 10px;
    }

    .divider {
        display: none;
    }
}
</style>
