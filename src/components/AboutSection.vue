<template>
    <section id="about" class="py-24 lg:py-32 bg-gray-50 dark:bg-gray-950">
        <div class="max-w-5xl mx-auto px-6 lg:px-8">
            <!-- Section Title -->
            <div class="text-center mb-16">
                <h2
                    class="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight"
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
                <div class="space-y-8">
                    <p class="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                        I'm a Senior Full-Stack Engineer who builds systems that don't just work —
                        they perform under real pressure and scale without breaking. I specialize in
                        Vue.js + Laravel stacks and have spent the last 5+ years shipping
                        production-grade fintech, trading platforms, and multi-tenant marketplaces
                        that handle serious volume.
                    </p>

                    <p class="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                        I lead architecture decisions, design payout engines, real-time dashboards,
                        multi-tenant systems, and event-driven workflows. I write code that is
                        clean, tested, documented, and fast — because I know the next person
                        maintaining it (or scaling it to 10× traffic) will thank me.
                    </p>

                    <p
                        class="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium"
                    >
                        I care about measurable outcomes: 40% faster payout cycles, sub-300ms
                        real-time updates, &lt; 0.5% checkout failure rates, 60% faster incident
                        detection improvement. These aren't marketing numbers — they're results I've
                        delivered in production.
                    </p>

                    <p class="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                        When I'm not coding, I'm usually deep in system design, refactoring legacy
                        codebases into something maintainable, mentoring mid-level devs, or setting
                        up CI/CD pipelines that actually work on Fridays.
                    </p>
                </div>

                <!-- Achievements / Impact Cards -->
                <div class="grid grid-cols-1 gap-6">
                    <!-- Card 1 -->
                    <div
                        class="bg-white dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div class="text-5xl font-black text-indigo-600 dark:text-indigo-400">
                            40%
                        </div>
                        <div class="mt-2 text-gray-900 dark:text-white font-semibold">
                            Faster payout cycles
                        </div>
                        <div class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            TruvoTrade hedge-fund platform
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div
                        class="bg-white dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div class="text-5xl font-black text-indigo-600 dark:text-indigo-400">
                            &lt; 0.5%
                        </div>
                        <div class="mt-2 text-gray-900 dark:text-white font-semibold">
                            Checkout/order failure rate
                        </div>
                        <div class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            Ruul multi-tenant marketplace
                        </div>
                    </div>

                    <!-- Card 3 -->
                    <div
                        class="bg-white dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div class="text-5xl font-black text-indigo-600 dark:text-indigo-400">
                            60%
                        </div>
                        <div class="mt-2 text-gray-900 dark:text-white font-semibold">
                            Reduction in MTTD
                        </div>
                        <div class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            Koinpark real-time operations dashboard
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// No script needed – dark mode handled globally
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
