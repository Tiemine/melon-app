<template>
  <div>
        <!-- This component has two states, one for the placeholder and the other state for when
            the user have already choose a video or screenshare media -->
      <div 
      v-if="!screenshare && !video"
      class="media-card media-card--no-media" 
      @click="$emit('clicked')">
          <span class="media-card__cross" aria-hidden="true">+</span>
          <p class="media-card__title">Add media source</p>
          <p class="media-card__subtitle">Screenshare, Camera</p>
      </div>
      <div class="media-card media-card--screenshare-only" v-if="screenshare">
        <Button @clicked="showStream" v-if="!active">Show on stream</Button>
        <Button @clicked="removeStream" type="tertiary" v-if="active">Hide on stream</Button>
        <div class="card-text">My screen feed</div>
      </div>
      <div class="media-card media-card--video-only" v-if="video">
        <Button @clicked="showStream" v-if="!active">Show on stream</Button>
        <Button @clicked="removeStream" type="tertiary" v-if="active">Hide on stream</Button>
        <div class="card-text">My video feed</div>
      </div>
  </div>
</template>

<script>
import Button from './Button.vue';

import { useStreamStore } from '../store/streamData'

export default {
    name: "MediaCard",
    props: {
        screenshare: {
            type: Boolean,
            default: false
        },
        video: {
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return{
            streamData: useStreamStore()
        }
    },
    components: { Button },
    methods: {
        showStream: function() {
            this.video ? this.streamData.video = true : this.streamData.screenshare = true;
            this.$emit('isActive')
        },
        removeStream: function() {
            this.video ? this.streamData.video = false : this.streamData.screenshare = false;
            this.$emit('isActive')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.media-card{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: #F5F8FA;
    font-family: 'Roboto', sans-serif;
    padding: 16px 24px;
    margin: 15px 0;
    text-align: center;
    cursor: pointer;
    &[class*='-only']{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 120px;
        background-size: cover;
        background-position: center;
        border-radius: 8px;
        color: #fff;
        padding: 16px 16px 8px;
        -webkit-box-shadow: inset 0px -16px 14px -5px rgba(0,0,0,1);
        -moz-box-shadow: inset 0px -16px 14px -5px rgba(0,0,0,1);
        box-shadow: inset 0px -16px 14px -5px rgba(0,0,0,1);
        .card-text{
            text-align: left;
            margin-top: 10px;
        }
    };
    &__cross{
      font-size: 36px;
      line-height: 30px;
      margin-top: 20px;
      color: #128079;
      }
    &__title{
        color: #000;
        font-weight: 500;
        font-size: 18px;
        margin: 8px 0;
      }
    &__subtitle{
        color: #757575;
        font-size: 14px;
        font-weight: 400;
        margin: 8px 0;
      }
    &--screenshare-only{
        background-image: url('../assets/placeholders/screenshare-image.png');
      }
    &--video-only{
        background-image: url('../assets/placeholders/webcam-image.png');
      }  
    }
</style>
