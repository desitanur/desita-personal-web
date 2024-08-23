<script setup lang="ts">
import type { ProjectParsedContent } from '~/types';

definePageMeta({
    layout: 'project',
});

const route = useRoute();

const showcase = ref(false);
const modal = ref(false);

const openModal = () => {
    modal.value = true;
    setTimeout(() => {
        showcase.value = true;
    }, 200);
};

const closeModal = () => {
    showcase.value = false;
    setTimeout(() => {
        modal.value = false;
    }, 500);
};

const project = await queryContent<ProjectParsedContent>('projects')
    .where({ _path: route.path })
    .findOne();

useSeoMeta({
    title: project.title || 'Desita Rosyidiana - UIUX Designer',
    ogTitle: project.title || 'Desita Rosyidiana - UIUX Designer',
    description: project.short_description || '',
    ogDescription: project.short_description || '',
});
</script>

<template>
    <div class="w-full">
        <!-- navigation -->
        <div class="w-full px-2 sm:px-10 xl:px-[60px] pt-4 pb-3">
            <NuxtLink
                :to="{ name: 'index', hash: `#project-${project.id}` }"
                class="px-4 h-[56px] gap-2 items-center inline-flex transition-all duration-500 hover:font-bold"
            >
                <IconFontAwesome icon="fa-solid fa-chevron-left" />
                <span>BACK</span>
            </NuxtLink>
        </div>

        <div class="w-full h-full px-6 sm:px-14 xl:px-[160px] flex flex-col gap-2">
            <h1 class="text-3xl xl:text-4xl font-bold">
                {{ project.title }}
            </h1>
            <p class="text-xl xl:text-2xl text-primary-dark/70">
                Client: <span class="font-bold text-primary-dark">{{ project.client }}</span>
            </p>
        </div>
        <div
            class="w-full pl-6 pr-6 sm:pl-14 xl:pl-[160px] sm:pr-14 lg:pr-0 mt-10 grid gap-x-16 transition-all duration-1000"
            :class="[
                showcase
                    ? 'grid-cols-1 lg:grid-cols-[30%_auto]'
                    : 'grid-cols-1 lg:grid-cols-[80%_auto]',
            ]"
        >
            <div>
                <div
                    v-if="project.tags"
                    class="inline-flex gap-3 px-5 py-2 items-center text-primary-light bg-gradient-to-r from-primary-dark via-accent-blue to-accent-purple rounded-lg"
                >
                    <template v-for="(tag, idx) in project.tags">
                        <span>{{ tag }}</span>
                        <div
                            v-if="idx < project.tags.length - 1"
                            class="h-[25px] w-px bg-primary-light"
                        ></div>
                    </template>
                </div>

                <div class="w-full mt-16 flex flex-col gap-12">
                    <div class="flex flex-col gap-6">
                        <!-- Description -->
                        <div class="flex flex-col gap-2">
                            <h3 class="text-lg font-semibold text-accent-blue">Description</h3>
                            <p v-html="project.description"></p>
                        </div>

                        <!-- Goals -->
                        <div v-if="project.goals" class="flex flex-col gap-2">
                            <h3 class="text-lg font-semibold text-accent-blue">Goals</h3>
                            <p v-html="project.goals?.description"></p>
                            <ul v-if="project.goals?.items" class="list-disc ml-4">
                                <li v-for="goal in project.goals.items">
                                    {{ goal }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Process -->
                    <div class="flex flex-col gap-3">
                        <h3 class="text-lg font-semibold text-accent-blue">Design Process</h3>
                        <div v-for="process in project.design_process" class="flex flex-col gap-2">
                            <div class="flex px-3 gap-2 font-medium items-center">
                                <IconFontAwesome :icon="process.icon || 'fa-solid fa-file'" />
                                {{ process.label }}
                            </div>
                            <ul v-if="process.items" class="list-disc ml-12">
                                <li v-for="item in process.items">{{ item }}</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Color Palette -->
                    <div class="flex flex-col gap-3">
                        <h3 class="text-lg font-semibold text-accent-blue">Color Palette</h3>
                        <div class="flex gap-2 flex-wrap">
                            <div v-for="color in project.color_palette" class="flex flex-col gap-1">
                                <div
                                    class="w-[140px] h-[60px] rounded-xl"
                                    :style="{ backgroundColor: '#' + color.hex || '000000' }"
                                ></div>
                                <p class="text-sm">{{ color.hex }}</p>
                                <p class="text-xs text-primary-dark/70">{{ color.label }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Technology -->
                    <div class="flex flex-col gap-3">
                        <h3 class="text-lg font-semibold text-accent-blue">Tools</h3>
                        <div class="flex justify-start gap-5 flex-wrap">
                            <img
                                v-for="tool in project.tools"
                                :src="`/assets/images/tools/${tool}.png`"
                                :alt="tool"
                                class="h-[50px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div
                @click="showcase = !showcase"
                class="h-[1347px] cursor-pointer rounded-l-3xl transition-all duration-1000 ease-in-out overflow-hidden hidden lg:block"
            >
                <div
                    class="bg-gradient-showcase h-full w-[1000px] flex justify-start items-start gap-4 py-10"
                >
                    <div class="h-full">
                        <div
                            class="px-3 py-4 flex justify-start items-center gap-2 transition-all duration-1000"
                            :class="[showcase ? 'translate-y-[670px]' : 'translate-y-0']"
                        >
                            <IconFontAwesome
                                icon="fas fa-chevron-left"
                                :class="
                                    showcase
                                        ? 'rotate-180 transition-all duration-500'
                                        : 'transition-all duration-500'
                                "
                            />
                            <Transition>
                                <span v-if="!showcase" class="font-medium"
                                    >Open <br />
                                    Example <br />
                                    Design</span
                                >
                            </Transition>
                        </div>
                    </div>
                    <div class="grow h-full">
                        <img
                            :src="`/assets/images/project/${route.params.slug}.png`"
                            :alt="project.title"
                            class="h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>

        <!-- modal project -->
        <button
            @click="openModal"
            class="fixed z-40 right-0 top-[170px] px-2 py-4 flex gap-1 items-center justify-center bg-accent-lilac/50 rounded-l-2xl backdrop-blur-lg lg:hidden"
        >
            <IconFontAwesome icon="fas fa-chevron-left" />
            <span class="font-medium text-xs"
                >Open <br />
                Example <br />
                Design</span
            >
        </button>

        <Transition>
            <div
                v-if="modal"
                class="fixed z-50 inset-0 py-6 pl-6 bg-primary-light/10 backdrop-blur-md"
            >
                <Transition name="slide-left">
                    <div
                        v-if="showcase"
                        class="bg-gradient-showcase rounded-l-3xl h-full w-full flex justify-start items-center gap-3"
                    >
                        <div @click="closeModal" class="h-full px-2 flex items-center">
                            <IconFontAwesome icon="fas fa-chevron-right" />
                        </div>
                        <div class="grow h-full pr-6 py-6 overflow-y-auto overscroll-contain">
                            <img
                                :src="`/assets/images/project/mobile/${route.params.slug}.png`"
                                :alt="project.title"
                                class="w-full object-cover"
                            />
                        </div>
                    </div>
                </Transition>
            </div>
        </Transition>
        <!-- end modal project -->
    </div>
</template>

<style scoped>
.bg-gradient-showcase {
    background-image: conic-gradient(from -90deg, #f8d8e3, #d0c5e7, #a0cceb, #ffffff, #f8d8e3);
}

.slide-left-enter-active,
.slide-left-leave-active {
    transition: transform 0.5s ease-in-out;
}

.slide-left-enter-from,
.slide-left-leave-to {
    transform: translateX(100%);
}
</style>
