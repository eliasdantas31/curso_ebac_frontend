<script setup>
  import { reactive } from 'vue';
  import Calculator from './componentes/calculator_body.vue';

</script>

<template>
    <div class="container">
      <Calculator></Calculator>
    </div>
</template>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    
  }

  .container{
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center
  }
</style>