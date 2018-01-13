<template>
  <div id="login">
    <div class="container">
      <group>
         <xInput title="邮箱" type="text" v-model="loginForm.email" is-type="email" required></xInput>
         <xInput title="密码" type="password" v-model="loginForm.password" required></xInput>
         <x-button type="primary" @click.native="login">登录</x-button>
      </group>
      <div class="tip">
        没有账号？ <router-link to="/signup">注册</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import * as commonServices from '@/resourse/services/commonServices'
  import { Group, XInput, XButton, Alert } from 'vux'

  export default {
    components: {
      Group,
      XInput,
      XButton,
      Alert
    },
    name: 'login',
    data () {
      return {
        loginForm: {
          email: '',
          password: ''
        } // 登录参数
      }
    },
    methods: {
      login () {
        commonServices.login(this.loginForm)
          .then((data) => {
            console.log(data)
            let _this = this
            let [id, token, name, email, directories] = [data.data.id, data.data.token, data.data.name, data.data.email, data.data.list]
            window.localStorage.setItem('chatXID', id)
            window.localStorage.setItem('chatXToken', token)
            window.localStorage.setItem('chatXName', name)
            window.localStorage.setItem('chatXEmail', email)
            window.localStorage.setItem('chatXDirectories', JSON.stringify(directories))
            this.$store.commit('successLogin', {
              id: id,
              token: token,
              name: name,
              email: email
            })
            this.$store.commit('getDirectoriesList', directories)
            this.$socket.emit('login', id)
            this.$vux.alert.show({
              content: data.message,
              onHide () {
                _this.$router.push({ path: '/home' })
              }
            })
          })
      }
    }
  }
</script>
<style>

</style>
