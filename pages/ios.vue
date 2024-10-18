<template>
  <div class="h-full flex flex-col items-center justify-between pt-16 pb-4">
    <div class="text-xl font-medium mb-2 lg:text-3xl lg:mb-2">Evento on iOS</div>
    <div class="flex flex-row overflow-x snap-mandatory snap-x overflow-x-scroll swipe-container ">
      <div class="swipe-slide non-drag">
        <NuxtImg src="/img/1_open_website.jpeg" alt="使用 Safari 打开网页" class="mt-4 rounded-3xl h-[80%]" />
        <div class="mt-4 text-center">使用 Safari 打开网页</div>
      </div>
      <div class="swipe-slide non-drag">
        <NuxtImg src="/img/2_add_to_home_screen.jpeg" alt="添加到主屏幕" class="mt-4 rounded-3xl h-[80%]" />
        <div class="mt-4 text-center">点击分享按钮并添加到主屏幕</div>
      </div>
      <div class="swipe-slide non-drag">
        <NuxtImg src="/img/3_find_and_open.jpeg" alt="找到图标并打开" class="mt-4 rounded-3xl h-[80%]" />
        <div class="mt-4 text-center">找到图标并打开</div>
      </div>
      <div class="swipe-slide non-drag">
        <NuxtImg src="/img/4_enjoy_it.jpeg" alt="尽情享用" class="mt-4 rounded-3xl h-[80%]" />
        <div class="mt-4 text-center">尽情享用</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.swipe-container {
  -webkit-overflow-scrolling: touch;
}

.swipe-slide {
  flex: 0 0 100%;
  scroll-snap-align: center;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.non-drag {
  user-select: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
</style>
