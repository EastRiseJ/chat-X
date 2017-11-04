<template>
  <div id="login">
    <group>
       <xInput title="邮箱" type="text" v-model="email" is-type="email" required></xInput>
       <xInput title="密码" type="password" v-model="password" required></xInput>
       <x-button type="primary" @click.native="login()">登录</x-button>
    </group>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
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
        email: '',
        password: ''
      }
    },
    methods: {
      ...mapActions({
        login: 'login'
      })
    }
  }
</script>
<style>

</style>
