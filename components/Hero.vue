<script setup lang="ts">
const delay = 120;
const textGreeting = 'Hi, welcome to'.split(' ');
const textDesign = 'DESIGN'.split('');
const textProtfolio = 'PORTFOLIO'.split('');
const textBy = 'By: DESITA NUR ROSYIDIANA'.split('');
</script>

<template>
    <section
        id="hero"
        class="min-h-screen pt-14 md:pt-[100px] pb-14 w-full px-6 lg:px-[160px] flex flex-col gap-4 justify-between"
    >
        <div class="block lg:hidden"></div>
        <div class="flex flex-col gap-8 md:gap-5">
            <div class="flex flex-col gap-3">
                <div class="text-lg md:text-3xl overflow-hidden flex justify-start items-center">
                    <span
                        v-for="(i, idx) in textGreeting"
                        class="mr-2 -translate-y-full"
                        v-motion
                        :initial="{ y: -100 }"
                        :enter="{ y: 0 }"
                        :delay="delay * (idx + 1)"
                        :duration="600"
                    >
                        {{ i }}
                    </span>
                </div>
                <p class="text-4xl md:text-8xl">
                    <span
                        v-for="(i, idx) in textDesign"
                        class="opacity-0 mr-2 md:mr-6"
                        v-motion
                        :initial="{ opacity: 0 }"
                        :enter="{ opacity: 1 }"
                        :delay="delay * textGreeting.length + delay * (idx + 4)"
                        :duration="600"
                        >{{ i }}
                    </span>
                </p>
                <p class="text-4xl md:text-8xl">
                    <span
                        v-for="(i, idx) in textProtfolio"
                        class="opacity-0 mr-2 md:mr-6"
                        v-motion
                        :initial="{ opacity: 0 }"
                        :enter="{ opacity: 1 }"
                        :delay="
                            delay * textGreeting.length +
                            delay * textDesign.length +
                            delay * (idx + 4)
                        "
                        :duration="600"
                        >{{ i }}
                    </span>
                </p>
            </div>
            <div
                class="bg-primary-light/40 h-px w-0"
                v-motion
                :initial="{ width: '0%' }"
                :enter="{ width: '100%' }"
                :delay="200"
                :duration="1200"
            ></div>
            <p class="text-lg md:text-2xl">
                <span
                    v-for="(i, idx) in textBy"
                    class="opacity-0"
                    v-motion
                    :initial="{ opacity: 0 }"
                    :enter="{ opacity: 1 }"
                    :delay="delay * textGreeting.length + 60 * (idx + 1)"
                    :duration="200"
                    >{{ i }}
                </span>
            </p>
        </div>
        <div class="flex justify-start">
            <div
                class="p-0.5 rounded-3xl opacity-0 bg-gradient-spin"
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :enter="{ opacity: 1, y: 0, scale: 1 }"
                :variants="{ custom: { scale: 2 } }"
                :delay="200"
                :duration="1200"
            >
                <div class="px-6 py-3 rounded-[22px] text-2xl md:text-3xl bg-primary-dark">
                    UIUX Designer
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.bg-gradient-spin {
    position: relative;
    overflow: hidden;
    background-color: transparent;
}

.bg-gradient-spin:after {
    content: '';
    display: block;
    z-index: -1;
    position: absolute;
    top: -7rem;
    right: 0;
    bottom: -7rem;
    left: 0;
    background-image: linear-gradient(#573b94, #1002a5, #1ac3af, #4719a9);
    animation: rotate-gradient linear 2s infinite;
}

@keyframes rotate-gradient {
    to {
        transform: rotate(360deg);
    }
}
</style>
