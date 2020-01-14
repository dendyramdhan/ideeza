<template>
    <div class="main-contents">
        <div class="bg-white rounded border-ideeza border shadow p-4 mb-10">
        <h4 class="mb-10 text-ideeza font-bold">Adding new article</h4>
            <div class="text-ideeza-dark text-sm mb-3 font-bold">Article name</div>
            <input type="text" name="" id="" class="border rounded border-ideeza-dark px-4 py-2 w-full md:w-64 mb-4" placeholder="name" v-model="name">
            <div class="text-ideeza-dark text-sm mb-3 font-bold">Category</div>
            <tag-input
            element-id="tags"
            v-model="category"
            :typeahead-hide-discard="true"
            :limit="1"
            placeholder="Add Category"
            :typeahead-always-show="true"
            :existing-tags="[
                { key: 'code', value: 'Code' },
                { key: 'electronics', value: 'Electronics' },
                { key: 'parts', value: 'Parts' },
            ]"
            :typeahead="true"
            ></tag-input>
            <div class="text-ideeza-dark text-sm mb-3 font-bold">Description</div>
            <textarea name="" id="" cols="30" rows="8" class="border rounded border-ideeza-dark px-4 py-2 w-full md:w-128  mb-4" v-model="description"></textarea>
            <div class="w-full md:w-64 mb-3">
                <file-field border-class="border-ideeza-dark rounded" btn="btn--ideeza-dark" />
            </div>
            <div>
                <button class="btn--ideeza px-5 py-2 rounded text-xs mr-5" @click="preview">Preview</button>
                <button class="btn--ideeza-dark px-5 rounded py-2 text-xs mr-5">Publish</button>
            </div>
        </div>
        <MyIdeeza v-click-outside="onClickOutside" v-if="showMyIdeeza" />
    </div>
</template>
<script>
 import FileField from '~/components/form/file-field.vue';
import TagsInput from '@voerro/vue-tagsinput/src/VoerroTagsInput.vue'
export default {
    components: {
        'file-field': FileField,
        'tag-input': TagsInput
    },
    data() {
        return {
            showMyIdeeza: false,
            selectedTags: null,
            article: {
                name: null,
                description: null,
                category: null
            }
        }
    },
    methods: {
        upload3dModel(param){
          this.uploadData = param;
        },
        preview() {
            localStorage.setItem("blogarticlename", this.article.name);
            localStorage.setItem("blogcategoryna", this.article.category);
            localStorage.setItem("blogdescriptionNameChange", this.article.description);
            this.$router.push("/user/blog/preview");
        }
    }
}
</script>
<style>
.tags-input-wrapper-default{
    @apply border rounded border-ideeza-dark px-4 py-2 w-full mb-4;
}
.tags-input-root .tags-input-badge{
    @apply border rounded bg-ideeza-dark py-1 px-2 mr-1 text-white text-sm;
}
@screen md {
  .tags-input-wrapper-default{
    @apply w-64;
  }
}
</style>