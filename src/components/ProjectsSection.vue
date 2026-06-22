<script setup lang="ts">
import ExchangeEngine from './Projects/ExchangeEngine.vue'
import JarsOfGlory from './Projects/JarsOfGlory.vue'
import ProjectsTitle from './Projects/ProjectsTitle.vue'
import TruvoTrade from './Projects/TruvoTrade.vue'
</script>

<template>
    <section
        id="projects"
        class="py-24 lg:py-32 bg-gray-50 dark:bg-gray-950 transition-colors duration-500"
    >
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <!-- Section Title -->
            <ProjectsTitle />

            <!-- Projects Grid -->
            <div class="grid lg:grid-cols-3 gap-10">
                <!-- Project 1: Limit-Order Exchange Engine -->
                <ExchangeEngine />

                <!-- Project 2: Jars Of Glory -->
                <JarsOfGlory />

                <!-- Project 3: TruvoTrade -->
                <TruvoTrade />
            </div>
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
