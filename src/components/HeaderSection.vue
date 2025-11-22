<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)
const mobileMenuOpen = ref(false)

const toggleDarkMode = () => {
    isDark.value = !isDark.value
    if (isDark.value) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    if (
        savedTheme === 'dark' ||
        (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        isDark.value = true
        document.documentElement.classList.add('dark')
    } else {
        isDark.value = false
        document.documentElement.classList.remove('dark')
    }
})
</script>

<template>
    <header
        class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50"
    >
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <!-- Logo / Name -->
                <div class="shrink-0 flex items-center">
                    <a
                        href="#"
                        class="text-2xl font-bold text-gray-900 dark:text-white tracking-tight"
                    >
                        Anthony Nnanna
                    </a>
                </div>

                <!-- Desktop Navigation -->
                <nav class="hidden md:flex items-center space-x-10">
                    <a
                        href="#hero"
                        class="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition"
                        >Home</a
                    >
                    <a
                        href="#about"
                        class="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition"
                        >About</a
                    >
                    <a
                        href="#projects"
                        class="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition"
                        >Projects</a
                    >
                    <a
                        href="#contact"
                        class="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition"
                        >Contact</a
                    >
                </nav>

                <!-- Dark Mode Toggle + Mobile Menu Button -->
                <div class="flex items-center gap-4">
                    <button
                        @click="toggleDarkMode"
                        class="p-3 rounded-xl bg-gray-100 dark:bg-gray-800/70 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                        aria-label="Toggle dark mode"
                    >
                        <svg
                            v-if="isDark"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464a1 1 0 106l-.707-.707a1 1 0 10-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <svg
                            v-else
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                            />
                        </svg>
                    </button>

                    <!-- Mobile menu button -->
                    <button
                        @click="mobileMenuOpen = !mobileMenuOpen"
                        class="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300"
                    >
                        <svg
                            v-if="!mobileMenuOpen"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        <svg
                            v-else
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div
            v-if="mobileMenuOpen"
            class="md:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800"
        >
            <div class="px-6 pt-4 pb-6 space-y-3">
                <a
                    href="#hero"
                    @click="mobileMenuOpen = false"
                    class="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >Home</a
                >
                <a
                    href="#about"
                    @click="mobileMenuOpen = false"
                    class="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >About</a
                >
                <a
                    href="#projects"
                    @click="mobileMenuOpen = false"
                    class="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >Projects</a
                >
                <a
                    href="#contact"
                    @click="mobileMenuOpen = false"
                    class="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >Contact</a
                >
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    font-family:
        'Inter',
        system-ui,
        -apple-system,
        sans-serif;
}
</style>
