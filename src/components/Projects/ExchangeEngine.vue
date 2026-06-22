<template>
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
                    Built a real-time trading engine simulating a cryptocurrency limit-order
                    exchange under 48-hours.
                </li>
                <li class="flex items-start">
                    <span class="text-emerald-600 dark:text-emerald-400 mr-2">▹</span>
                    Implemented atomic balance and asset-locking logic to prevent race conditions on
                    concurrent order placement.
                </li>
                <li class="flex items-start">
                    <span class="text-emerald-600 dark:text-emerald-400 mr-2">▹</span>
                    <strong class="text-emerald-600 dark:text-emerald-400"
                        >Delivered a concurrency-safe price-matching engine with live real-time
                        updates via Pusher and Laravel Broadcasting</strong
                    >
                </li>
            </ul>
        </div>
    </div>
</template>
