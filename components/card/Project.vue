<script setup lang="ts">
defineProps<{
    data: {
        id: number;
        title: string;
        shortDescription: string;
        client: string;
        pathUrl: string;
    };
}>();
</script>

<template>
    <div
        :id="`project-${data.id}`"
        class="flex flex-col bg-primary-light/10 rounded-2xl overflow-hidden backdrop-blur-xl hover:bg-primary-light hover:text-primary-dark"
    >
        <div class="w-full h-full flex flex-col px-6 py-5 gap-5">
            <div class="w-full h-[200px] rounded-lg overflow-hidden">
                <img
                    :src="`/assets/images/project/thumbnail/${data.pathUrl.replace(
                        '/projects/',
                        '',
                    )}.png`"
                    :alt="data.title"
                    class="w-full h-full object-cover object-center"
                />
            </div>
            <div class="flex flex-col gap-2">
                <div class="w-full flex flex-col gap-1">
                    <p class="text-xl font-semibold">{{ data.title }}</p>
                    <p class="text-lg">{{ data.client }}</p>
                </div>
                <p class="text-base">
                    {{ data.shortDescription }}
                </p>
            </div>
        </div>
        <NuxtLink
            :to="{ path: data.pathUrl }"
            class="flex justify-center gap-2 items-center w-full bg-primary-light py-2 text-primary-dark font-bold hover:bg-primary-dark/10 transition-all duration-500"
        >
            <IconFontAwesome icon="fa-solid fa-chevrons-right" />
            <span>Design</span>
        </NuxtLink>
    </div>
</template>
