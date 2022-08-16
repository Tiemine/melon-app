<template>
  <div>
      <div class="card" @click="$emit('clicked')">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: #F5F8FA;
    font-family: 'Roboto', sans-serif;
    padding: 16px 24px;
    margin: 15px 0;
    text-align: center;
    cursor: pointer;
    }
</style>
