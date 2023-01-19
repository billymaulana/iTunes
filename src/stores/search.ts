/* eslint-disable no-console */
import { acceptHMRUpdate, defineStore } from 'pinia'
import type { IResultCount, ItunesTypes, Result } from '~/types'

export const useSearchStore = defineStore('search', () => {
  const isLoading = ref(false)
  const searchResult = ref<Result[]>([])
  const totalResult = ref<IResultCount | number>()

  const getSearchMusic = async (search: string, limit: number) => {
    if (search) {
      try {
        isLoading.value = true
        const response = await useMyFetch<ItunesTypes>(`/search?term=${search}&media=music&country=ID&limit=${limit > 0 ? limit : '-'}`, {
          method: 'GET',
          parseResponse: JSON.parse,
        })
        totalResult.value = response.resultCount
        searchResult.value = response.results || []
        searchResult.value.map(obj => ({ ...obj, isPlaying: 'false' }))
      }
      catch (error) {
        console.log(error)
      }
      finally {
        setTimeout(() => {
          isLoading.value = false
        }, 500)
      }
    }
  }

  return { isLoading, searchResult, totalResult, getSearchMusic }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useSearchStore, import.meta.hot))
