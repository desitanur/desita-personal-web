<script setup lang="ts">
const iconSize = {
    sm: 16,
    md: 24,
};

type IconSize = keyof typeof iconSize;

defineProps<{
    size?: IconSize;
    class?: string;
    icon: string;
}>();
</script>

<template>
    <span :style="{ fontSize: `${iconSize[size || 'sm']}px` }" :class="class">
        <i :class="icon"></i>
    </span>
</template>
