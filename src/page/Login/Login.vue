<template>
  <div id="login">
    <group>
      <!-- <xInput title="邮箱" type="text" v-model="email" is-type="email" required></xInput> -->
       <xInput title="邮箱" type="text" v-model="loginForm.email" required></xInput>
       <xInput title="密码" type="password" v-model="loginForm.password" required></xInput>
       <x-button type="primary" @click.native="login">登录</x-button>
    </group>
  </div>
</template>
<script>
  import * as commonServices from '@/resourse/services/commonServices'
  import { Group, XInput, XButton } from 'vux'

  export default {
    components: {
      Group,
      XInput,
      XButton
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
          .then((data) => {})
      }
    }
  }
</script>
<style>

</style>
