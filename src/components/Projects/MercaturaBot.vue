<template>
    <a
        href="https://github.com/chiefJurist/mercatura"
        target="blank"
        class="block group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
    >
        <div>
            <img src="/public/img/mercatura.jpeg" alt="truvotrade" />
        </div>
        <div class="p-8 lg:p-10">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Mercatura</h3>

            <p class="mt-2 text-indigo-600 dark:text-indigo-400 font-semibold">
                Exchange AI Trading Bot · Lead Full-Stack Engineer
            </p>

            <div class="mt-6 flex flex-wrap gap-2">
                <span
                    class="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded-lg text-sm font-medium"
                    >Python</span
                >
                <span
                    class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
                    >CCXT</span
                >
                <span
                    class="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 rounded-lg text-sm font-medium"
                    >Pandas</span
                >
                <span
                    class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
                    >TA Lib</span
                >
                <span
                    class="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 rounded-lg text-sm font-medium"
                    >Numpy</span
                >
            </div>

            <ul class="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li class="flex items-start">
                    <span class="text-indigo-600 dark:text-indigo-400 mr-2">▹</span>
                    Built a real-time Binance liquidation tracker streaming forced-order data across
                    100+ perpetual futures via WebSockets.
                </li>
                <li class="flex items-start">
                    <span class="text-indigo-600 dark:text-indigo-400 mr-2">▹</span>
                    Designed configurable cascade-detection signals using rolling time windows to
                    flag one-sided liquidation clusters.
                </li>
                <li class="flex items-start">
                    <span class="text-indigo-600 dark:text-indigo-400 mr-2">▹</span>
                    <strong class="text-indigo-600 dark:text-indigo-400">
                        Published a pluggable CCXT/TA-Lib trading toolkit to PyPI with pytest
                        coverage and CI.
                    </strong>
                </li>
            </ul>
        </div>
    </a>
</template>
