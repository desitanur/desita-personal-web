<script setup lang="ts">
useHead({
    link: [
        { rel: 'stylesheet', href: '/assets/fontawesome/css/fontawesome.css' },
        { rel: 'stylesheet', href: '/assets/fontawesome/css/brands.css' },
        { rel: 'stylesheet', href: '/assets/fontawesome/css/solid.css' },
        { rel: 'stylesheet', href: '/assets/fontawesome/css/regular.css' },
    ],
});

useHeadSafe({
    htmlAttrs: {
        class: 'scroll-smooth',
    },
});

const navItems = [
    {
        name: 'HOME',
        link: '#hero',
    },
    {
        name: 'ABOUT',
        link: '#about',
    },
    {
        name: 'PROJECT',
        link: '#project',
    },
];
</script>

<template>
    <main
        class="min-h-screen w-full bg-primary-dark text-primary-light m-0 p-0 relative overflow-hidden"
    >
        <!-- background decoration -->
        <div
            v-motion-fade-visible-once
            class="absolute z-0 top-6 right-3 w-[622px] h-[622px] animate-pulse rounded-full opacity-80 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-purple from-0% to-primary-dark/0 to-70%"
        ></div>
        <div
            v-motion-fade-visible-once
            class="absolute z-0 top-[94px] left-[303px] w-[330px] h-[330px] animate-pulse rounded-full opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-green from-0% to-primary-dark/0 to-70%"
        ></div>
        <div
            v-motion-fade-visible-once
            class="absolute z-0 top-[547px] left-[-126px] w-[575px] h-[575px] animate-pulse rounded-full opacity-80 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-blue from-0% to-primary-dark/0 to-70%"
        ></div>
        <div
            v-motion-fade-visible-once
            class="absolute z-0 top-[1306px] right-[226px] w-[622px] h-[622px] animate-pulse rounded-full opacity-60 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-purple from-0% to-primary-dark/0 to-70%"
        ></div>
        <div
            v-motion-fade-visible-once
            class="absolute z-0 top-[1714px] left-[-84px] w-[330px] h-[330px] animate-pulse rounded-full opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-green from-0% to-primary-dark/0 to-70%"
        ></div>
        <div
            v-motion-fade-visible-once
            class="absolute z-0 bottom-[600px] left-[344x] w-[575px] h-[575px] animate-pulse rounded-full opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-blue from-0% to-primary-dark/0 to-70%"
        ></div>
        <div
            v-motion-fade-visible-once
            class="absolute z-0 bottom-[104px] right-[-113px] w-[330px] h-[330px] animate-pulse rounded-full opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-green from-0% to-primary-dark/0 to-70%"
        ></div>

        <!-- navigation bar -->
        <nav class="flex justify-center sm:justify-end px-5 sm:px-16 fixed z-50 top-0 inset-x-0">
            <div class="flex flex-col sm:flex-row items-end gap-4 sm:gap-6">
                <div
                    v-motion-slide-top
                    class="h-[72px] px-5 sm:px-10 py-4 flex gap-2 sm:gap-6 items-end bg-primary-light/10 rounded-b-3xl backdrop-blur-xl"
                >
                    <a
                        v-for="item in navItems"
                        :key="item.name"
                        :href="item.link"
                        class="py-2 px-4 rounded-lg hover:bg-primary-light/20 transition-all duration-500"
                        >{{ item.name }}</a
                    >
                </div>
                <a
                    href="#contact"
                    class="py-4 px-5 backdrop-blur-xl flex items-center gap-2 rounded-2xl hover:bg-primary-light/80 hover:text-primary-dark transition-all duration-500"
                >
                    <IconFontAwesome icon="far fa-messages" />
                    <span class="hidden md:inline">Let's Talk</span>
                </a>
            </div>
        </nav>

        <!-- page contents -->
        <div class="w-full relative z-10 flex flex-col gap-40">
            <slot />

            <!-- footer -->
            <footer class="w-full px-6 lg:px-[160px]">
                <div class="w-full py-8 border-t border-primary-light">
                    <p class="text-center">
                        © {{ new Date().getFullYear() }} DESITA NUR ROSYIDIANA. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    </main>
</template>
