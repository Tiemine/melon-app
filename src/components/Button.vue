<template>
  <div>
      <button
        :class="['button', `button--${type}`, `button--${width}`]"
        @click="$emit('clicked')"
      ><slot></slot></button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
        type: String,
        default: 'primary'
    },
    width: {
        type: String,
        default: 'fitContent'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button{
    border: 0;
    font-family: 'Roboto', sans-serif;
    padding: 12px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    &--primary{
        color: #fff;
        background: #128079;
    }
    &--secondary{
        color: #000;
        background :#F5F8FA;
    }
    &--tertiary{
        color: #F34848;
        background: #fff;
    }
    &--fitContent{
        width: fit-content;
    }
    &--fullWidth{
        width: 100%
    }
}
</style>
