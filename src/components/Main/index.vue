<template>
    <div class="main">
        <el-container>
            <Menu :collapsed="isCollapse" :imgSize="imgSize" :fold="fold"/>

            <el-container>
                <!--header-->
                <el-header style="text-align: left; border-bottom: #e6e6e6 solid 1px;background-color: #ffffff;">
                    <span :model="isCollapse" @click="clickCollapse()" style="margin-right: 20px"><i :class="fold"></i></span>
                    <div style="position: absolute;right: 10px; top: 0;">
                        <el-dropdown>
                            <i class="el-icon-setting" style="margin-right: 15px;"></i>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>查看</el-dropdown-item>
                                <el-dropdown-item>新增</el-dropdown-item>
                                <el-dropdown-item>删除</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <span>coolhao</span>
                    </div>
                </el-header>
                <!--主内容-->
                <el-main>
                    <router-view/>
                    <!--          <el-card>-->
                    <!--            <el-input/>-->
                    <!--          </el-card>-->
                    <!--          <el-table :data="tableData">-->
                    <!--            <el-table-column prop="date" label="日期" width="140">-->
                    <!--            </el-table-column>-->
                    <!--            <el-table-column prop="name" label="姓名" width="120">-->
                    <!--            </el-table-column>-->
                    <!--            <el-table-column prop="address" label="地址">-->
                    <!--            </el-table-column>-->
                    <!--          </el-table>-->
                </el-main>
                <el-footer>
                    <span>©2020 drawdream.all rights reserved.</span>
                </el-footer>
            </el-container>
        </el-container>

    </div>
</template>

<script>
    import logoImg from '@/assets/logo.png';
    import Menu from './menu';

    export default {
        name: 'Main',
        components: {
            // eslint-disable-next-line vue/no-unused-components
            Menu,
        },
        data() {
            return {
                isCollapse: false,
                fold: "el-icon-s-fold",
                imgSize: 80,
                logoImg: logoImg,
            };
        },
        methods: {
            clickCollapse() {
                this.isCollapse = !this.isCollapse
                if (this.isCollapse) {
                    this.fold = "el-icon-s-unfold"
                    this.imgSize = 50;
                } else {
                    this.fold = "el-icon-s-fold"
                    this.imgSize = 100;
                }

            },
            errorHandler() {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
    .main {
        height: inherit;
    }

    .el-container {
        height: inherit;
    }
</style>
