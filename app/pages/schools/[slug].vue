<template>
    <section class="container" style="padding:32px 0 64px">
        <div class="section-row">
            <div class="icon">🏫</div>
            <div class="title">{{ schoolTitle }}</div>
        </div>
        <p class="muted">Страница автошколы в разработке. Здесь будет описание школы, расписание и отзывы.</p>
        <NuxtLink to="/schools" class="btn btn-outline" style="margin-top:16px">Назад к списку</NuxtLink>
    </section>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug
const schoolTitle = computed(() => {
    const map = {
        drivepro: 'DrivePro',
        masterdrive: 'MasterDrive',
        urbanauto: 'UrbanAuto',
    }
    return map[slug] || 'Автошкола'
})
useHead({ title: `${schoolTitle.value} — АвтоТест` })
</script>
