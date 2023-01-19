<template>
  <div class="loading-wrapper">
    <div class="loading">
      <div class="loader" />
      <div class="loader" />
      <div class="loader" />
      <div class="loader" />
      <div class="loader" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading-wrapper{
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .loading{
    left: 50%;
    align-items: center;
    position: absolute;
    display: flex;
    margin: 0 auto;
    transform: translateX(-50%);
    z-index: 99;
  }

  .loader {
    width: 10px;
    height: 40px;
    margin: 0px 5px;
    border-radius: 6px;
    background: linear-gradient(60deg, #712bda, #a45deb 100%);
    animation: musicAnimation 1.5s infinite;
  }

  .loader:nth-child(2) {
    animation-delay: 0.1s;
  }

  .loader:nth-child(3) {
    animation-delay: 0.2s;
  }

  .loader:nth-child(4) {
    animation-delay: 0.3s;
  }

  .loader:nth-child(5) {
    animation-delay: 0.4s;
  }

  @keyframes musicAnimation {
    0% {
      height: 0px;
    }
    50% {
      height: 40px;
    }
    100% {
      height: 0px;
    }
  }
}
</style>
