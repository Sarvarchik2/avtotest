<template>
    <div class="home">
        <!-- HERO -->
        <section class="hero">
            <div class="hero-content">
                <div class="hero-wrap">
                    <div>
                        <h1 class="hero-title"> АвтоТест — готовься красиво</h1>
                        <p class="hero-subtitle">Тёмная тема, неоновые акценты и удобные режимы. Сдай ПДД с первого
                            раза.</p>
                        <div class="hero-actions">
                            <NuxtLink to="/test" class="btn btn-primary btn-large">Начать экзамен</NuxtLink>
                            <NuxtLink to="/tickets" class="btn btn-outline btn-large">Учить билеты</NuxtLink>
                        </div>
                        <div class="hero-badges">
                            <div class="pill"><span class="pi">🧩</span> 20 вопросов</div>
                            <div class="pill"><span class="pi">⏱</span> 20 минут</div>
                            <div class="pill"><span class="pi">💯</span> Объяснения к ответам</div>
                        </div>
                    </div>
                    <div class="hero-art">🎯</div>
                </div>
            </div>
        </section>

        <!-- SHOWCASE 4 -->
        <section class="showcase">
            <div class="container">
                <div class="section-row">
                    <div class="icon">👍</div>
                    <div class="title">Популярные разделы</div>
                </div>
                <div class="showcase-grid">
                    <NuxtLink to="/test" class="showcase-card">
                        <div class="showcase-thumb">📝</div>
                        <div class="showcase-title">Экзамен 20 вопросов</div>
                        <div class="pill"><span class="pi">⏱</span> 20 минут</div>
                    </NuxtLink>

                    <NuxtLink to="/tickets" class="showcase-card">
                        <div class="showcase-thumb">�</div>
                        <div class="showcase-title">Все билеты ПДД</div>
                        <div class="pill"><span class="pi">#</span> 40 билетов</div>
                    </NuxtLink>

                    <NuxtLink to="/handbook" class="showcase-card">
                        <div class="showcase-thumb">🚦</div>
                        <div class="showcase-title">Справочник знаков</div>
                        <div class="pill"><span class="pi">ℹ️</span> Полный список</div>
                    </NuxtLink>

                    <NuxtLink to="/test" class="showcase-card">
                        <div class="showcase-thumb">🎯</div>
                        <div class="showcase-title">Тренировка по темам</div>
                        <div class="pill"><span class="pi">📌</span> Выбор темы</div>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- SPLIT 1 + 2 -->
        <section class="split">
            <div class="container">
                <div class="section-row">
                    <div class="icon">🎮</div>
                    <div class="title">Режимы тренировки</div>
                </div>

                <div class="split-grid">
                    <NuxtLink to="/test" class="split-large">
                        <div class="panel-heading">Полный экзамен <span class="hint">— как в ГИБДД</span></div>
                        <div class="pill"><span class="pi">🧩</span> 20 вопросов</div>
                        <div class="panel-hero">🛡️</div>
                    </NuxtLink>

                    <div class="split-col">
                        <NuxtLink to="/tickets" class="split-small">
                            <div class="panel-heading">По билетам <span class="hint">— 1..40</span></div>
                            <div class="panel-hero">📖</div>
                        </NuxtLink>

                        <NuxtLink to="/handbook" class="split-small">
                            <div class="panel-heading">Знаки и разметка</div>
                            <div class="panel-hero">🛣️</div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <!-- STATS -->
        <section class="stats-section">
            <div class="container">
                <div class="section-row">
                    <div class="icon">📈</div>
                    <div class="title">Немного статистики</div>
                </div>
                <div class="stats">
                    <div class="stat">
                        <div class="num">20</div>
                        <div class="label">вопросов в экзамене</div>
                    </div>
                    <div class="stat">
                        <div class="num">40</div>
                        <div class="label">билетов ПДД</div>
                    </div>
                    <div class="stat">
                        <div class="num">20 мин</div>
                        <div class="label">лимит времени</div>
                    </div>
                    <div class="stat">
                        <div class="num">∞</div>
                        <div class="label">повторений и тренировок</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SCHOOLS -->
        <section class="schools">
            <div class="container">
                <div class="section-row">
                    <div class="icon">🏫</div>
                    <div class="title">Топ автошкол рядом с вами</div>
                    <NuxtLink to="/schools" class="btn btn-ghost" style="margin-left:auto">Все автошколы</NuxtLink>
                </div>

                <div class="schools-grid">
                    <article class="school-card">
                        <div class="school-media">
                            <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop"
                                alt="DrivePro автошкола" />
                            <span class="school-badge">Хит выбора</span>
                        </div>
                        <div class="school-body">
                            <h3 class="school-title">DrivePro</h3>
                            <div class="school-location">Москва · м. Белорусская</div>
                            <div class="school-tags">
                                <span class="tag">Категория B</span>
                                <span class="tag">Автомат</span>
                                <span class="tag">С рассрочкой</span>
                            </div>
                        </div>
                        <div class="school-foot">
                            <div class="price">от 18 900₽ <small>/ курс</small></div>
                            <NuxtLink to="/schools/drivepro" class="btn btn-primary btn-more">Подробнее</NuxtLink>
                        </div>
                    </article>

                    <article class="school-card">
                        <div class="school-media">
                            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
                                alt="MasterDrive автошкола" />
                            <span class="school-badge">Рядом</span>
                        </div>
                        <div class="school-body">
                            <h3 class="school-title">MasterDrive</h3>
                            <div class="school-location">Санкт-Петербург · Василеостровский</div>
                            <div class="school-tags">
                                <span class="tag">Категория A</span>
                                <span class="tag">Категория B</span>
                                <span class="tag">Вечерние группы</span>
                            </div>
                        </div>
                        <div class="school-foot">
                            <div class="price">от 16 500₽ <small>/ курс</small></div>
                            <NuxtLink to="/schools/masterdrive" class="btn btn-primary btn-more">Подробнее</NuxtLink>
                        </div>
                    </article>

                    <article class="school-card">
                        <div class="school-media">
                            <img src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop"
                                alt="UrbanAuto автошкола" />
                            <span class="school-badge">Скидка -10%</span>
                        </div>
                        <div class="school-body">
                            <h3 class="school-title">UrbanAuto</h3>
                            <div class="school-location">Казань · Центр</div>
                            <div class="school-tags">
                                <span class="tag">АКПП/МКПП</span>
                                <span class="tag">Онлайн-теория</span>
                                <span class="tag">Индивидуальные</span>
                            </div>
                        </div>
                        <div class="school-foot">
                            <div class="price">от 15 900₽ <small>/ курс</small></div>
                            <NuxtLink to="/schools/urbanauto" class="btn btn-primary btn-more">Подробнее</NuxtLink>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- CONTACTS / ABOUT -->
        <section class="contact">
            <div class="container">
                <div class="section-row">
                    <div class="icon">🤝</div>
                    <div class="title">О проекте и контакты</div>
                </div>

                <div class="contact-grid">
                    <div class="card about">
                        <h3 class="contact-title">Мы — IT‑команда</h3>
                        <p class="muted">Этот сервис создан энтузиастами, чтобы помогать готовиться к экзамену ПДД
                            быстро и удобно. Проект полностью бесплатный для пользователей, без скрытых платежей.</p>
                        <p>Также мы — аутсорсинг IT‑компания и делаем цифровые проекты «под ключ» на заказ: сайты,
                            веб‑приложения, интеграции.
                            Если хотите подобный продукт для вашего бизнеса — свяжитесь с нами или посетите наш сайт
                            <a href="https://link-digital.uz/" target="_blank" rel="noopener" class="btn btn-outline"
                                style="padding:8px 12px; height:auto; margin-left:6px">Link</a>.
                        </p>
                        <ul class="about-list">
                            <li>Современный интерфейс и «тёмная» тема</li>
                            <li>Экзамен на 20 вопросов и тренировки по темам</li>
                            <li>Справочник знаков и пояснения к ответам</li>
                        </ul>
                        <p class="muted">Мы развиваем продукт на основе обратной связи. Если у вас есть идеи или вы
                            нашли неточность — напишите нам.</p>
                    </div>

                    <div class="card contact-card">
                        <h3 class="contact-title">Контакты</h3>
                        <a class="contact-item" href="mailto:hello@avtotest.local">📧 hello@avtotest.local</a>
                        <a class="contact-item" href="https://t.me/avtotest_support" target="_blank" rel="noopener">💬
                            Telegram: @avtotest_support</a>
                        <a class="contact-item" href="tel:+79990000000">📞 +7 (999) 000-00-00</a>
                        <div class="contact-note muted">По вопросам сотрудничества, предложений и баг‑репортов — будем
                            рады вашему письму.</div>
                    </div>
                </div>

                <div class="disclaimer muted">Материалы сайта предназначены для учебных целей. Проверяйте актуальность
                    правил ПДД на официальных источниках.</div>
            </div>
        </section>

        <!-- SUPPORT / DONATION -->
        <section class="support">
            <div class="container">
                <div class="section-row">
                    <div class="icon">💙</div>
                    <div class="title">Поддержать проект</div>
                </div>

                <div class="card support-card">
                    <p class="muted">Если вам нравится АвтоТест и вы хотите поддержать развитие — можно отправить любой
                        перевод на номер карты ниже. Спасибо за вашу поддержку!</p>
                    <div class="copy-row">
                        <div class="card-number" title="Номер карты" aria-label="Номер карты">{{ supportCard }}</div>
                        <button class="btn btn-outline" @click="copyCard" :disabled="copied">{{ copied ? 'Скопировано' :
                            'Скопировать' }}</button>
                    </div>
                    <div v-if="copied" class="copy-ok">Номер скопирован в буфер обмена</div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const supportCard = '8600 1234 5678 9012'
const copied = ref(false)
async function copyCard() {
    try {
        await navigator.clipboard.writeText(supportCard)
        copied.value = true
        setTimeout(() => copied.value = false, 2000)
    } catch (e) {
        console.error('Copy failed', e)
    }
}

useHead({
    title: 'АвтоТест - Подготовка к экзамену ПДД',
    meta: [{ name: 'description', content: 'Подготовка к экзамену ПДД: тесты, билеты, справочник знаков' }]
})
</script>
