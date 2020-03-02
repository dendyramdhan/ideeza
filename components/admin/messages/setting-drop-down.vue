<template>
    <div v-click-outside="close" class="absolute dropdown right-0 bg-white z-10 shadow-lg rounded p-3 text-black font-semibold">
        <slot></slot>
    </div>
</template>
<script>
export default {
    methods: {
        close() {
            this.$emit('close');
        }
    }
}
</script>