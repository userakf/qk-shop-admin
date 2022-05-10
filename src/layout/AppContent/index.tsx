import { ref } from "vue"
interface Props {
    title: {
        type: string,
        default: () => ''
    }
}
interface Emit {
    emit: (event: 'add', ...args: any[]) => void
}
const title = ref('点击')
const count = ref(0)
export default (props: Props, { emit }: Emit) => {
    const emitCLick = (): void => {
        emit('add',title.value)
    }
    const testclick = (): void => {
        count.value++
    }
    return (
        <div>
            我是 {props.title}
            <el-button onClick={testclick}>{count.value}</el-button>
            <el-button onClick={emitCLick}>点击</el-button>
        </div>
    )
}