<template>
  <div class="shadow-md">
    <div class="w-full ">
      <div class="bg-white p-5 flex items-center" >
        <div class="flex items-center mr-5">
          <span class="mr-2">File name </span>
          <input placeholder="e.g filename.js" class="w-40 bg-white border border-solid border-gray-300 text-sm p-1 ">
        </div>
        <div class="flex items-center mr-5">
          <span class="mr-2">Language </span>
          <DropDownField styleHeight="tiny" class="w-32"  />
        </div>
        <button class="btn pill-button px-5 mr-5">Upload Code</button>
        <button class="btn pill-button px-5 mr-5">Upload Image</button>
        <button class="btn pill-button px-5">Run</button>
      </div>
    </div>
    <div>
      <client-only placeholder="Loading...">
        <codemirror v-model="code"
                    :options="cmOption"
                    @cursorActivity="onCmCursorActivity"
                    @ready="onCmReady"
                    @focus="onCmFocus"
                    @blur="onCmBlur">
        </codemirror>
      </client-only>
    </div>


  </div>
</template>

<script>
    import 'codemirror/theme/base16-dark.css'
    import  DropDownField from '~/components/form/dropdown-field.vue'
    export default {
        name: "add-code",
        components: {
            DropDownField
        },
        data: function () {
            return {
                code: 'int main(){}',
                cmOption: {
                    tabSize: 4,
                    foldGutter: true,
                    styleActiveLine: true,
                    lineNumbers: true,
                    line: true,
                    keyMap: "sublime",
                    mode: 'text/x-csrc',
                    theme: 'base16-dark',
                    extraKeys: {
                        'F11'(cm) {
                            cm.setOption("fullScreen", !cm.getOption("fullScreen"))
                        },
                        'Esc'(cm) {
                            if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false)
                        }
                    }
                }
            }
        },
        methods: {
            onCmCursorActivity(codemirror) {
                console.log('onCmCursorActivity', codemirror)
            },
            onCmReady(codemirror) {
                console.log('onCmReady', codemirror)
            },
            onCmFocus(codemirror) {
                console.log('onCmFocus', codemirror)
            },
            onCmBlur(codemirror) {
                console.log('onCmBlur', codemirror)
            }
        }
    }
</script>

<style scoped>

</style>
