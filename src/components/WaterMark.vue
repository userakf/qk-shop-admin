<template>
    <!-- 水印功能 -->
    <div ref="waterMarkRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import imgUrl from '../assets/logo.webp'

export interface WaterMarkConfig {
    msg:string,
    width:number,
    height:number,
    imgURL:string
}

const defaultConfig:WaterMarkConfig =  {
    msg:'水印',
    width:200,
    height:200,
    imgURL:imgUrl
}
const props = defineProps<{
    config:WaterMarkConfig | null
}>()

Object.assign(defaultConfig,props.config)

const waterMarkRef = ref(null)
const canvasWM = () => {
    const canvas = document.createElement('canvas'),
        msg = defaultConfig.msg,
        width: number = defaultConfig.width,
        height: number = defaultConfig.height

    const waterNode = (waterMarkRef.value as HTMLElement)
    const textNode = waterNode.parentElement

    canvas.setAttribute('width', width + 'px')
    canvas.setAttribute('height', height + 'px')
    canvas.className = 'water-mark'
    // 添加背景
    const canvasImage = new Image()
    canvasImage.src = imgUrl
    const ctx = canvas.getContext('2d')
    
    canvasImage.onload = () => {
        ctx.drawImage(canvasImage,0,0,width,height)
        ctx.fillText(msg, parseFloat(`${width}`) / 2, parseFloat(`${height}`) / 2)

        textNode.appendChild(canvas)
        waterNode.remove()
    }
}
const mountWaterMark = ([ MutationNode ]:MutationRecord[], parentNode: HTMLElement) => {
    // 找出被删水印
    Array.from(MutationNode.removedNodes).forEach((node) => {
        if(node && (node as HTMLElement).className.includes('water-mark')){
            // 重新添加水印
            parentNode.appendChild(node)
        }
    })
}

onMounted(() => {
    // doWaterMark()
    // 挂载 水印
    canvasWM()
    const parentNode = (waterMarkRef.value as HTMLElement).parentElement
    parentNode.style.position = 'relative'
    const cbs = (MutationNode) => {
        // 重新挂载水印
        mountWaterMark(MutationNode, parentNode)
    }
    const observer = new MutationObserver(cbs)
    observer.observe(parentNode, {
        childList: true, // 监听子元素数量变化
    });
})

</script>

<style lang="scss">
.water-mark {
    position: absolute;
    bottom:0;
    right: 0;
    opacity: 0.7;
    border-radius: 100%;
}
</style>