<template>
    <div class="main-contents">
        <div class="bg-white rounded border-ideeza border shadow p-4">
        <h4>Adding new article</h4>
        </div>
        <MyIdeeza v-click-outside="onClickOutside" v-if="showMyIdeeza" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            showMyIdeeza: false
        }
    }
}
</script>