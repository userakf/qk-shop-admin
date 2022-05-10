<template>
    <div class="waterfallsflow">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
        </ul>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.waterfallsflow{
    ul{
        margin: 0;
        padding: 0;
        list-style-type: none;
        // column-count: 2;
        // column-gap: 30px;
        display: flex;
        flex-flow: column wrap;
        height: 800px;
        li{
            width: 300px;
            height: 200px;
            display: inline-block;
            border: 1px solid #000;
            line-height: 200px;
            text-align: center;
            margin: 5px;
        }
    }
}
</style>