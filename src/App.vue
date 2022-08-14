<template>
  <div id="app">
    <div class="wrapper">
      <aside class="left-content">
        <Button width="fullWidth" type="primary">Add Source</Button>
        <Card crossIcon="true">
          <p class="add-media-title">Add media source</p>
          <p class="add-media-subtitle">Screenshare, Camera</p>
        </Card>
      </aside>
      <section class="right-content">
        <Stream/>
        <nav>
          <ButtonBar/>
        </nav>
      </section>
    </div>
    <Modal></Modal>
  </div>
</template>

<script>
import Button from './components/Button.vue'
import ButtonBar from './components/ButtonBar.vue'
import Card from './components/Card.vue'
import Stream from './components/Stream.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Button,
    ButtonBar,
    Card,
    Stream,
    Modal
}
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700&display=swap');

body{
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .wrapper{
    display: flex;
    height: 100vh;
    .left-content{
      width: 15vw;
      box-sizing: border-box;
      border-right: 3px solid #E5EAED;
      padding: 12px;
      .add-media-title{
        color: #000;
        font-size: 18px;
        margin: 8px 0;
      }
      .add-media-subtitle{
        color: #757575;
        font-size: 14px;
        font-weight: 500;
        margin: 8px 0;
      }
    }
    .right-content{
      width: 85vw;
      box-sizing: border-box;
      display: flex;
      align-items: center;
    }
  }
}
</style>
