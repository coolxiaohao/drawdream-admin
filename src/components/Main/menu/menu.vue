<template>
    <div id="CuttomMenu">
        <el-menu background-color="#20222A" text-color="#ffffff" default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="collapsed">
            <div class="logo-con">
                <!--如果图片为空 回返回默认得图片-->
                <el-avatar :size="imgSize" @error="errorHandler" :src="logoImg">
                    <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" alt=""/>
                </el-avatar>
            </div>
            <!--        <h2 v-show="!isCollapse" style="text-align: center;margin-top: 0.5rem;margin-bottom: 1rem;">欢迎</h2>-->
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
    </div>

</template>

<script>
    import logoImg from '@/assets/logo.png'
    export default {
        name: "CuttomMenu",
        data() {
            return {
                isCollapse: false,
                // fold: "el-icon-s-fold",
                // imgSize: 80,
                logoImg : logoImg,
            };
        },
        props:{
            collapsed: {
                type: Boolean
            },
            fold:{
                type: String
            },
            imgSize:{
                type: Number
            },
        },
        methods: {
            // clickCollapse(){
            //     console.log(this.collapsed)
            //     this.collapsed = !this.collapsed
            //
            //     if (this.collapsed){
            //         this.fold = "el-icon-s-unfold"
            //         this.imgSize= 50;
            //     }else {
            //         this.fold = "el-icon-s-fold"
            //         this.imgSize= 100;
            //     }
            //
            // },
            errorHandler(){
                return true
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .logo-con {
        margin-top: 0.5rem;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 250px;
        min-height: 100%;
    }
    .el-menu--collapse{
        min-height: 100%;
    }

</style>