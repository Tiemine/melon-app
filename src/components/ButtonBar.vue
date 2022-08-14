<template>
  <div>
      <div class="button-bar">
        <div><Button width="fullWidth" type="secondary">Chat</Button></div>
        <div><Button width="fullWidth" type="secondary">Record</Button></div>
        <div><Button width="fullWidth" type="primary">Go Live</Button></div>
      </div>
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'ButtonBar',
  components: {
    Button
  }
}
</script>
<style scoped lang="scss">
.button-bar{
    width: 540px;
    display: inline-grid;
    border: 2px solid #E5EAED;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
    padding: 8px;
    position: fixed;
    bottom: 0;
    left: calc(50% - 270px);
    }
</style>
