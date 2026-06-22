<script setup>
import SkillsCategory from './TechStack/SkillsCategory.vue'
import SkillsTItle from './TechStack/SkillsTItle.vue'
</script>

<template>
    <section
        id="tech"
        class="py-24 lg:py-32 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <!-- Section Title -->
            <SkillsTItle />

            <!-- Tech Grid -->
            <SkillsCategory />
        </div>
    </section>
</template>

<style scoped>
section {
    font-family:
        'Inter',
        system-ui,
        -apple-system,
        sans-serif;
}
</style>
