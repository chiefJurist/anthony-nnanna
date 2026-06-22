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
                <div class="space-y-8">
                    <p class="lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        I'm a Senior Full-Stack Developer who builds systems that don't just work,
                        they perform under real pressure and scale without breaking. I specialise in
                        Vue.js and Laravel stacks and have spent the last 7+ years shipping
                        production-grade web applications for startups, agencies, and NGOs across
                        the US and beyond.
                    </p>

                    <p class="lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        I own full delivery cycles from architecture decisions and API design to
                        deployment and server infrastructure. I've built real-time trading engines
                        with atomic concurrency handling, headless CMS platforms, custom donation
                        and booking systems, and multi-client codebases managed across concurrent
                        projects without dropping quality or consistency.
                    </p>

                    <p
                        class="lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium"
                    >
                        I lead feature-planning conversations directly with business owners and
                        clients, translating requirements into clean technical specs and
                        maintainable implementations. I write code that is tested, documented, and
                        structured because the next developer scaling it or the client depending on
                        it at 2am deserves nothing less. PHPUnit, Pest, CI/CD pipelines, GitHub
                        Actions; these aren't afterthoughts, they're part of how I ship.
                    </p>

                    <p class="lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        When I'm not coding, I'm deep in system design, improving deployment
                        workflows, or refining the architecture of whatever I'm currently building,
                        because clean, fast, and reliable isn't a goal, it's the baseline.
                    </p>
                </div>

                <!-- Achievements / Impact Cards -->
                <div class="grid grid-cols-1 gap-6">
                    <!-- Card 1 -->
                    <div
                        class="bg-white dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div class="text-4xl font-black text-indigo-600 dark:text-indigo-400">
                            48hrs
                        </div>
                        <div class="mt-2 text-gray-900 dark:text-white font-semibold">
                            Concurrency-safe trading engine delivered.
                        </div>
                        <div class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            Limit-Order Exchange Engine - technical assessment
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div
                        class="bg-white dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div class="text-4xl font-black text-indigo-600 dark:text-indigo-400">
                            7+
                        </div>
                        <div class="mt-2 text-gray-900 dark:text-white font-semibold">
                            Years shipping production web applications.
                        </div>
                        <div class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            Gigabyte Developers, Sourcedware, Jars of Glory NGO
                        </div>
                    </div>

                    <!-- Card 3 -->
                    <div
                        class="bg-white dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div class="text-4xl font-black text-indigo-600 dark:text-indigo-400">
                            3+
                        </div>
                        <div class="mt-2 text-gray-900 dark:text-white font-semibold">
                            Concurrent client projects managed simultaneously.
                        </div>
                        <div class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            Sourcedware - multi-client agency environment.
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
