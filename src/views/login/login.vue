<template>
    <div class="login-container">
        <vue-particles
                style="width: 100%;height: 100%"
                color="#dedede"
                :particleOpacity="0.7"
                :particlesNumber="150"
                shapeType="circle"
                :particleSize="4"
                linesColor="#2980B9"
                :linesWidth="2"
                :lineLinked="true"
                :lineOpacity="0.3"
                :linesDistance="250"
                :moveSpeed="3"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
        >
            <!--            <div class="login-page"></div>-->
        </vue-particles>
        <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm"
                 label-position="left">
            <h3 class="title">绘梦商城后台登录</h3>
            <el-form-item prop="username">
                <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on"
                          placeholder="username"/>
            </el-form-item>
            <el-form-item prop="password">
                <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin"
                          v-model="loginForm.password"
                          autoComplete="on"
                          placeholder="password"/>
            </el-form-item>
            <el-form-item prop="varify" class="varify-div">
                <el-row type="flex">
                    <el-col :span="17" class="el-col-right">
                        <el-input class="varify-input" name="varify" type="text"
                                  v-model="loginForm.varify"
                                  autoComplete="on"
                                  placeholder="password"/>
                    </el-col>
                    <el-col :span="7" class="el-col-left">
                        <el-image class="varifyImg" :src="varifyImg"></el-image>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width:100%;" @click.native.prevent="handleLogin">
                    登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {isvalidUsername} from '@/util'

    export default {
        name: 'login',
        data() {
            const validateUsername = (rule, value, callback) => {
                if (!isvalidUsername(value)) {
                    callback(new Error('请输入正确的用户名'))
                } else {
                    callback()
                }
            }
            const validatePass = (rule, value, callback) => {
                if (value.length < 5) {
                    callback(new Error('密码不能小于5位'))
                } else {
                    callback()
                }
            }
            return {
                loginForm: {
                    username: 'admin',
                    password: 'admin'
                },
                loginRules: {
                    username: [{required: true, trigger: 'blur', validator: validateUsername}],
                    password: [{required: true, trigger: 'blur', validator: validatePass}]
                },
                // loading: false,
                pwdType: 'password',
                varifyImg: '',
                varify: '',
            }
        },
        methods: {
            showPwd() {
                if (this.pwdType === 'password') {
                    this.pwdType = ''
                } else {
                    this.pwdType = 'password'
                }
            },
            handleLogin() {
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        // this.loading = true
                        console.log(this.$store)
                        this.$store.dispatch('Login', this.loginForm).then(() => {
                            // this.loading = false
                            this.$router.push({path: '/'})
                        }).catch(() => {
                            this.loading = false
                        })
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                })
            },
            generateValidateCode() {
                // let that = this;
                this.$store.dispatch('getValidateCode').then((res) => {
                    // console.log(res.data.captchaImg)
                    let data = res.data;
                    this.varifyImg = data.captchaImg
                    this.varify = data.varify
                }).catch(() => {
                    // this.loading = false
                })
            }
        },
        //页面构造前
        mounted: function () {
            this.generateValidateCode();
        }
    }
</script>

<style lang="scss" scoped>
    $bg: #20222A;
    $dark_gray: #889aa4;
    $light_gray: #eee;
    /*.login-page{*/
    /*    position: fixed;*/
    /*    height: 100%;*/
    /*    width: 100%;*/
    .login-container {
        position: fixed;
        height: 100%;
        width: 100%;
        background-color: $bg;
        /*.login-card{*/
        /*    !*z-index: 10;*!*/
        /*    width: 60%;*/
        /*    height: 40%;*/
        /*    margin: 0 10%;*/
        /*    padding: 10% 10%;*/
        /*}*/
        .login-page {
            height: initial;
            width: initial;
        }

        .login-form {
            position: absolute;
            top: 15%;
            left: 20%;
            z-index: 10;
            width: 60%;
            height: 40%;
            /*margin: 0 10%;*/
            /*padding: 15% 10%;*/
            /*z-index: 99999;*/
            .el-input {
                max-width: 450px;
            }

            .el-button {
                max-width: 450px;
            }
            .el-row{
                .el-col-right{
                    text-align: right;
                    .varify-input {
                        margin-right: 10px;
                        /*text-align: right;*/
                        max-width: 350px;
                    }
                }
                .el-col-left{
                    text-align: left;
                    .varifyImg {
                        /*margin-left: 10px;*/
                        /*text-align: left;*/
                        height: 40px;
                        max-width: 80px;
                    }
                }


            }
            /*.el-col{*/


            /*}*/

        }

        .title {
            font-size: 26px;
            font-weight: 400;
            color: $light_gray;
            margin: 0px auto 40px auto;
            text-align: center;
            font-weight: bold;
        }
    }

    /*}*/
</style>