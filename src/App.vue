<template>
  <div id="app">
    <div class="wrapper">
      <aside class="left-content">
        <Button width="fullWidth" type="primary">Add Source</Button>
        <Card :crossIcon="true" @clicked="openModal = true">
          <p class="card-title">Add media source</p>
          <p class="card-subtitle">Screenshare, Camera</p>
        </Card>
      </aside>
      <section class="right-content">
        <Stream/>
        <WebcamLayout/>
        <nav>
          <ButtonBar/>
        </nav>
      </section>
    </div>
    <Modal v-if="openModal" @clicked="openModal = false">
      <h3 class="modal__title">Add a new media source</h3>
      <div class="modal__cards">
        <Card>
          <p class="card__title">Screenshare</p>
          <p class="card__subtitle">Share your entire screen, window or a specific Chrome tab</p>
        </Card>
        <Card>
          <p class="card__title">Video Feed</p>
          <p class="card__subtitle">Share a feed of your in-built webcam and microphone. If you do not have a webcam, you can use a “virtual” webcam such as Streamlabs Desktop virtual camera</p>
        </Card>
      </div>
    </Modal>
  </div>
</template>

<script>
import Button from './components/Button.vue'
import ButtonBar from './components/ButtonBar.vue'
import Card from './components/Card.vue'
import Stream from './components/Stream.vue'
import Modal from './components/Modal.vue'
import WebcamLayout from './components/WebcamLayout.vue'

export default {
  name: 'App',
  components: {
    Button,
    ButtonBar,
    Card,
    Stream,
    Modal,
    WebcamLayout
},
	data() {
		return {
      openModal : false
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

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
      .card-title{
        color: #000;
        font-weight: 500;
        font-size: 18px;
        margin: 8px 0;
      }
      .card-subtitle{
        color: #757575;
        font-size: 14px;
        font-weight: 400;
        margin: 8px 0;
      }
    }
    .right-content{
      width: 85vw;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  .modal{
    &__cards{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 45px;
    }
    &__title{
      font-size: 24px;
    }
    .card{
      &__title{
        color: #000;
        font-weight: 500;
        font-size: 20px;
        margin: 18px 0;
      }
      &__subtitle{
        color: #757575;
        font-size: 16px;
        font-weight: 400;
        margin: 8px 0;
      }
    }
  }
}
</style>
