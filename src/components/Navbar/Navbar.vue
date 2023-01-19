<script setup>
const router = useRouter()
const previous = () => {
  router.back()
}
const toogleModal = () => {
  showModalSearch()
}
</script>

<template>
  <header>
    <nav class="navbar bg-gradient-100 dark:bg-gradient-dark-100 dark:shadow-none">
      <div>
        <i i-ph:list-bold f-16 block />
      </div>
      <div font-logo f-20>
        <a href="/">
          ngmusic
        </a>
      </div>
      <div>
        <a cursor-pointer @click="toogleModal">
          <i i-ph:magnifying-glass-bold f-16 block />
        </a>
      </div>
    </nav>
  </header>
</template>

<style lang="css" scoped>
.navbar{
  color: white;
  text-align: center;
  display: flex;
  flex-flow: row;
  justify-content:space-between;
  padding: 0 40px;
  align-items: center;
  height: 5rem;
  width: 100%;
  border-radius: 0 0 30% 30%;
  box-shadow: 0 0 6px 0 rgb(148 77 230 / 75%);
  position: fixed;
  top: 0;
  z-index: 10;
}
</style>
