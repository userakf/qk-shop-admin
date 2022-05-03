import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter',{
    state:() => ({
        count:0
    }),
    actions:{
        increnemt(){
            this.count++
        }
    }
})

// export default useCounterStore