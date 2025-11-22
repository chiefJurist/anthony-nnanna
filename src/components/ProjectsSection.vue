<template>
    <section
        id="projects"
        class="py-24 lg:py-32 bg-gray-50 dark:bg-gray-950 transition-colors duration-500"
    >
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <!-- Section Title -->
            <div class="text-center mb-16">
                <h2
                    class="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight"
                >
                    Key Projects & Impact
                </h2>
                <div
                    class="mt-4 w-32 h-1.5 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full"
                ></div>
                <p class="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Real production systems I’ve led or built from the ground up. These are
                    battle-tested in fintech and high-volume environments.
                </p>
            </div>

            <!-- Projects Grid -->
            <div class="grid lg:grid-cols-3 gap-10">
                <!-- Project 1: TruvoTrade -->
                <div
                    class="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                >
                    <div>
                        <img src="/public/img/truvotrade.png" alt="truvotrade" />
                    </div>
                    <div class="p-8 lg:p-10">
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">TruvoTrade</h3>
                        <p class="mt-2 text-indigo-600 dark:text-indigo-400 font-semibold">
                            Hedge Fund Platform · Lead Architect & Full-Stack Engineer
                        </p>

                        <div class="mt-6 flex flex-wrap gap-2">
                            <span
                                class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
                                >Laravel</span
                            >
                            <span
                                class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
                                >Vue.js</span
                            >
                            <span
                                class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
                                >Tailwind CSS</span
                            >
                            <span
                                class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
                                >MySQL</span
                            >
                            <span
                                class="px-3 py-1 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded-lg text-sm font-medium"
                                >Redis</span
                            >
                            <span
                                class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
                                >WebSockets</span
                            >
                            <span
                                class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
                                >Docker</span
                            >
                        </div>

                        <ul class="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
                            <li class="flex items-start">
                                <span class="text-indigo-600 dark:text-indigo-400 mr-2">▹</span>
                                Designed platform architecture, payout engine, and real-time
                                dashboards
                            </li>
                            <li class="flex items-start">
                                <span class="text-indigo-600 dark:text-indigo-400 mr-2">▹</span>
                                Built event-driven API workflows with Redis caching for sub-300ms
                                updates
                            </li>
                            <li class="flex items-start">
                                <span class="text-indigo-600 dark:text-indigo-400 mr-2">▹</span>
                                <strong class="text-indigo-600 dark:text-indigo-400"
                                    >Improved operational efficiency 20% and reduced payout cycle
                                    time 40%</strong
                                >
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Project 2: Ruul -->
                <div
                    class="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                >
                    <div>
                        <img src="/public/img/ruul.png" alt="ruul" />
                    </div>
                    <div class="p-8 lg:p-10">
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Ruul</h3>
                        <p class="mt-2 text-emerald-600 dark:text-emerald-400 font-semibold">
                            Multi-Tenant Portfolio & Digital Assets Marketplace · Senior Full-Stack
                            Engineer
                        </p>

                        <div class="mt-6 flex flex-wrap gap-2">
                            <span
                                class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
                                >Laravel</span
                            >
                            <span
                                class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
                                >Vue.js</span
                            >
                            <span
                                class="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium"
                                >Elasticsearch</span
                            >
                            <span
                                class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
                                >MySQL</span
                            >
                            <span
                                class="px-3 py-1 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded-lg text-sm font-medium"
                                >Redis</span
                            >
                            <span
                                class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
                                >Docker</span
                            >
                            <span
                                class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                                >GitHub Actions</span
                            >
                        </div>

                        <ul class="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
                            <li class="flex items-start">
                                <span class="text-emerald-600 dark:text-emerald-400 mr-2">▹</span>
                                Engineered multi-tenant infrastructure with automated tenant
                                provisioning
                            </li>
                            <li class="flex items-start">
                                <span class="text-emerald-600 dark:text-emerald-400 mr-2">▹</span>
                                Implemented Elasticsearch + Redis for high-speed catalog search and
                                filtering
                            </li>
                            <li class="flex items-start">
                                <span class="text-emerald-600 dark:text-emerald-400 mr-2">▹</span>
                                <strong class="text-emerald-600 dark:text-emerald-400"
                                    >Reduced checkout/order failures to under 0.5%</strong
                                >
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Project 3: Koinpark -->
                <div
                    class="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                >
                    <div>
                        <img src="/public/img/koinpark.png" alt="koinpark" />
                    </div>
                    <div class="p-8 lg:p-10">
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Koinpark</h3>
                        <p class="mt-2 text-cyan-600 dark:text-cyan-400 font-semibold">
                            Crypto Trading Metrics & Operations Dashboard · Full-Stack Lead
                        </p>

                        <div class="mt-6 flex flex-wrap gap-2">
                            <span
                                class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
                                >Vue.js</span
                            >
                            <span
                                class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
                                >Tailwind CSS</span
                            >
                            <span
                                class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
                                >Laravel</span
                            >
                            <span
                                class="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 rounded-lg text-sm font-medium"
                                >WebSockets</span
                            >
                            <span
                                class="px-3 py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 rounded-lg text-sm font-medium"
                                >Prometheus</span
                            >
                            <span
                                class="px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 rounded-lg text-sm font-medium"
                                >Grafana</span
                            >
                        </div>

                        <ul class="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
                            <li class="flex items-start">
                                <span class="text-cyan-600 dark:text-cyan-400 mr-2">▹</span>
                                Built real-time SPA for monitoring orderbooks, P2P metrics, and
                                system health
                            </li>
                            <li class="flex items-start">
                                <span class="text-cyan-600 dark:text-cyan-400 mr-2">▹</span>
                                Integrated observability stack (Prometheus + Grafana) for
                                performance & anomalies
                            </li>
                            <li class="flex items-start">
                                <span class="text-cyan-600 dark:text-cyan-400 mr-2">▹</span>
                                <strong class="text-cyan-600 dark:text-cyan-400"
                                    >Reduced MTTD by 60% · Sped up incident resolution by
                                    45%</strong
                                >
                            </li>
                        </ul>
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
