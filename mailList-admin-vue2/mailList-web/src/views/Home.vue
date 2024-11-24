<template>
  <div class="home">
    <img alt="EMS logo" src="../assets/image/taskHomeLog.png">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      msg: 'welcome to 通讯录管理系统'
    }
  }
}
</script>
<style scoped>
  .home{
    text-align: center;
  }
</style>