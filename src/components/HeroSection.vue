<template>
    <section
        id="hero"
        class="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 pb-24 bg-linear-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950/20 transition-colors duration-500"
    >
        <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <!-- Left Text Column -->
            <div class="text-center md:text-left">
                <h1
                    class="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight"
                >
                    Anthony Nnanna
                </h1>
                <h2 class="mt-4 text-xl lg:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    Senior Full-Stack Engineer <br />
                    (Vue + Laravel + PHP + Rust)
                </h2>

                <p class="mt-8 lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    I design and build scalable, maintainable, and high-performing web systems that
                    balance elegant front-end experiences with robust back-end architecture. My code
                    powers products that stay fast under pressure, from startups shipping daily to
                    enterprises serving millions.
                </p>

                <p class="mt-6 lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    With over 5 years of full-stack experience, I’ve led cross-functional teams,
                    optimized app performance by over 20%, and delivered reliable systems using
                    Vue.js, Laravel, and modern CI/CD pipelines.
                </p>

                <!-- CTA Buttons -->
                <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a
                        href="#projects"
                        class="inline-flex items-center justify-center px-8 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        class="inline-flex items-center justify-center px-8 py-2 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600/10 dark:hover:bg-indigo-400/10 font-semibold rounded-xl transition"
                    >
                        Contact
                    </a>
                </div>
            </div>

            <!-- Right Visual Column -->
            <div class="flex justify-center md:justify-end">
                <img
                    src="/public/img/tony-img.jpg"
                    alt="Anthony Nnanna - Full-stack Engineer"
                    class="w-full max-w-md lg:max-w-lg rounded-full shadow-2xl object-cover ring-4 ring-indigo-600/20 dark:ring-indigo-600/30"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
// No script needed here – dark mode is handled globally by AppHeader
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
