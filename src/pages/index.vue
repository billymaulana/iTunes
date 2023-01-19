<template>
  <section bg-gradient-153 dark="bg-gradient-dark-153" text-white w-screen>
    <div container-fluid h-stack>
      <div row justify-center w-full>
        <div col-12 w-full>
          <div min-h-screen h-stack flex-col w-full px-20>
            <Logo />
            <FormSearch />
          </div>
        </div>
      </div>
    </div>
    <button flex items-center mr-4 absolute bottom-5 right-0 @click="toggleDark()">
      <i i-ph:sun block f-20 text-white />
    </button>
  </section>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
