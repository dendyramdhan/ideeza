<template>
    <div class="md:flex">
        <Electronics class="flex-1"/>
        <Cover  class="flex-1 cover"/>
    </div>
</template>
<script>
import Electronics from '~/components/user/pro/pro-electronics.vue'
import Cover from '~/components/user/pro/pro-cover.vue'
export default {
    components: {
        Electronics,
        Cover
    }
}
</script>
<style scoped>
.cover{
    margin-top: 197px;
}
</style>