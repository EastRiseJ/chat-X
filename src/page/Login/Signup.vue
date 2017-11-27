<template>
  <div id="signup">
    <group>
      <xInput title="用户名" type="text" v-model="signupForm.name" :max="2"  required></xInput>
      <xInput title="邮箱" type="email" v-model="signupForm.email" is-type="email" required></xInput>
       <xInput title="密码" type="password" v-model="signupForm.password" required></xInput>
       <x-button type="primary" @click.native="signup">注册</x-button>
    </group>
    <div class="tip">
      已有账号？ <router-link to="/login">登录</router-link>
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
    name: 'signup',
    data () {
      return {
        signupForm: {
          name: '',
          email: '',
          password: ''
        } // 登录参数
      }
    },
    methods: {
      signup () {
        commonServices.signup(this.signupForm)
          .then((data) => {
            console.log(data)
            this.$vux.alert.show({
              content: data.message
            })
          })
      }
    }
  }
</script>
<style>

</style>
