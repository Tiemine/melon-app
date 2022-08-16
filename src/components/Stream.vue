<template>
  <div class="stream__wrapper">
      <div class="stream">
          <div class="screenshare" v-if="layoutType === 'screenshare'"></div>
            <!-- This component would receive different types of style so I binded the classes depending on the store value of what was selected -->
          <div 
          :class="['video', 
          {'video--fullscreen' : streamData.layoutSetting === 'webcam-fullscreen'},
          {'video--screen80' : streamData.layoutSetting === 'webcam-screen80'},
          {'video--screen60' : streamData.layoutSetting === 'webcam-screen60'}]"          
          class="video" v-if="layoutType === 'video'">
          </div>
          <div :class="['splitted', 
          {'splitted--fixed-right' : streamData.layoutSetting === 'webcam-screenshare-fixed-right'},
          {'splitted--fixed-left' : streamData.layoutSetting === 'webcam-screenshare-fixed-left'},
          {'splitted--fixed-side' : streamData.layoutSetting === 'webcam-screenshare-fixed-side'}]"
          v-if="layoutType === 'splitted'">
            <div class="screenshare"></div>
            <div class="video"></div>
          </div>
      </div>
  </div>
</template>

<script>
import { useStreamStore } from '../store/streamData'

export default {
  name: 'Stream',
  props: {
    layoutType: {
      type: String,
      default: ''
    }
  },
  data() {
    return{
      streamData: useStreamStore()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.stream{
    aspect-ratio: 16 / 9;
    margin: 0 8%;
    background: #000;
    display: grid;
    &__wrapper{
        width: 100%;
        max-width: 1500px;
    }
    .screenshare{
      background: url('../assets/placeholders/screenshare-image.png');
      background-size: cover;
      height: 100%;
      width: 100%;
    }
    .video{
      background: url('../assets/placeholders/webcam-image.png');
      background-size: cover;
      aspect-ratio: 16 / 9;
      align-self: center;
      &--screen60{
        width: 60%;
        margin: 0 20%;
      }
      &--screen80{
        width: 80%;
        margin: 0 10%;
      }
    }
    .splitted{
      display: flex;
      align-items: center;
      &--fixed-side{
        .screenshare{
          width: 66%;
          height: 80%;
          margin-right: 1%;
          background: url('../assets/placeholders/screenshare-image.png');
          background-size: cover;
          background-position: center;
        }
        .video{
          width: 33%;
          height: 80%;
          background: url('../assets/placeholders/webcam-image.png');
          background-size: cover;
          background-position: center;
        }
      }
      &--fixed-left{
        position: relative;
        .video{
          position: absolute;
          left: 2%;
          bottom: 2%;
          width: 20%;
        }
      }
      &--fixed-right{
        position: relative;
        .video{
          position: absolute;
          right: 2%;
          bottom: 2%;
          width: 20%;
        }
      }
    }
}
</style>
