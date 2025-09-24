<template>
    <div class="handbook-page">
        <div class="container">
            <div class="handbook-header">
                <h1 class="handbook-title">
                    <span class="handbook-icon">🚦</span>
                    Справочник дорожных знаков
                </h1>
                <p class="handbook-description">
                    Изучайте все дорожные знаки по категориям с подробными описаниями и примерами
                </p>
            </div>

            <div class="search-section">
                <div class="search-box">
                    <input v-model="searchQuery" type="text" placeholder="Поиск знаков..." class="search-input">
                    <div class="search-icon">🔍</div>
                </div>
            </div>

            <div class="categories-grid">
                <div v-for="category in categories" :key="category.id" class="category-card"
                    @click="openCategory(category.id)">
                    <div class="category-icon">{{ category.icon }}</div>
                    <h3 class="category-title">{{ category.name }}</h3>
                    <p class="category-description">{{ category.description }}</p>
                    <div class="category-count">{{ category.count }} знаков</div>
                </div>
            </div>

            <div class="handbook-info">
                <div class="info-section">
                    <h3>Важная информация</h3>
                    <ul>
                        <li>Все знаки актуальны согласно последним изменениям в ПДД</li>
                        <li>К каждому знаку прилагается подробное описание</li>
                        <li>Примеры применения знаков на дороге</li>
                        <li>Штрафы за нарушение требований знаков</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// Настройка мета-данных страницы
useHead({
    title: 'Справочник дорожных знаков - АвтоТест',
    meta: [
        { name: 'description', content: 'Полный справочник дорожных знаков с описаниями и примерами применения' }
    ]
})

const searchQuery = ref('')

const categories = ref([
    {
        id: 1,
        name: 'Предупреждающие знаки',
        description: 'Знаки, предупреждающие о приближении к опасному участку дороги',
        icon: '⚠️',
        count: 35
    },
    {
        id: 2,
        name: 'Знаки приоритета',
        description: 'Знаки, устанавливающие очередность проезда перекрестков',
        icon: '🛑',
        count: 13
    },
    {
        id: 3,
        name: 'Запрещающие знаки',
        description: 'Знаки, вводящие или отменяющие определенные ограничения движения',
        icon: '🚫',
        count: 42
    },
    {
        id: 4,
        name: 'Предписывающие знаки',
        description: 'Знаки, предписывающие участникам движения определенные действия',
        icon: '⭕',
        count: 18
    },
    {
        id: 5,
        name: 'Знаки особых предписаний',
        description: 'Знаки, вводящие или отменяющие определенные режимы движения',
        icon: '🛣️',
        count: 45
    },
    {
        id: 6,
        name: 'Информационные знаки',
        description: 'Знаки, информирующие о расположении населенных пунктов и других объектов',
        icon: 'ℹ️',
        count: 28
    },
    {
        id: 7,
        name: 'Знаки сервиса',
        description: 'Знаки, информирующие о расположении соответствующих объектов',
        icon: '⛽',
        count: 15
    },
    {
        id: 8,
        name: 'Знаки дополнительной информации',
        description: 'Таблички, уточняющие или ограничивающие действие знаков',
        icon: '📋',
        count: 24
    }
])

const openCategory = (categoryId) => {
    // Здесь будет логика открытия категории
    console.log(`Открываем категорию ${categoryId}`)
}
</script>

<style scoped>
.handbook-page {
    min-height: calc(100vh - 140px);
    padding: 50px 20px;
    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    color: white;
}

.handbook-header {
    text-align: center;
    margin-bottom: 50px;
}

.handbook-title {
    font-size: 3rem;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.handbook-icon {
    font-size: 3.5rem;
}

.handbook-description {
    font-size: 1.3rem;
    opacity: 0.9;
    max-width: 700px;
    margin: 0 auto;
}

.search-section {
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
}

.search-box {
    position: relative;
    max-width: 500px;
    width: 100%;
}

.search-input {
    width: 100%;
    padding: 15px 50px 15px 20px;
    border: none;
    border-radius: 25px;
    font-size: 1.1rem;
    background: white;
    color: #333;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.search-input:focus {
    outline: none;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.search-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.2rem;
    color: #666;
}

.categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin-bottom: 60px;
}

.category-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 30px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
}

.category-card:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.category-icon {
    font-size: 4rem;
    margin-bottom: 20px;
}

.category-title {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 15px;
    color: #ecf0f1;
}

.category-description {
    font-size: 1rem;
    opacity: 0.9;
    line-height: 1.5;
    margin-bottom: 20px;
}

.category-count {
    display: inline-block;
    background: rgba(52, 152, 219, 0.8);
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
}

.handbook-info {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 40px;
    border-radius: 20px;
    max-width: 800px;
    margin: 0 auto;
}

.info-section h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    text-align: center;
    color: #3498db;
}

.info-section ul {
    list-style: none;
    padding: 0;
}

.info-section li {
    padding: 12px 0;
    position: relative;
    padding-left: 30px;
    font-size: 1.1rem;
    opacity: 0.9;
}

.info-section li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #2ecc71;
    font-weight: bold;
    font-size: 1.2rem;
}

@media (max-width: 768px) {
    .handbook-page {
        padding: 30px 15px;
    }

    .handbook-title {
        font-size: 2.5rem;
        flex-direction: column;
        gap: 10px;
    }

    .handbook-icon {
        font-size: 3rem;
    }

    .handbook-description {
        font-size: 1.1rem;
    }

    .search-input {
        padding: 12px 45px 12px 15px;
        font-size: 1rem;
    }

    .categories-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .category-card {
        padding: 25px 20px;
    }

    .category-icon {
        font-size: 3rem;
    }

    .category-title {
        font-size: 1.2rem;
    }

    .handbook-info {
        padding: 30px 20px;
    }

    .info-section h3 {
        font-size: 1.3rem;
    }

    .info-section li {
        font-size: 1rem;
    }
}
</style>
