<template>
  <div class="mt-5">
    <span class="inline-block mb-2">Attach</span>
    <!-- <FileField /> -->
    <img id="image" />
    <form enctype="multipart/form-data">
      <input
        type="file"
        @change="fileseleted"
        ref="file_upload2"
        class="btn btn-normal btn--ideeza px-10 py-4 block lg: iinline-block"
        style="display:none"
      />
    </form>
    <button
      class="ml-5 btn btn-small btn--ideeza px-2 text-xs"
      @click="$refs.file_upload2.click()"
    >SelectImage</button>
  </div>
</template>

<script>
export default {
  name: "image-upload",
  props: {
    btn: {
      type: String,
      default: "btn--ideeza"
    },
    borderClass: {
      type: String,
      default: "border-gray-300"
    }
  },
  data: function() {
    return {
      files: null,
      file:null,

    };
  },
  methods: {

     fileseleted(evt) {
      var reader = new FileReader();
      reader.onload = function(e) {
        // get loaded data and render thumbnail.
        document.getElementById("image").src = e.target.result;
      };

      // read the image file as a data URL.
      reader.readAsDataURL(evt.target.files[0]);

      // this.file = this.$refs.file.files[0];
      console.log("file_upload:", evt);
      this.file = evt.target.files[0];

      this.$emit('selected', this.file)

     },
      handleFileChange(e) {
        let file = e.target.files[0];
        if (file && file.name) {
          this.files = file.name;
        } else {
          this.files = null;
        }
        this.$emit("input", file);
      }

  }
};
</script>

<style scoped>
.file-select {
  @apply block w-full bg-white border border-solid border-gray-300 text-lg p-2;
}
.file-select > .select-button {
  padding: 1rem;

  color: white;
  background-color: #2ea169;

  border-radius: 0.3rem;

  text-align: center;
  font-weight: bold;
}

.file-select > input[type="file"] {
  display: none;
}
</style>
