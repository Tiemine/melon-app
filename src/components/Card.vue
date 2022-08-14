<template>
  <div>
      <div class="card" @click="$emit('clicked')">
          <span v-if="crossIcon" class="card__cross" aria-hidden="true">+</span>
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    crossIcon: {
        type: Boolean,
        default: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card{
    width: 100%;
    box-sizing: border-box;
    background: #F5F8FA;
    font-family: 'Roboto', sans-serif;
    padding: 12px;
    margin: 15px 0;
    text-align: center;
    cursor: pointer;
    &__cross{
      font-size: 36px;
      line-height: 30px;
      margin-top: 20px;
      color: #128079;
      }
    }
</style>
