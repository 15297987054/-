import Loading from "./index.vue";
import Vue from "vue";
class LoadingComponent{
    constructor(){
        this.init()
    }
    init(){
        let VM=Vue.extend(Loading)
        this.vm=new VM({
            el:document.createElement("div")
        })
    }
    open(){
        document.body.appendChild(this.vm.$mount().$el)
    }
    close(){
        document.body.removeChild(this.vm.$mount().$el)
    }
}
export default new LoadingComponent();