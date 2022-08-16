<template>
  <div id="app">
    <div class="wrapper">
      <aside class="left-content">
        <Button width="fullWidth" type="primary" @clicked="addNewCard">Add Source</Button>
        <MediaCard 
        v-for="(card, index) in cardList" 
        :key="index" 
        @clicked="chooseMedia(index)"
        @isActive="setActive(index)"
        :screenshare="card.type === 'screenshare'"
        :video="card.type === 'video'"
        :active="card.active"
        />
      </aside>
      <section class="right-content">
        <Stream :layoutType="streamData.getLayoutType"/>
        <WebcamLayout :layoutType="streamData.getLayoutType"/>
        <nav>
          <ButtonBar/>
        </nav>
      </section>
    </div>
    <Modal v-if="openModal" @clicked="openModal = false">
      <h3 class="modal__title">Add a new media source</h3>
      <div class="modal__cards">
        <Card @clicked="addScreenshare">
          <p class="card__title">Screenshare</p>
          <p class="card__subtitle">Share your entire screen, window or a specific Chrome tab</p>
        </Card>
        <Card @clicked="addVideo">
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
import MediaCard from './components/MediaCard.vue'

import { useStreamStore } from './store/streamData'


export default {
  name: 'App',
  components: {
    Button,
    ButtonBar,
    Card,
    Stream,
    Modal,
    WebcamLayout,
    MediaCard
},
	data() {
		return {
      openModal : false,
      cardList: [],
      streamData: useStreamStore()
    }
  },
  methods: {
    addNewCard: function(){
      this.cardList.push({type: '', active: false})
    },
    addScreenshare: function(){
      this.cardList[this.streamData.currentCardIndex].type = 'screenshare';
      this.openModal = false;
    },
    addVideo: function(){
      this.cardList[this.streamData.currentCardIndex].type = 'video';
      this.openModal = false;
    },
    chooseMedia: function(idx){
      this.openModal = true;
      this.streamData.currentCardIndex = idx;
    },
    setActive: function(index) {
      let mediaType = this.cardList[index].type

      let sameKind = this.cardList.filter((el) => el.type === mediaType)
      sameKind.forEach((el) => {
        el.active = false
      })

      this.cardList[index].active = !this.cardList[index].active
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
    overflow: hidden;
    .left-content{
      width: 15vw;
      box-sizing: border-box;
      border-right: 3px solid #E5EAED;
      padding: 12px;
      overflow-y: scroll;
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
