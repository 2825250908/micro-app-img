

export const minxin = {
  data(){
    return {
        appName: 'main'
    }
  },
  created() {
    this.init()
  },
  methods:{
    init(){
        console.log('main init')
    }
  }
}