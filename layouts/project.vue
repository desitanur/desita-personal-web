<script setup lang="ts">
useHead({
    link: [
        { rel: 'stylesheet', href: '/assets/fontawesome/css/fontawesome.css' },
        { rel: 'stylesheet', href: '/assets/fontawesome/css/brands.css' },
        { rel: 'stylesheet', href: '/assets/fontawesome/css/solid.css' },
        { rel: 'stylesheet', href: '/assets/fontawesome/css/regular.css' },
    ],
});
</script>

<template>
    <main
        class="min-h-screen w-full bg-primary-background text-primary-dark m-0 p-0 relative overflow-hidden"
    >
        <!-- background decoration -->
        <div
            class="absolute z-0 -top-[100px] left-[493px] w-[330px] h-[330px] animate-pulse rounded-full opacity-60 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-babyblue from-0% to-primary-background/0 to-70%"
        ></div>
        <div
            class="absolute z-0 top-[185px] right-[-252px] w-[824px] h-[824px] animate-pulse rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-lilac from-0% to-primary-background/0 to-70%"
        ></div>
        <div
            class="absolute z-0 -bottom-[70px] -left-[180px] w-[575px] h-[575px] animate-pulse rounded-full opacity-80 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-pink from-0% to-primary-background/0 to-70%"
        ></div>

        <!-- page contents -->
        <div class="w-full pb-20 relative z-10">
            <slot />
        </div>
    </main>
</template>
