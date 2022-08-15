<template>
  <div class="modal">
    <div class="modal__wrapper" @click="$emit('clicked')"></div>
    <div class="modal__content">
        <slot>
        </slot>
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
.modal{
    position: absolute;
    top: 0;
    text-align: center;
    &__wrapper{
        background: #fff;
        opacity: 0.7;
        width: 100vw;
        height: 100vh;
        z-index: 1;
    }  
    &__content{
        width: 600px;
        position: fixed;
        background: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 40px;
        border-radius: 8px;
      }
    }
</style>
