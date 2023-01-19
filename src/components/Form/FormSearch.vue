<!-- eslint-disable no-console -->
<script setup>
const router = useRouter()
const route = useRoute()
const searchKeyword = ref('')
const searchStore = useSearchStore()
const { isLoading } = storeToRefs(searchStore)
const disableSubmit = computed(() => {
  if (searchKeyword.value === '' || searchKeyword.value.trim().length === 0)
    return false
  else
    return true
})
const submitSearch = async () => {
  console.log('search', searchKeyword.value)
  if (!disableSubmit.value)
    return
  router.push(`/search?keyword=${searchKeyword.value}`.toString())
  if (route.path !== '/' && route.query.keyword) {
    showModalSearch()
    const keyword = await route.query.keyword?.toString()
    await searchStore.getSearchMusic(keyword, 10)
    window.location.reload()
  }
}
</script>

<template>
  <form w-full pb-10 flex flex-col max-w-400 @submit.prevent="submitSearch">
    <input
      v-model="searchKeyword"
      type="text"
      placeholder="Search Artist / Album / Title"
      mb-6 form-control capitalize required
      @keyup.enter="submitSearch"
    >
    <button
      v-if="route.path === '/'"
      type="submit"
      :disabled="!disableSubmit"
      :class="!disableSubmit ? 'bg-purple-400' : 'glow-on-hover'"
      btn-primary
    >
      <Spinner v-if="isLoading" />
      <span v-else>Search</span>
    </button>
    <button
      v-else
      type="submit"
      :disabled="!disableSubmit"
      :class="!disableSubmit ? 'bg-gradient-100 text-white' : 'bg-gradient-100 text-white'"
      btn-primary
    >
      <Spinner v-if="isLoading" />
      <span v-else>Search</span>
    </button>
  </form>
</template>

<style lang="scss">
.glow-on-hover {
  outline: none;
  color: #fff;
  cursor: pointer;
  position: relative;
  z-index: 0;
  &:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 20px;
  }
  &:active {
    &:after {
      background: transparent;
    }
  }
  &:hover{
    transition: fade all 1s;
    &:before {
      opacity: 1;
    }
    &::after{
      background-color: transparent;
    }
  }
  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    background-color: #c084fc;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 20px;
  }
}

@keyframes glowing {
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
}
</style>
