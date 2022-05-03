// export default () => {
//     return (
//         <button>我的按钮</button>
//     )
// }

import { defineComponent, ref } from "vue";

interface PorpsType {
    msg:string
}

export default defineComponent({
    props:{
        msg:{
            type:String,
            required:true
        }
    },
    // render(){
    //     return (
    //         <button>{ this.msg }</button>
    //     )
    // }
    setup(){
        const count = ref(0)
        return (props:PorpsType) => (
            <div>
                <p>{ count.value }</p>
                <button>{ props.msg }</button>
            </div>
        )
    }
})