<template>
    <div>
        <el-form ref="loginForm" :model="loginForm" class="login-box">
            <h3 class="login-title">欢迎登录</h3>
            <el-form-item prop="userName">
                <el-input type="text" prefix-icon="Avatar" size="medium" placeholder="请输入用户名" v-model="loginForm.userName" clearable />
            </el-form-item>
            <el-form-item prop="passwd">
                <el-input type="password" prefix-icon="Comment" size="medium" placeholder="请输入密码" @keyup.enter="onSubmit" show-password v-model="loginForm.passwd" clearable />
            </el-form-item>
            <el-form-item>
                <el-space wrap :size="60">
                    <el-button type="primary" size="medium" v-on:click="onSubmit()">登录</el-button>
                    <el-button type="warning" size="medium" v-on:click="onReset()">重置</el-button>
                </el-space>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { ElMessage } from 'element-plus'
export default {
    name: 'login',
    data () {
        return {
            loginImg: 'url(' + require('@/assets/login.jpg') + ')',
            loginForm: {
                userName: 'admin',
                passwd: '123456'
            }
        }
    },
    methods: {
        // 登录提交
        onSubmit () {
            console.log(this.loginForm.userName + '--' + this.loginForm.passwd)
            this.$store.commit('setUserName', this.loginForm.userName)
            ElMessage({
                showClose: true,
                message: '恭喜你，登录成功',
                type: 'success'
            })
            this.$router.push('/')
        },
        // 重置输入
        onReset () {
        this.loginForm.userName = ''
        this.loginForm.passwd = ''
        }
    },
    mounted () {
        document.body.style.backgroundSize = '100%'
        document.body.style.backgroundImage = this.loginImg
    },
    beforeUnmount () {
        document.body.style.backgroundImage = ''
    }
}
</script>

<style lang="less" scoped>
  .login-box {
    border: 1px solid #DCDFE6;
    width: 320px;
    padding: 35px 35px 15px 35px;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    box-shadow: 0px 0 25px black;
    background-color: #fff;
    position: absolute;
    right: 20%;
    top: 36%;
  }
  .login-title {
    text-align: center;
    font-size: 30px;
    margin: 0 auto 30px auto;
    color: #142879;
  }
  /deep/ .el-form-item__label {
    font-size: 18px;
    color: black;
  }
</style>