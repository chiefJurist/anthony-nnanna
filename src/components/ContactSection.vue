<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = ref({
    name: '',
    email: '',
    message: '',
})

const sending = ref(false)
const statusMessage = ref('')

const sendEmail = async () => {
    sending.value = true
    statusMessage.value = ''

    try {
        await emailjs.send(
            'service_d06ghy7', // your Service ID
            'template_sueyf0k', // your Template ID
            {
                name: form.value.name, // matches {{name}} in template
                email: form.value.email, // makes "Reply" button work in Gmail
                message: form.value.message, // matches {{message}}
                // add more variables here if you created them in the template
            },
            'a5i5PLdQj-oq74ZSr', // your Public Key (User ID)
        )

        statusMessage.value = 'Message sent successfully! I’ll reply within 24 hours.'
        form.value = { name: '', email: '', message: '' }
    } catch (error) {
        statusMessage.value = 'Oops! Something went wrong. Try again or email me directly.'
        console.error('EmailJS error:', error) // keep this – helps debug
    } finally {
        sending.value = false
    }
}
</script>

<template>
    <section
        id="contact"
        class="py-24 lg:py-32 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <!-- Section Title -->
            <div class="text-center mb-16">
                <h2
                    class="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight"
                >
                    Let's Work Together
                </h2>
                <div
                    class="mt-4 w-32 h-1.5 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full"
                ></div>
                <p class="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Currently open to new challenges (contract or full-time). If you're building
                    something that needs to scale, stay fast, and never break in production, let's
                    talk.
                </p>
            </div>

            <!-- Contact Grid -->
            <div class="grid lg:grid-cols-2 gap-16 items-start">
                <!-- Left: Contact Info + Links -->
                <div class="space-y-10">
                    <div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Get in touch
                        </h3>
                        <div class="space-y-5">
                            <div class="flex items-center gap-4">
                                <div class="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl">
                                    <svg
                                        class="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 2 0 0-2-2v-9a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2z"
                                        ></path>
                                    </svg>
                                </div>
                                <div>
                                    <div class="text-sm text-gray-500 dark:text-gray-500">
                                        Email
                                    </div>
                                    <a
                                        href="mailto:anthony.nnanna@proton.me"
                                        class="text-lg font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                                    >
                                        anthonynnannac@gmail.com
                                    </a>
                                </div>
                            </div>

                            <!-- <div class="flex items-center gap-4">
                                <div class="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl">
                                    <svg
                                        class="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <div class="text-sm text-gray-500 dark:text-gray-500">
                                        LinkedIn
                                    </div>
                                    <a
                                        href="https://linkedin.com/in/anthonynnanna"
                                        target="_blank"
                                        class="text-lg font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                                    >
                                        linkedin.com/in/anthonynnanna
                                    </a>
                                </div>
                            </div> -->

                            <div class="flex items-center gap-4">
                                <div class="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl">
                                    <svg
                                        class="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            fill-rule="evenodd"
                                            d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm-.334 3.5a.75.75 0 0 0-.338 1.154l5.614 7.45l-5.915 6.345l-.044.051H6.03l4.83-5.179l3.712 4.928a.75.75 0 0 0 .337.251h4.422a.75.75 0 0 0 .336-1.154l-5.614-7.45L20.017 4.5h-2.05l-4.83 5.18l-3.714-4.928a.75.75 0 0 0-.337-.252zm10.88 13.548L6.431 5.952H8.45l9.114 12.095z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <div class="text-sm text-gray-500 dark:text-gray-500">𝕏</div>
                                    <a
                                        href="https://x.com/chiefJurist"
                                        target="_blank"
                                        class="text-lg font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                                    >
                                        x.com/chiefJurist
                                    </a>
                                </div>
                            </div>

                            <div class="flex items-center gap-4">
                                <div class="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl">
                                    <svg
                                        class="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <div class="text-sm text-gray-500 dark:text-gray-500">
                                        GitHub
                                    </div>
                                    <a
                                        href="https://github.com/chiefjurist"
                                        target="_blank"
                                        class="text-lg font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                                    >
                                        github.com/chiefJurist
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Resume Download -->
                    <div class="pt-6">
                        <a
                            href="/Anthony-Nnanna.pdf"
                            download
                            class="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 100 100"
                            >
                                <path
                                    fill="currentColor"
                                    d="M84.514 49.615H67.009a4.91 4.91 0 0 0-4.679 3.406a12.92 12.92 0 0 1-12.329 8.983a12.92 12.92 0 0 1-12.329-8.983a4.92 4.92 0 0 0-4.681-3.406H15.486a4.92 4.92 0 0 0-4.919 4.919v28.054a4.92 4.92 0 0 0 4.919 4.917h69.028a4.92 4.92 0 0 0 4.919-4.917V54.534c0-2.719-2.2-4.919-4.919-4.919"
                                />
                                <path
                                    fill="currentColor"
                                    d="M48.968 52.237c.247.346.651.553 1.076.553h.003c.428 0 .826-.207 1.076-.558l13.604-19.133a1.33 1.33 0 0 0 .096-1.374a1.32 1.32 0 0 0-1.177-.716h-6.399V13.821c0-.735-.593-1.326-1.323-1.326H44.078c-.732 0-1.323.591-1.323 1.326v17.188h-6.404a1.323 1.323 0 0 0-1.076 2.09z"
                                />
                            </svg>
                            Download Resume (PDF)
                        </a>
                    </div>
                </div>

                <!-- Right: Contact Form -->
                <div>
                    <form @submit.prevent="sendEmail" class="space-y-6">
                        <div>
                            <label
                                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >Name</label
                            >
                            <input
                                v-model="form.name"
                                type="text"
                                required
                                class="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label
                                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >Email</label
                            >
                            <input
                                v-model="form.email"
                                type="email"
                                required
                                class="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label
                                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >Message</label
                            >
                            <textarea
                                v-model="form.message"
                                rows="6"
                                required
                                class="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
                                placeholder="Tell me about your project or opportunity..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            :disabled="sending"
                            class="w-full px-8 py-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold rounded-xl shadow-lg transition transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                        >
                            {{ sending ? 'Sending...' : 'Send Message' }}
                        </button>

                        <!-- Success / Error message -->
                        <div
                            v-if="statusMessage"
                            :class="
                                statusMessage.includes('success')
                                    ? 'text-green-600'
                                    : 'text-red-600'
                            "
                            class="mt-4 text-center font-medium"
                        >
                            {{ statusMessage }}
                        </div>
                    </form>
                </div>
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
