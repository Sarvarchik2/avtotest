<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3 class="footer-title">
                        <span class="footer-icon">🚗</span>
                        АвтоТест
                    </h3>
                    <p class="footer-description">
                        Ваш надежный помощник в подготовке к экзаменам по теории ПДД.
                        Изучайте правила дорожного движения легко и эффективно.
                    </p>
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
                        <a href="#" class="social-link" title="Telegram">
                            <span class="social-icon">📱</span>
                        </a>
                        <a href="#" class="social-link" title="Email">
                            <span class="social-icon">✉️</span>
                        </a>
                        <a href="#" class="social-link" title="VK">
                            <span class="social-icon">🌐</span>
                        </a>
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
    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    color: white;
    margin-top: auto;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 20px 20px;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
}

.footer-section {
    display: flex;
    flex-direction: column;
}

.footer-title {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 15px;
    color: #3498db;
}

.footer-icon {
    font-size: 2rem;
    margin-right: 10px;
}

.footer-description {
    color: #bdc3c7;
    line-height: 1.6;
    font-size: 0.95rem;
}

.section-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 20px;
    color: #ecf0f1;
    border-bottom: 2px solid #3498db;
    padding-bottom: 8px;
    display: inline-block;
}

.footer-links {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.footer-link {
    color: #bdc3c7;
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 5px 0;
    position: relative;
}

.footer-link:hover {
    color: #3498db;
    padding-left: 10px;
}

.footer-link::before {
    content: '→';
    position: absolute;
    left: -15px;
    opacity: 0;
    transition: all 0.3s ease;
}

.footer-link:hover::before {
    opacity: 1;
    left: -10px;
}

.social-links {
    display: flex;
    gap: 15px;
    margin-top: 10px;
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    text-decoration: none;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.social-link:hover {
    transform: translateY(-3px) scale(1.1);
    background: #3498db;
    box-shadow: 0 5px 20px rgba(52, 152, 219, 0.4);
}

.social-icon {
    font-size: 1.3rem;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    flex-wrap: wrap;
    gap: 20px;
}

.footer-copyright p {
    color: #95a5a6;
    font-size: 0.9rem;
}

.footer-legal {
    display: flex;
    align-items: center;
    gap: 15px;
}

.legal-link {
    color: #95a5a6;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;
}

.legal-link:hover {
    color: #3498db;
}

.divider {
    color: #95a5a6;
}

@media (max-width: 768px) {
    .footer-container {
        padding: 30px 15px 15px;
    }

    .footer-content {
        grid-template-columns: 1fr;
        gap: 30px;
        text-align: center;
    }

    .footer-bottom {
        flex-direction: column;
        text-align: center;
        gap: 15px;
    }

    .social-links {
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .footer-title {
        font-size: 1.5rem;
    }

    .section-title {
        font-size: 1.1rem;
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
