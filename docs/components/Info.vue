<template>
  <div v-if="loading">加载中…</div>
  <div v-else-if="error" style="color: crimson;">出错了：{{ error }}</div>
  <div v-else>
    <ul>
      <li>CPU 核心数：{{ i.cpu_cores }}</li>
      <li>系统：{{ i.os_name }} {{ i.os_version }}</li>
      <li>Java 版本：{{ i.java_version }} {{ i.java_vendor }}</li>  
      <li>Java 堆内存上限：{{ (i.max_memory / (1024*1024*1024)).toFixed(2) }} GB</li>
      <li>Fabric Loader 版本：{{ i.loader_version }}</li>
      <li>游戏版本：{{ i.game_version }}</li>
      <li>开启时间：{{ formatDateTime(new Date(i.uptime)) }}</li>
      <li>模组列表：
        <ol><li v-for="(value, key) in i.mods" :key="item">{{ key }}: {{ value }}</li></ol>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const loading = ref(true);
const error   = ref('');
const i       = ref({});

onMounted(async () => {
  try {
    const res = await fetch('/mc/info');
    if (!res.ok) throw new Error(res.statusText);
    i.value = await res.json();
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
});

function pad(num: number, size = 2) {
  let s = num + '';
  while (s.length < size) s = '0' + s;
  return s;
}

function formatDateTime(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const millisecond = date.getMilliseconds();
  return `${year}年${pad(month)}月${pad(day)}日 ${pad(hour)}:${pad(minute)}:${pad(second)}.${pad(millisecond, 3)}`;
}
</script>