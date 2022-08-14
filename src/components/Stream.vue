<template>
  <div class="stream__wrapper">
      <div class="stream">
          
      </div>
  </div>
</template>

<script>
export default {
  name: 'Stream',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.stream{
    aspect-ratio: 16 / 9;
    margin: 0 8%;
    background: #000;
    &__wrapper{
        width: 100%;
    }
}
</style>
