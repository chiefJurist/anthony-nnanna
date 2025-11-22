<template>
    <section
        id="tech"
        class="py-24 lg:py-32 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <!-- Section Title -->
            <div class="text-center mb-16">
                <h2
                    class="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight"
                >
                    Tech Stack & Tools
                </h2>
                <div
                    class="mt-4 w-32 h-1.5 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full"
                ></div>
                <p class="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Production-grade technologies I use every day to ship scalable, real-time, and
                    maintainable systems.
                </p>
            </div>

            <!-- Tech Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                <!-- Core Stack -->
                <div class="space-y-6">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Core Stack</h3>
                    <div class="flex flex-wrap gap-3">
                        <div
                            class="px-5 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-xl transition"
                        >
                            Vue.js
                        </div>
                        <div
                            class="px-5 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-xl transition"
                        >
                            Laravel
                        </div>
                        <div
                            class="px-5 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-xl transition"
                        >
                            PHP
                        </div>
                        <div
                            class="px-5 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-xl transition"
                        >
                            Tailwind CSS
                        </div>
                    </div>
                </div>

                <!-- Databases & Search -->
                <div class="space-y-6">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                        Databases & Caching
                    </h3>
                    <div class="flex flex-wrap gap-3">
                        <div
                            class="px-5 py-3 bg-emerald-600 dark:bg-emerald-500 text-white rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-xl transition"
                        >
                            MySQL
                        </div>
                        <div
                            class="px-5 py-3 bg-red-600 dark:bg-red-500 text-white rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-xl transition"
                        >
                            Redis
                        </div>
                        <div
                            class="px-5 py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-xl transition"
                        >
                            Elasticsearch
                        </div>
                    </div>
                </div>

                <!-- Real-time & Event-Driven -->
                <div class="space-y-6">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                        Real-time Systems
                    </h3>
                    <div class="flex flex-wrap gap-3">
                        <div
                            class="px-5 py-3 bg-cyan-600 dark:bg-cyan-500 text-white rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-xl transition"
                        >
                            WebSockets
                        </div>
                        <div
                            class="px-5 py-3 bg-cyan-600 dark:bg-cyan-500 text-white rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-xl transition"
                        >
                            Laravel Echo / Pusher / Soketi
                        </div>
                    </div>
                </div>

                <!-- DevOps & Monitoring -->
                <div class="space-y-6">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                        DevOps & Monitoring
                    </h3>
                    <div class="flex flex-wrap gap-3">
                        <div
                            class="px-5 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-xl transition"
                        >
                            Docker
                        </div>
                        <div
                            class="px-5 py-3 bg-gray-700 dark:bg-gray-600 text-white rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-xl transition"
                        >
                            GitHub Actions
                        </div>
                    </div>
                </div>

                <div class="space-y-6">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Observability</h3>
                    <div class="flex flex-wrap gap-3">
                        <div
                            class="px-5 py-3 bg-orange-600 dark:bg-orange-500 text-white rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-xl transition"
                        >
                            Prometheus
                        </div>
                        <div
                            class="px-5 py-3 bg-teal-600 dark:bg-teal-500 text-white rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-xl transition"
                        >
                            Grafana
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// No script needed
</script>

<style scoped>
section {
    font-family:
        'Inter',
        system-ui,
        -apple-system,
        sans-serif;
}
</style>
