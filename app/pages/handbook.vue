<template>
  <div class="handbook-page">
    <div class="container">
      <div class="handbook-header">
        <h1 class="handbook-title"><span class="handbook-icon">🚦</span> Справочник дорожных знаков</h1>
        <p class="handbook-description">Изучайте все дорожные знаки по категориям с подробными описаниями и примерами</p>
      </div>

      <div class="search-section">
        <div class="search-box">
          <input v-model="searchQuery" type="text" placeholder="Поиск знаков..." class="search-input" />
          <div class="search-icon">🔍</div>
        </div>
      </div>

      <div class="categories-grid">
        <div v-for="category in categories" :key="category.id" class="category-card" @click="openCategory(category.id)">
          <div class="category-icon">{{ category.icon }}</div>
          <h3 class="category-title">{{ category.name }}</h3>
          <p class="category-description">{{ category.description }}</p>
          <div class="category-count">{{ category.count }} знаков</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
useHead({ title: 'Справочник дорожных знаков - АвтоТест', meta: [{ name: 'description', content: 'Полный справочник дорожных знаков' }] })
const searchQuery = ref('')
const categories = ref([
  { id: 1, name: 'Предупреждающие знаки', description: 'Знаки, предупреждающие об опасностях', icon: '⚠️', count: 35 },
  { id: 2, name: 'Знаки приоритета', description: 'Очередность проезда перекрестков', icon: '🛑', count: 13 },
  { id: 3, name: 'Запрещающие знаки', description: 'Ограничения движения', icon: '🚫', count: 42 },
  { id: 4, name: 'Предписывающие знаки', description: 'Определенные действия', icon: '⭕', count: 18 },
  { id: 5, name: 'Знаки особых предписаний', description: 'Режимы движения', icon: '🛣️', count: 45 },
  { id: 6, name: 'Информационные знаки', description: 'Информация о населенных пунктах', icon: 'ℹ️', count: 28 },
  { id: 7, name: 'Знаки сервиса', description: 'Расположение объектов сервиса', icon: '⛽', count: 15 },
  { id: 8, name: 'Дополнительная информация', description: 'Таблички к знакам', icon: '📋', count: 24 }
])
const openCategory = (id) => console.log('Открываем категорию', id)
</script>
