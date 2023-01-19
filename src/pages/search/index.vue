<!-- eslint-disable no-console -->
<script setup lang="ts">
const route = useRoute()
const searchStore = useSearchStore()
const { searchResult, isLoading } = storeToRefs(searchStore)
const isHidden = ref(false)
onMounted(async () => {
  if (route.query.keyword) {
    const keyword = await route.query.keyword?.toString()
    await searchStore.getSearchMusic(keyword, 10)
  }
})
const showAllData = async () => {
  if (route.query.keyword) {
    const keyword = await route.query.keyword?.toString()
    await searchStore.getSearchMusic(keyword, 0)
    isHidden.value = true
  }
}
</script>

<template>
  <section pb-10 min-h-screen :class="searchResult.length > 0 ? 'pt-30' : ''">
    <div v-if="searchResult && isLoading === false" container mx-auto h-stack>
      <div row justify-center text-center flex-col>
        <div col-12>
          <h1 v-if="route.query.keyword" text-gray-500 mb-5>
            Search result for: <span font-bold text-darkPurple tracking-wider f-18 capitalize>{{ route.query?.keyword }}</span>
          </h1>
        </div>
        <div v-if="searchResult.length > 0" col-12 mx-auto>
          <CardResult text-center w-full :result="searchResult" />
          <div>
            <button v-if="!isHidden" id="showAll" text-gray-400 bg-gray-300 rounded-full px-5 py-2 f-14 @click="showAllData">
              Show All Result
            </button>
          </div>
        </div>
        <div v-else col-12 mx-auto overflow-hidden>
          <h1 text-gray-400 font-bold f-30 tracking-wider>
            Data Not Found
          </h1>
        </div>
      </div>
    </div>
    <Loading v-else />
    <ModalSearch />
  </section>
</template>
