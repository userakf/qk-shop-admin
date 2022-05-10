<template>
    <div id="header">
        <el-row>
            <el-col :span="1">
                <ToggleSidebar />
            </el-col>
            <el-col :span="23">
                <BreadCrumb />
            </el-col>
        </el-row>
        <el-row class="right">
            <el-col :span="10">
                <Search />
            </el-col>
            <el-col :span="2">
                <FullScreen />
            </el-col>
            <el-col :span="2">
                <Bell />
            </el-col>
            <el-col :span="6">
                <DropDown />
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import ToggleSidebar from './ToggleSidebar.vue';
import BreadCrumb from './BreadCrumb.vue';
import FullScreen from './FullScreen.vue';
import Search from './Search.vue';
import Bell from './Bell.vue';
import DropDown from './DropDown.vue';
</script>

<style scoped lang="scss">
#header{
    display: flex;
    width: 100%;
    height: 100%;
    .el-row{
        width: 100%;
        display: flex;
        align-items: center;
        height: 100%;
        .el-col{
            display: flex;
            align-items: center;
            justify-content: left;
        }
        &.right{
            justify-content: right;
            .el-col{
                justify-content: center;
            }
        }
    }
}
</style>