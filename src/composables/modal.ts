export const isShowModalSearch = ref(false)
export const showModalSearch = () => {
  isShowModalSearch.value = !isShowModalSearch.value
}
