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

        statusMessage.value = 'Message sent successfully! I will reply within 24 hours.'
        form.value = { name: '', email: '', message: '' }
    } catch (error) {
        statusMessage.value = 'Oops! Something went wrong. Try again or email me directly.'
        console.error('EmailJS error:', error) // keep this – helps debug
    } finally {
        sending.value = false
        setTimeout(() => (statusMessage.value = ''), 5000)
    }
}
</script>

<template>
    <div>
        <form @submit.prevent="sendEmail" class="space-y-6">
            <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >Name</label
                >
                <input
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800/70 dark:text-white border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
                    placeholder="Your name"
                />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >Email</label
                >
                <input
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800/70 border dark:text-white border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
                    placeholder="your.email@example.com"
                />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >Message</label
                >
                <textarea
                    v-model="form.message"
                    rows="6"
                    required
                    class="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800/70 dark:text-white border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
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
                :class="statusMessage.includes('success') ? 'text-green-600' : 'text-red-600'"
                class="mt-4 text-center font-medium"
            >
                {{ statusMessage }}
            </div>
        </form>
    </div>
</template>
