<script setup>
import AboutCards from './About/AboutCards.vue'
import AboutText from './About/AboutText.vue'
</script>

<template>
    <section
        id="about"
        class="py-24 lg:py-32 bg-gray-50 dark:bg-gray-950 transition-colors duration-500"
    >
        <div class="max-w-5xl mx-auto px-6 lg:px-8">
            <!-- Section Title -->
            <div class="text-center mb-16">
                <h2
                    class="text-3xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight"
                >
                    About Me
                </h2>
                <div
                    class="mt-4 w-24 h-1.5 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full"
                ></div>
            </div>

            <!-- Main Bio -->
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <!-- Text Column -->
                <AboutText />

                <!-- Achievements / Impact Cards -->
                <AboutCards />
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
