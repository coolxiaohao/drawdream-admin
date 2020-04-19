<template>
    <div class="login-container">
        <!--粒子动画插件-->
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
        <!--登录表单-->
        <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm"
                 label-position="left">
            <h3 class="title">绘梦商城后台登录</h3>
            <!--用户名-->
            <el-form-item prop="username">
                <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on"
                          placeholder="username"/>
            </el-form-item>
            <!--密码-->
            <el-form-item prop="password">
                <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin"
                          v-model="loginForm.password"
                          autoComplete="on"
                          placeholder="password"/>
            </el-form-item>
            <!--验证码-->
            <el-form-item prop="varify" class="varify-div">
                <el-row type="flex">
                    <el-col :span="17">
                        <el-input class="varify-input" name="varify" type="text"
                                  v-model="loginForm.varify"
                                  autoComplete="on"
                                  placeholder="varify"/>
                    </el-col>
                    <el-col :span="7">
                        <el-image class="varifyImg" @click="generateValidateCode" :src="varifyImg"></el-image>
                    </el-col>
                </el-row>
            </el-form-item>
            <!--登录按钮-->
            <el-form-item>
                <el-button type="primary" style="width:100%;" @click.native.prevent="handleLogin">
                    登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    /*验证用户名的方法*/
    import {isvalidUsername} from '@/util'
    export default {
        name: 'login',
        data() {
            /*验证用户名*/
            const validateUsername = (rule, value, callback) => {
                if (!isvalidUsername(value)) {
                    callback(new Error('请输入正确的用户名'))
                } else {
                    callback()
                }
            }
            /*验证密码*/
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
                pwdType: 'password',
                varifyImg: '',
                varify: '',
            }
        },
        methods: {
            /*显示密码*/
            showPwd() {
                if (this.pwdType === 'password') {
                    this.pwdType = ''
                } else {
                    this.pwdType = 'password'
                }
            },
            /*登录的方法*/
            handleLogin() {
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        console.log(this.$store)
                        this.$store.dispatch('Login', this.loginForm).then(() => {
                            this.$router.push({path: '/'})
                        }).catch(() => {
                            // this.loading = false
                        })
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                })
            },
            /*获取验证码的方法*/
            generateValidateCode() {
                this.$store.dispatch('getValidateCode').then((res) => {
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
            /*调用登录前的方法*/
            this.generateValidateCode();
        }
    }
</script>

<style lang="scss" src="./index.scss" scoped>

</style>