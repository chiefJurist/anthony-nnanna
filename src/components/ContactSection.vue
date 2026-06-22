<script setup>
import ContactForm from './Contact/ContactForm.vue'
import ContactLinks from './Contact/ContactLinks.vue'
import ContactTitle from './Contact/ContactTitle.vue'
</script>

<template>
    <section
        id="contact"
        class="py-24 lg:py-32 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <!-- Section Title -->
            <ContactTitle />

            <!-- Contact Grid -->
            <div class="grid lg:grid-cols-2 gap-16 items-start">
                <!-- Left: Contact Info + Links -->
                <ContactLinks />

                <!-- Right: Contact Form -->
                <ContactForm />
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
