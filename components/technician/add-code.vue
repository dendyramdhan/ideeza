<template>
  <div class="shadow-md mx-2">
    <div class="w-full ">
      <div class="bg-white p-5 md:flex items-center" >
        <div class="flex items-center mr-5">
          <span class="mr-2">File name </span>
          <input placeholder="e.g filename.js" v-model="file_name" class="w-40 bg-white border border-solid border-gray-300 text-sm p-1 mb-2" style="margin: 0">
        </div>
        <div class="flex items-center mr-5">
          <span class="mr-2">Language </span>
          <select v-model="selectedLanguage" @change="languageChange"  class="language-select w-40 border mb-2" ref="file_type" style="margin: 0">
            <option  value="sh" >
            Bash
          </option><option selected  value="c_cpp" >
            C
          </option><option  value="c_cpp" >
            C++
          </option><option  value="clojure" >
            Clojure
          </option><option  value="cobol" >
            Cobol
          </option><option  value="coffee" >
            CoffeeScript
          </option><option  value="d" >
            D
          </option><option  value="elixir" >
            Elixir
          </option><option  value="erlang" >
            Erlang
          </option><option  value="fsharp" >
            F#
          </option><option  value="golang" >
            Go
          </option><option  value="haskell" >
            Haskell
          </option><option  value="java" >
            Java
          </option><option  value="javascript" >
            Javascript
          </option><option  value="kotlin" >
            Kotlin
          </option><option  value="mysql" >
            MySQL
          </option><option  value="perl" >
            Perl
          </option><option  value="php" >
            PHP
          </option>
          <option  value="python" > Python </option>
          <option  value="r" >R </option>
          <option  value="ruby" >
            Ruby
          </option>
          <option  value="rust" > Rust </option>
          <option  value="scala" >
            Scala
          </option><option  value="scheme" >
            Scheme
          </option><option  value="swift" >
            Swift
          </option><option  value="vbscript" >
            VB
          </option>
          </select>
        </div>
         <input
            type="file"
            @change="handleAddFileChange"
            style="display:none;"
            ref="upload_code"
          />          
        <button class="btn pill-button px-5 mr-5 mb-2" @click="$refs.upload_code.click()" >Upload Code</button>
        <button class="btn pill-button px-5 mr-5 mb-2">Upload Image</button>
        <!-- <button class="btn pill-button px-5 mb-2">Run</button> -->
      </div>
    </div>
    <div>
      <div class="code-container relative w-full bg-black py-5">
        <div id="editor" ref="code_editor"></div>
      </div>
    </div>
  </div>
</template>

<script>
    import  DropDownField from '~/components/form/dropdown-field.vue'
    export default {
        name: "add-code",
        components: {
            DropDownField
        },
        data: function () {
            return {
              editor: null,
              contents: "// type your code down. \n",
              selectedLanguage: 'c_cpp',
              file_name: ""
            }
        },
      mounted() {
        this.editor = ace.edit("editor", {
          selectionStyle: "text"
        });
        this.languageChange()
        this.setEditorTheme()
        this.editor.setValue(this.contents)
      },
        methods: {

          languageChange() {

              this.editor.session.setMode('ace/mode/'+this.selectedLanguage);

          },
          setEditorTheme() {
            this.editor.setTheme('ace/theme/monokai');
          },
          getEditorContents(){
            return this.editor.getValue();
          },
          setEditorContents(contents) {
            this.editor.setValue(contents);
          },
          handleAddFileChange(e){
            // console.log("handleAddFileChange :", e.target.files[0])
            var reader = new FileReader();
            let that = this
            reader.onload = function(){
              var text = reader.result;
              console.log("readed text :", text)
              that.editor.setValue(text);
              // this.content = text
            };
            reader.readAsText(e.target.files[0]);
          }

        },
        fetchData(){
          console.log("fetch data")
        }

    }
</script>

<style>
  .code-container{
    height: 300px;
  }
  #editor {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    word-spacing: normal;
    font-size: 14px;
  }
  select.language-select{
    min-width: initial !important;
    max-width: initial !important;
  }

</style>
