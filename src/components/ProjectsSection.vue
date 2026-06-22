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
                    Real production systems I have built from the ground up, spanning investment
                    platforms, real-time trading engines, and nonprofit digital infrastructure.
                </p>
            </div>

            <!-- Projects Grid -->
            <div class="grid lg:grid-cols-3 gap-10">
                <!-- Project 1: Limit-Order Exchange Engine -->
                <div
                    class="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                >
                    <div>
                        <img src="/public/img/exchange-engine.png" alt="exchange-engine" />
                    </div>
                    <div class="p-8 lg:p-10">
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                            Limit-Order Exchange Engine
                        </h3>
                        <p class="mt-2 text-emerald-600 dark:text-emerald-400 font-semibold">
                            Crypto Trading Engine · Full-Stack Engineer
                        </p>

                        <div class="mt-6 flex flex-wrap gap-2">
                            <span
                                class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
                                >Laravel</span
                            >
                            <span
                                class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
                                >Vue 3</span
                            >
                            <span
                                class="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium"
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
                                >Laravel Broadcasting</span
                            >
                            <span
                                class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                                >Pusher</span
                            >
                        </div>

                        <ul class="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
                            <li class="flex items-start">
                                <span class="text-emerald-600 dark:text-emerald-400 mr-2">▹</span>
                                Built a real-time trading engine simulating a cryptocurrency
                                limit-order exchange under 48-hours.
                            </li>
                            <li class="flex items-start">
                                <span class="text-emerald-600 dark:text-emerald-400 mr-2">▹</span>
                                Implemented atomic balance and asset-locking logic to prevent race
                                conditions on concurrent order placement.
                            </li>
                            <li class="flex items-start">
                                <span class="text-emerald-600 dark:text-emerald-400 mr-2">▹</span>
                                <strong class="text-emerald-600 dark:text-emerald-400"
                                    >Delivered a concurrency-safe price-matching engine with live
                                    real-time updates via Pusher and Laravel Broadcasting</strong
                                >
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Project 2: Jars Of Glory -->
                <div
                    class="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                >
                    <div>
                        <img src="/public/img/jog.png" alt="jog" />
                    </div>
                    <div class="p-8 lg:p-10">
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                            Jars Of Glory NGO Website
                        </h3>
                        <p class="mt-2 text-cyan-600 dark:text-cyan-400 font-semibold">
                            Nonprofit Digital Platform · Lead Developer
                        </p>

                        <div class="mt-6 flex flex-wrap gap-2">
                            <span
                                class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
                                >WordPress (Headless)</span
                            >
                            <span
                                class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
                                >Vue.js</span
                            >
                            <span
                                class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
                                >TypeScript</span
                            >
                        </div>

                        <ul class="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
                            <li class="flex items-start">
                                <span class="text-cyan-600 dark:text-cyan-400 mr-2">▹</span>
                                Designed and built the organisation's digital presence using a
                                headless WordPress architecture with a Vue.js/TypeScript front end.
                            </li>
                            <li class="flex items-start">
                                <span class="text-cyan-600 dark:text-cyan-400 mr-2">▹</span>
                                Built a custom donation and payment integration enabling supporters
                                to contribute directly through the site.
                            </li>
                            <li class="flex items-start">
                                <span class="text-cyan-600 dark:text-cyan-400 mr-2">▹</span>
                                <strong class="text-cyan-600 dark:text-cyan-400"
                                    >Developed an event registration and booking system reducing
                                    manual coordination for the events team</strong
                                >
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Project 3: TruvoTrade -->
                <div
                    class="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                >
                    <div>
                        <img src="/public/img/truvotrade.png" alt="truvotrade" />
                    </div>
                    <div class="p-8 lg:p-10">
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">TruvoTrade</h3>
                        <p class="mt-2 text-indigo-600 dark:text-indigo-400 font-semibold">
                            Hedge Fund Platform · Lead Full-Stack Engineer
                        </p>

                        <div class="mt-6 flex flex-wrap gap-2">
                            <span
                                class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
                                >Laravel</span
                            >
                            <span
                                class="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded-lg text-sm font-medium"
                                >Blade</span
                            >
                            <span
                                class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
                                >Tailwind CSS</span
                            >
                            <span
                                class="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 rounded-lg text-sm font-medium"
                                >MySQL</span
                            >
                        </div>

                        <ul class="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
                            <li class="flex items-start">
                                <span class="text-indigo-600 dark:text-indigo-400 mr-2">▹</span>
                                Built an investment platform including deposit flows, interest
                                calculation logic, and withdrawal processing.
                            </li>
                            <li class="flex items-start">
                                <span class="text-indigo-600 dark:text-indigo-400 mr-2">▹</span>
                                Implemented core pages, routing, and backend logic to support the
                                platform's financial operations.
                            </li>
                            <li class="flex items-start">
                                <span class="text-indigo-600 dark:text-indigo-400 mr-2">▹</span>
                                <strong class="text-indigo-600 dark:text-indigo-400"
                                    >Architected the MVC structure and database schema to handle
                                    user accounts, transactions, and investment lifecycle
                                    management</strong
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
