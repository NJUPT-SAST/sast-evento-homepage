<template>
  <div class="h-screen">
    <div class="fixed inset-0 z-[-10] overflow-hidden bg-gray-300 opacity-40">
      <div
        class="absolute w-[681px] h-full bg-blue-gradient top-[70%] left-[10%] transform -translate-x-1/2 -translate-y-1/2">
      </div>
      <div
        class="absolute w-[885px] h-full bg-green-gradient top-[20%] left-[10%] transform -translate-x-1/2 -translate-y-1/2">
      </div>
      <div
        class="absolute w-[681px] h-full bg-orange-gradient top-[20%] left-[90%] transform -translate-x-1/2 -translate-y-1/2">
      </div>
      <div
        class="absolute w-[885px] h-full bg-yellow-gradient top-[80%] left-[90%] transform -translate-x-1/2 -translate-y-1/2">
      </div>
    </div>
    <AppHeader class="header fixed top-0">
      <NuxtLink to="/"><img src="/img/logo.png" alt="evento-logo" class="h-7" /></NuxtLink>
      <div class="flex gap-7 justify-end items-center">
        <NuxtLink
          to="https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=f30lfece-0fc4-4b11-9d54-c90f27042e15">
          Support
        </NuxtLink>
        <NuxtLink to="https://github.com/search?q=org%3ANJUPT-SAST+evento&type=repositories">
          <img src="~/assets/icons/github-mark.svg" alt="Logo" class="h-7" />
        </NuxtLink>
      </div>
    </AppHeader>
    <slot />
    <AppFooter>
      <div class="text-center text-slate-500 mt-1 text-xs">
        <div id="copyright">
          Copyright © NJUPT.SAST 1992-2024
          <a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备2021038236号</a>
          <span> | Icons by</span>
          <a target="_blank" href="https://icons8.com"> Icons8</a>
        </div>
      </div>
    </AppFooter>
  </div>
</template>

<style lang="scss">
.vsc-initialized {
  margin: 0;
  padding: 0;
  font-family: monospace;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 15px 20px;
  background-color: rgba($color: #dddddd, $alpha: 0.4);
  backdrop-filter: blur(10px);
}
</style>
