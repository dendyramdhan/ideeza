import emergebox from './emergebox.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  components: {
    emergebox
  },
  methods: {
    uploadElePartFile(event) {
      console.log('file upload', event)
      this.$store.state.emergeBoxVue3D.thisOfHelloWorld.$refs.comp3d.uploadCustomBody(event)
    },
    view2D (param) { // bool
      this.$store.state.emergeBoxVue3D.thisOfHelloWorld.$refs.comp3d.view2D(param)
    },
    view3D (param) { // bool
      this.$store.state.emergeBoxVue3D.thisOfHelloWorld.$refs.comp3d.view3D(param)
    },
    checkPosition (param) { // bool
      this.$store.state.emergeBoxVue3D.thisOfHelloWorld.$refs.comp3d.checkPosition(param)
    },
    save () {
      return this.$store.state.emergeBoxVue3D.thisOfHelloWorld.$refs.comp3d.save()
    },
    getData () {
      console.log(this.$store.state.emergeBoxVue3D.thisOfHelloWorld.$refs.comp3d.getData())
      return this.$store.state.emergeBoxVue3D.thisOfHelloWorld.$refs.comp3d.getData()
      /* **************** VUE DEV code *************** */
      // this.$store.state.emergeBoxVue3D.coreElectronicsGotData = this.$store.state.emergeBoxVue3D.thisOfHelloWorld.$refs.comp3d.getData()
      /* **************** VUE DEV code End's *************** */
    },
    getPartDataForAlgo(link) {
      console.log('part data for moshe:', this.$store.state.emergeBoxVue3D.thisOfHelloWorld.$refs.comp3d.getPartDataForAlgo(link))
      return this.$store.state.emergeBoxVue3D.thisOfHelloWorld.$refs.comp3d.getPartDataForAlgo(link)
    },
    sendData () {
      this.$store.state.emergeBoxVue3D.thisOfHelloWorld.$refs.comp3d.sendData()
    },
    saveData () {
      console.log('emergeboxVue3DEngine SAVE this data => ',
        this.$store.state.emergeBoxVue3D.thisOfHelloWorld.$refs.comp3d.saveData())
      // Vue dev added return here
      return this.$store.state.emergeBoxVue3D.thisOfHelloWorld.$refs.comp3d.saveData()
    },
    resetSavedData () {
      this.$store.state.emergeBoxVue3D.thisOfHelloWorld.$refs.comp3d.resetSavedData()
    },
    disposeEngine () {
      console.log('--- Dispose Engine called ---')
      this.$store.state.emergeBoxVue3D.thisOfHelloWorld.$refs.comp3d.disposeEngine()
    },
    updateObject (param) { // json updated
      console.log('updateObj ===> ', param)
      // console.log(`1: `, this)
      // console.log(`2: `, this.$store)
      // console.log(`3: `, this.$store.state)
      // console.log(`4: `, this.$store.state.emergeBoxVue3D)
      // console.log(`4: `, this.$store.state.emergeBoxVue3D.thisOfHelloWorld)
      // console.log(`5: `, this.$store.state.emergeBoxVue3D.thisOfHelloWorld.$refs)
      console.log(`6: `, this.$store.state.emergeBoxVue3D.thisOfHelloWorld.$refs.comp3d)
      this.$store.state.emergeBoxVue3D.thisOfHelloWorld.$refs.comp3d.updateObject(param)
    },
    toggleBackground (param) { // bool
      this.$store.state.emergeBoxVue3D.thisOfHelloWorld.$refs.comp3d.toggleBackground(param)
    },
    getLegs () { // return added by Vue dev
      return this.$store.state.emergeBoxVue3D.thisOfHelloWorld.$refs.comp3d.getLegs()
    },
    import_cover_data (data) {
      console.log(`############# import_cover_data ###########`)
      console.log(data)
    },
    save_both () {
      console.log('[save_both]',
        this.$store.state.emergeBoxVue3D.thisOfHelloWorld.$refs.comp3d.save_both())
      return this.$store.state.emergeBoxVue3D.thisOfHelloWorld.$refs.comp3d.save_both()
    },
    updateObjPrototype (param) {
  console.log({ updateObjPrototype : param })
      this.$store.state.emergeBoxVue3D.thisOfHelloWorld.$refs.comp3d.updateObjPrototype(param)
    }
  }
}
