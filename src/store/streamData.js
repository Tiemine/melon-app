import { defineStore } from 'pinia'

export const useStreamStore = defineStore({
    id: 'streamData',
    state: () => ({
        video: false,
        screenshare: false,
        layoutSetting: '',
        currentCardIndex: null
    }),
    getters: {
        getLayoutType: (state) => {
           if (state.video === false && state.screenshare === true) return 'screenshare'
           if (state.video === true && state.screenshare === true) return 'splitted'
           if (state.video === true && state.screenshare === false) return 'video'
        }
    }
})