<script setup lang="ts">
import type { ProjectParsedContent } from '~/types';

useSeoMeta({
    title: 'Desita Rosyidiana - UIUX Designer',
    ogTitle: 'Desita Rosyidiana - UIUX Designer',
    description:
        'I am Desita Nur Rosyidiana, people call me Desita. I have graduated from Telkom University Indonesia with a bachelors degree in Information Systems on 2021. I am currently working as UIUX Designer and interested with all about UIUX design world.',
    ogDescription:
        'I am Desita Nur Rosyidiana, people call me Desita. I have graduated from Telkom University Indonesia with a bachelors degree in Information Systems on 2021. I am currently working as UIUX Designer and interested with all about UIUX design world.',
});

const route = useRoute();

const projects = await queryContent<ProjectParsedContent>('projects')
    .sort({ id: -1 })
    .only(['id', 'title', 'short_description', 'client', '_path'])
    .find();

onMounted(() => {
    if (route.hash) {
        const element = document.querySelector(route.hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
</script>

<template>
    <div class="w-full">
        <!-- hero section -->
        <Hero />

        <!-- about me -->
        <section id="about" class="w-full px-6 lg:px-[160px] pt-[120px] flex gap-6 lg:gap-5">
            <p class="text-3xl md:text-6xl">Know <br />Me<br />More</p>
            <div class="h-px bg-primary-light mt-10 grow min-w-6 hidden lg:block"></div>
            <div class="pt-5 grow lg:grow-0 flex flex-col gap-y-8 lg:gap-y-[120px]">
                <div class="flex flex-col w-full lg:max-w-[664px] gap-3">
                    <div class="h-px bg-primary-light mb-4 min-w-6 lg:hidden"></div>
                    <p class="text-2xl md:text-4xl">About Me</p>
                    <p class="text-base md:text-xl">
                        Hi, nice to e-meet you! <br /><br />

                        I'm Desita Nur Rosyidiana, people call me Desita. I've graduated from Telkom
                        University Indonesia with a bachelor's degree in Information Systems on
                        2021.
                        <br /><br />

                        I'm currently working as UIUX Designer and interested with all about UIUX
                        design world. I'm in love with design and designing is also my favorite
                        thing to do. I have experienced for more than 3 years with several projects
                        that I work on.
                        <br /><br />

                        During my career, I have developed several skills, including UX Research, UX
                        Design, UI Design, Product Design, and also Product Manager.
                    </p>
                </div>
                <div class="flex justify-start">
                    <div
                        class="flex flex-col sm:flex-row gap-4 px-4 lg:px-5 py-3 rounded-3xl bg-primary-light/10 backdrop-blur-xl"
                    >
                        <a
                            href="#"
                            class="py-2 px-2 lg:px-4 text-base font-medium rounded-xl hover:bg-primary-light/20 transition-all duration-500"
                            >Creative CV</a
                        >
                        <a
                            href="#"
                            class="py-2 px-2 lg:px-4 text-base font-medium rounded-xl hover:bg-primary-light/20 transition-all duration-500"
                            >Resume</a
                        >
                    </div>
                </div>
            </div>
        </section>

        <!-- projects -->
        <section id="project" class="w-full px-6 lg:px-[160px] pt-[120px] flex flex-col gap-10">
            <div class="flex flex-col gap-3">
                <p class="text-3xl md:text-6xl">Project</p>
                <p class="text-base md:text-xl">Here are some projects that I have handled on</p>
            </div>
            <!-- card w button -->
            <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                <CardProject
                    v-for="(project, idx) in projects"
                    :key="idx"
                    :data="{
                        id: project.id,
                        title: project.title || 'Untitled',
                        client: project.client || 'Unknown',
                        shortDescription: project.short_description || 'No description',
                        pathUrl: project._path || '/',
                    }"
                />
            </div>
        </section>

        <!-- Get In Touch -->
        <section
            id="contact"
            class="w-full flex flex-col xl:flex-row gap-y-6 gap-x-10 pt-[160px] min-h-[700px]"
        >
            <div class="xl:grow px-6 xl:px-0 flex flex-col gap-3 md:gap-8 lg:gap-12">
                <div class="flex gap-5 items-center">
                    <div class="grow h-px bg-primary-light"></div>
                    <p class="flex-none text-4xl md:text-6xl">Get In Touch</p>
                </div>
                <div class="w-full flex flex-col items-end gap-4">
                    <p class="text-xl md:text-4xl">You can find me</p>
                    <ButtonSocialMedia
                        icon="fa-brands fa-instagram"
                        label="Instagram"
                        desc="@dstnur"
                        url="https://www.instagram.com/dstnur/"
                    />
                    <ButtonSocialMedia
                        icon="fa-brands fa-whatsapp"
                        url="https://wa.me/6281313072064"
                        label="WhatsApp"
                        desc="+6281313072064"
                    />
                    <ButtonSocialMedia
                        icon="fa-brands fa-linkedin-in"
                        url="https://www.linkedin.com/in/desitanur/"
                        label="LinkedIn"
                        desc="Desita Nur Rosyidiana"
                    />
                    <ButtonSocialMedia
                        icon="far fa-envelope"
                        url="mailto:desitarosyidiana@gmail.com"
                        target="_self"
                        label="Email"
                        desc="desitarosyidiana@gmail.com"
                    />
                </div>
            </div>
            <div class="flex justify-end xl:justify-start flex-none gap-2 h-5/6">
                <div
                    class="ml-6 sm:ml-0 w-2/5 sm:w-[300px] xl:w-[360px] rounded-l-2xl overflow-hidden"
                >
                    <img
                        src="/assets/images/Desita1.png"
                        alt="Desita Nur Rosyidiana"
                        class="w-full h-full object-cover"
                    />
                </div>
                <div class="w-3/5 sm:w-[300px] xl:w-[480px]">
                    <img
                        src="/assets/images/Desita2.png"
                        alt="Desita Nur Rosyidiana"
                        class="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    </div>
</template>
