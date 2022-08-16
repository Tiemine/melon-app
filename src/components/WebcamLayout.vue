<template>
  <div class="webcam-layout">
      <div v-if="layoutType === 'video'" class="webcam-layout--webcam-only" >
        <button
          v-for="(item, idx) in ['fullscreen', 'screen80', 'screen60']"
          :key="item"
          :class="`webcam-only__${item} ${idx === active ? `webcam-only__${item}--active` : ''}`"
          @click="setLayout(`webcam-${item}`, idx)"
        ></button>
      </div>
      <div v-if="layoutType === 'splitted'" class="webcam-layout--webcam-screenshare">

        <button
          v-for="(item, idx) in ['fixed-left', 'fixed-right', 'fixed-side']"
          :key="item"
          :class="`webcam-screenshare__${item} ${idx === active ? `webcam-screenshare__${item}--active` : ''}`"
          @click="setLayout(`webcam-screenshare-${item}`, idx)"
        ></button>

      </div>
      <div v-if="layoutType === 'screenshare'" class="webcam-layout--webcam-screenshare">
        <button class="screenshare-only--active"></button>
      </div>
  </div>
</template>

<script>
import { useStreamStore } from '../store/streamData'

export default {
  name: 'WebcamLayout',
  props: {
    layoutType: {
      type: String,
      default: 'webcam-fullscreen'
    }
  },
  data(){
    return {
      active: 0,
      streamData: useStreamStore()
    }
  },
  methods: {
    setLayout: function(model, idx) {
      this.active = idx;
      this.streamData.layoutSetting = model;
    }
  },
  beforeUpdate(){
    if(this.streamData.layoutSetting === "" && this.layoutType === "video"){
      this.active = 0;
      this.streamData.layoutSetting = "webcam-fullscreen"
    }
    if(this.streamData.layoutSetting.includes('webcam-screenshare') && this.layoutType === "video"){
      this.active = 0;
      this.streamData.layoutSetting = "webcam-fullscreen"
    }
    if(!this.streamData.layoutSetting.includes('webcam-screenshare') && this.layoutType === "splitted"){
      this.active = 0;
      this.streamData.layoutSetting = "webcam-screenshare-fixed-left"
    }
  }
}
</script>
<style scoped lang="scss">
  .webcam-layout{
    margin: 20px;
    button{
      width: 100px;
      height: 70px;
      background: #fff;
      border: 0;
      background-size: contain;
      margin: 0 16px;
      border-radius: 8px;
      cursor: pointer;
      &[class*='--active']{
        border: 3px solid #128079;
        };
    }
    .webcam-only{
      &__fullscreen{
        background-image: url('../assets/webcam/default/webcam-only_full-screen.svg');
        &--active{
          background-image: url('../assets/webcam/selected/webcam-only_full-screen_selected.svg');
        }
      }
      &__screen80{
        background-image: url('../assets/webcam/default/webcam-only_80-percent.svg');
        &--active{
          background-image: url('../assets/webcam/selected/webcam-only_80-percent_selected.svg');
        }
      }
      &__screen60{
        background-image: url('../assets/webcam/default/webcam-only_60-percent.svg');
        &--active{
          background-image: url('../assets/webcam/selected/webcam-only_60-percent_selected.svg');
        }
      }
    }
    .webcam-screenshare{
      &__fixed-left{
        background-image: url('../assets/webcam_screenshare/default/webcam-screenshare_webcam-25-percent-left-align.svg');
        &--active{
          background-image: url('../assets/webcam_screenshare/selected/webcam-screenshare_webcam-25-percent-left-align_selected.svg');
        }
      }
      &__fixed-right{
        background-image: url('../assets/webcam_screenshare/default/webcam-screenshare_webcam-25-percent-right-align.svg');
        &--active{
          background-image: url('../assets/webcam_screenshare/selected/webcam-screenshare_webcam-25-percent-right-align_selected.svg');
        }
      }
      &__fixed-side{
        background-image: url('../assets/webcam_screenshare/default/webcam-33-percent_screenshare-66-percent.svg');
        &--active{
          background-image: url('../assets/webcam_screenshare/selected/webcam-33-percent_screenshare-66-percent_selected.svg');
        }
      }
    }
    .screenshare-only--active{
      background-image: url('../assets/screenshare/screenshare-image-only.svg');
    }
  }
</style>
