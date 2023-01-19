<!-- eslint-disable no-console -->
<script setup lang="ts">
import type { Result } from '~/types'
const props = defineProps({
  result: {
    type: Array<Result>,
  },
})
const audio = ref()
const listMusic = ref<Result[]>([])
const pauseSong = (index: number) => {
  if (listMusic.value[index].isPlaying) {
    listMusic.value[index].isPlaying = false
    audio.value.pause()
    audio.value = null
  }
}

const playSong = (song: string, index: number) => {
  const findIndex = useArrayFindIndex(listMusic.value, a => a.isPlaying === true)
  if (findIndex.value < 0) {
    listMusic.value[index].isPlaying = true
    audio.value = new Audio(song)
    audio.value.play()
    console.log('list', listMusic.value[index].isPlaying)
  }
  else {
    listMusic.value[findIndex.value].isPlaying = false
    audio.value.pause()
    audio.value = null
    listMusic.value[index].isPlaying = true
    audio.value = new Audio(song)
    audio.value.play()
  }
}

onMounted(() => {
  if (props.result)
    listMusic.value = props.result
})
</script>

<template>
  <div v-if="listMusic">
    <div v-for="(item, idx) in listMusic" :key="idx" class="card bg-white" dark="bg-dark-200">
      <div class="cover">
        <img class="cover-album" :src="item.artworkUrl100">
        <div class="audio-wrapper">
          <img
            v-if="!listMusic[idx].isPlaying"
            src="@/assets/images/icons/play-button.svg"
            class="play-btn"
            @click="playSong(item.previewUrl, idx)"
          >
          <img
            v-if="listMusic[idx].isPlaying"
            src="@/assets/images/icons/pause-button.svg"
            class="icon-pause"
            @click="pauseSong(idx)"
          >
        </div>
      </div>
      <div class="content">
        <div class="text-left">
          <div class="artist">
            {{ item.artistName }}
          </div>
          <div class="song-title">
            {{ item.trackName }}
          </div>
        </div>
        <div flex justify-between w-full>
          <div class="genre">
            {{ item.primaryGenreName }}
          </div>
          <div class="price">
            <img src="@/assets/images/icons/currency-dollar.svg" alt="icon-money">
            <div ml-1>
              {{ item.trackPrice }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card{
    position: relative;
    padding: 12px 15px;
    width: 100%;
    display: flex;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
    border-radius: 10px;
    margin-bottom: 20px;
    max-width: 360px;
    margin: 25px auto;
    .cover{
      position: relative;
      .cover-album{
        border-radius: 10px;
        height: 100px;
        width: 100px;
        object-fit: cover;
      }
      .audio-wrapper{
        position: absolute;
        top:35%;
        left: 30%;
        z-index: 2;
        &:hover{
          cursor: pointer;
        }
        .icon-pause,.icon-play{
          width: 32px;
          height: 32px;
          object-fit: contain;
        }
      }
    }
    .content{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      padding-left: 20px;
      width: 100%;
      color: #64748b;
      letter-spacing: 0.36px;
      .artist{
        font-size: 10px;
        font-weight: 500;
      }
      .song-title{
        font-size: 14px;
        font-weight: bold;
      }
      .genre{
        color: #fff;
        background: #10b981;
        padding: 3px 15px;
        border-radius: 10px;
        font-size: 10px;
      }
      .price{
        display: flex;
        align-items: center;
        font-size: 12px;
        font-weight: bold;
        color: #f5b014;
      }
    }
}
</style>
