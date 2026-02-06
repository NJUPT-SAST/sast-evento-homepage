<template>
  <div>
    <div class="flex flex-wrap justify-center">
      <NuxtLink :to="releaseUrls.windows">
        <button>
          <img :src="windows" alt="Windows">
          <span>Windows</span>
        </button>
      </NuxtLink>
      <NuxtLink :to="releaseUrls.macos">
        <button>
          <img :src="macOS" alt="MacOS">
          <span>macOS</span>
        </button>
      </NuxtLink>
      <NuxtLink to='https://github.com/NJUPT-SAST/sast-evento/releases/latest'>
        <button>
          <img :src="linux" alt="Linux">
          <span>Linux</span>
        </button>
      </NuxtLink>
      <NuxtLink to="https://github.com/NJUPT-SAST/sast-evento-mobile/releases/download/1.0.0-beta/SAST-EVENTO.apk">
        <button>
          <img :src="android">
          <span>Android</span>
        </button>
      </NuxtLink>
      <NuxtLink to="/ios">
        <button>
          <img :src="ios" class="!h-9 !w-9">
          <span>iOS</span>
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="js" setup>
import { ref, onMounted } from 'vue';
import windows from "~/assets/icons/windows-11.svg";
import macOS from "~/assets/icons/mac-logo.svg";
import linux from "~/assets/icons/linux-96.png";
import android from "~/assets/icons/android-os.svg";
import ios from "~/assets/icons/ios-logo.svg";

const releaseUrls = ref({
  windows: 'https://github.com/NJUPT-SAST/sast-evento/releases/latest',
  macos: 'https://github.com/NJUPT-SAST/sast-evento/releases/latest'
});

const fetchReleases = async () => {
  const response = await fetch('https://api.github.com/repos/NJUPT-SAST/sast-evento/releases/latest');

  const latestRelease = await response.json();

  latestRelease.assets.forEach((asset) => {
    if (asset.name.includes('win')) {
      releaseUrls.value.windows = asset.browser_download_url;
    } else if (asset.name.includes('macos')) {
      releaseUrls.value.macos = asset.browser_download_url;
    }
  });
};

onMounted(async () => {
  await fetchReleases();
});
</script>

<style scoped>
button {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  width: 100px;
  height: 100px;
  padding: 10px;
  border: none;
  background-color: rgba(0, 153, 255, 0);
  cursor: pointer;
}

button img {
  width: 32px;
  height: 32px;
}

button:hover {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
</style>