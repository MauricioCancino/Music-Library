import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { 
    
    kpop: [
{ id:1,
artist: "SKZ",
category: "kpop",
album: "I am not",
image: "https://cdns-images.dzcdn.net/images/cover/4d12a90fe15d5e2e4cd0c591475e968b/500x500.jpg",
song: "https://www.youtube.com/watch?v=a4jiotDjHe4"},
{
id:2,
artist:"TXT",
category: "kpop",
album:"The Name Chapter: Temptation",
image: "https://cdns-images.dzcdn.net/images/cover/3926d4612e07fb23f04fd520a5ec30aa/500x500.jpg",
song:"https://www.youtube.com/watch?v=P9tKTxbgdkk"},
{
id:3,
artist:"Enhypen",
category: "kpop",
album:" DIMENSION : DILEMMA",
image: "https://cdns-images.dzcdn.net/images/cover/ee0942650f4caed07f761597b9757569/500x500.jpg",
song: "https://www.youtube.com/watch?v=6IRsW_TkyVA"},
{
id:4,
artist:"Seventeen",
category: "kpop",
album:"Boys be",
image: "https://cdns-images.dzcdn.net/images/cover/51bc49f6e1ecfa582070e5db3ca6e8fe/500x500.jpg",
song:"https://www.youtube.com/watch?v=9M7k9ZV67c0"},
{
id:5,
artist:"(G)I-DLE",
category: "kpop",
album:"I feel",
image: "https://cdns-images.dzcdn.net/images/cover/a8694bccf671d1d8f68f86ca812975e1/500x500.jpg",
song: "https://www.youtube.com/watch?v=7HDeem-JaSY"},
{
id:6,
artist:"Dreamcatcher",
category: "kpop",
album:"The End of Nightmare",
image: "https://cdns-images.dzcdn.net/images/cover/a873dc13c0b6cc8594c8068ce833e1b7/500x500.jpg",
song:"https://www.youtube.com/watch?v=Pq_mbTSR-a0"},{
id:7,
artist:"VIXX",
category: "kpop",
album:"Shangri-La",
image: "https://cdns-images.dzcdn.net/images/cover/f347a68ea15e2a297943f9d39366cb81/500x500.jpg",
song:"https://www.youtube.com/watch?v=CYEaI5y7QaM"},{
id:8,
artist:"LOONA",
category: "kpop",
album:"[12:00]",
image: "https://cdns-images.dzcdn.net/images/cover/375cdc40fda78efef235254469a3bd81/500x500.jpg",
song:"https://www.youtube.com/watch?v=b6li05zh3Kg"},
],
anime: [
{ id:9,
artist: "YOASOBI",
category: "anime",
album: "IDOL",
image: "https://cdns-images.dzcdn.net/images/cover/c028acc15f911c6ca3ff821abbb64aa3/500x500.jpg",
song:"https://www.youtube.com/watch?v=ZRtdQ81jPUQ"},
{ id:10,
artist: "SID",
category: "anime",
album: "ENAMEL",
image: "https://cdns-images.dzcdn.net/images/cover/fdbfd3cc4e2c7e841d791d031c609585/500x500.jpg",
song:"https://www.youtube.com/watch?v=4C2AC0iH8Kc"},
{ id:11,
artist: "Ikimono Gakari",
category: "anime",
album: "Blue Bird",
image: "https://cdns-images.dzcdn.net/images/cover/4e21e5785cc9099ee2b464dab6ed273c/500x500.jpg",
song:"https://www.youtube.com/watch?v=KpsJWFuVTdI"},
{ id:12,
artist: "the GazettE",
category: "anime",
album: "TOXIC",
image: "https://cdns-images.dzcdn.net/images/cover/61abfd7c77bd03f0dc08f8b46e145049/500x500.jpg",
song:"https://www.youtube.com/watch?v=gdHO7yobgUk"},
{ id:13,
artist: "Vickeblanka",
category: "anime",
album: "Black Catcher",
image: "https://i.scdn.co/image/ab67616d0000b273717c5c68f43a9fdca541281b",
song:"https://www.youtube.com/watch?v=hP6VM6YAMIE"},
{ id:14,
artist: "Kenshi Yonezu",
category: "anime",
album: "BOOTLEG",
image: "https://cdns-images.dzcdn.net/images/cover/72db2afbcd76bd009d83d71e94fe3e97/500x500.jpg",
song:"https://www.youtube.com/watch?v=9aJVr5tTTWk"},
{ id:15,
artist: "LiSA",
category: "anime",
album: "Gurenge",
image: "https://cdns-images.dzcdn.net/images/cover/762552e3ddc81d7e3a6d1cfe76d78cb2/500x500.jpg",
song:"https://www.youtube.com/watch?v=CwkzK-F0Y00"},
{ id:16,
artist: "Cö Shu Nie",
category: "anime",
album: "PURE",
image: "https://cdns-images.dzcdn.net/images/cover/43f9366c184d81b0fa1eaf86e39587b8/500x500.jpg",
song:"https://www.youtube.com/watch?v=ZB9UvUJL_lE"},
],
soloist: [
{ id:17 ,
artist: "Masaki Suda",
category: "soloist",
album: "Play",
image: "https://cdns-images.dzcdn.net/images/cover/bf1ab08b46be2cf171c69df2c4ff6d34/500x500.jpg",
song:"https://www.youtube.com/watch?v=XSkpuDseenY"},

{ id:18,
artist: "Kenshi Yonezu",
category: "soloist",
album: "Stray Shep",
image: "https://cdns-images.dzcdn.net/images/cover/193ef854b77c93245225cba6798ea39b/500x500.jpg",
song:"https://www.youtube.com/watch?v=SX_ViT4Ra7k"},

{ id:19,
artist: "Chung Ha",
category: "soloist",
album: "Killing me",
image: "https://cdns-images.dzcdn.net/images/cover/2108a153cef84099e6ee56837e34a4cb/500x500.jpg",
song:"https://www.youtube.com/watch?v=RHw1a0WESuA"},

{ id:20,
artist: "鹿晗 (Lu Han)",
category: "soloist",
album: "Reloaded",
image: "https://cdns-images.dzcdn.net/images/cover/9f6624d48f30f7296108be88335d3c38/500x500.jpg",
song:"https://www.youtube.com/watch?v=OF5WnhcZnFU"},

{ id:21,
artist: "Eve",
category: "Soloist",
album: "Smile",
image: "https://cdns-images.dzcdn.net/images/cover/8e29e68122d1b019e7be72c0a920744a/500x500.jpg",
song:"https://www.youtube.com/watch?v=ulfY8WQE_HE"},

{ id:22,
artist: "Jeon Somi",
category: "soloist",
album: "XOXO",
image: "https://cdns-images.dzcdn.net/images/cover/984c96d7b16ef66eb80c7ae2939f117d/500x500.jpg",
song:"https://www.youtube.com/watch?v=H8kqPkEXP_E"},

{ id:23,
artist: "Bol4",
category: "soloist",
album: "Red Diary Page.1",
image: "https://cdns-images.dzcdn.net/images/cover/cf9ad2166e98a188991503ad4fc3e33a/500x500.jpg",
song:"https://www.youtube.com/watch?v=hZmoMyFXDoI"},

{ id:24,
artist: "HyunA",
category: "soloist",
album: "A+",
image: "https://cdns-images.dzcdn.net/images/cover/babc200876ef3840ef1123ffc3848f85/500x500.jpg",
song:"https://www.youtube.com/watch?v=ib_1ATfr8wM"},

]
  },
  getters: {
  },
  mutations: {
    ADD_ALBUM(state,album){
      if (album.category=="kpop") {
        state.kpop.push(album)
      }
      if (album.category=="anime") {
        state.anime.push(album)
      }
      if (album.category=="soloist") {
        state.soloist.push(album)
      }
    }
  },
  actions: {
    add_album({commit},album) {
      commit('ADD_ALBUM',album)
    }
  },
  modules: {
  }
})
