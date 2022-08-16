<template>
  <div class="webcam-layout">
      <div v-if="layoutType === 'video'" class="webcam-layout--webcam-only" >
        <button 
        :class="['webcam-only__fullscreen', {'webcam-only__fullscreen--active' : active === 'webcam-fullscreen'}]"
        @click="setLayout('webcam-fullscreen')"
        ></button>
        <button 
        :class="['webcam-only__screen80', {'webcam-only__screen80--active' : active === 'webcam-screen80'}]"
        @click="setLayout('webcam-screen80')"
        ></button>
        <button 
        :class="['webcam-only__screen60', {'webcam-only__screen60--active' : active === 'webcam-screen60'}]"
        @click="setLayout('webcam-screen60')"
        ></button>
      </div>
      <div v-if="layoutType === 'splitted'" class="webcam-layout--webcam-screenshare">
        <button 
        :class="['webcam-screenshare__fixed-left', {'webcam-screenshare__fixed-left--active' : active === 'webcam-screenshare-fixed-left'}]"
        @click="setLayout('webcam-screenshare-fixed-left')"
        ></button>
        <button :class="['webcam-screenshare__fixed-right', {'webcam-screenshare__fixed-right--active' : active === 'webcam-screenshare-fixed-right'}]"
        @click="setLayout('webcam-screenshare-fixed-right')"
        >
        </button>
        <button :class="['webcam-screenshare__fixed-side', {'webcam-screenshare__fixed-side--active' : active === 'webcam-screenshare-fixed-side'}]"
        @click="setLayout('webcam-screenshare-fixed-side')"
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
      active: '',
      streamData: useStreamStore()
    }
  },
  methods: {
    setLayout: function(model) {
      this.active = model;
      this.streamData.layoutSetting = this.active;
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
