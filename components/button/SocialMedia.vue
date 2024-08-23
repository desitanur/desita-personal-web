<script setup lang="ts">
defineProps<{
    icon: string;
    label: string;
    desc: string;
    url: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
}>();
</script>

<template>
    <a
        :href="url"
        :target="target || '_blank'"
        class="flex w-full items-center max-w-[360px] px-4 py-3 gap-3 bg-primary-light/10 rounded-2xl hover:bg-primary-light hover:text-primary-dark hover:py-4 transition-all duration-500"
    >
        <div
            class="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-primary-light/10"
        >
            <IconFontAwesome :icon="icon" size="md" />
        </div>
        <div class="flex flex-col gap-1">
            <span class="text-sm sm:text-base">{{ label }}</span>
            <span class="sm:text-lg font-semibold">{{ desc }}</span>
        </div>
    </a>
</template>
