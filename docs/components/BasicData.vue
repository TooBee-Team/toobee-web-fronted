<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6">
        <div class="text-center">
          <h3 class="title">在 线 玩 家</h3>
        </div>
        <v-card class="mx-auto" max-width="500" rounded="lg" variant="text">
          <div class="right-container">
            <div v-if="timeout" :style="{color: timeout_info.color}" class="warn">
              {{ timeout_info.text }}
            </div>
            <div v-else style="display:flex; flex-wrap:wrap; font-family:monospace; font-size:large;">
              <span
                v-for="(color, name) in players"
                :key="name"
                :style="{color: color}"
                style="width:calc(50%);"
              >
                {{ name }}
              </span>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <div class="text-center">
          <h3 class="title">服 务 器 状 态</h3>
        </div>
        <v-card class="mx-auto" max-width="200" rounded="lg" variant="text">
          <div class="left-container">
            <div v-if="timeout" :style="{color: timeout_info.color}" class="warn">
              {{ timeout_info.text }}
            </div>
            <div v-else-if="online">
              <p class="info">
                MSPT: 
                <span style="color:orange;">{{ mspt[index] }}</span>
              </p>
              <p class="info">
                堆内存: 
                <span style="color:orange;">{{ ram[index] }}</span> MB
              </p>
              <p class="info">
                实体数量: 
                <span style="color:orange;">{{ entities }}</span>
              </p>
              <p class="info">
                区块数量: 
                <span style="color:orange;">{{ chunks }}</span>
              </p>
            </div>
            <div v-else>
              <div class="warn" style="color: gray;">离 线</div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.left-container, .right-container {
  background-color: rgba(110, 75, 147, 0.2);
  border: 3px solid;
  border-color: gray;
  border-radius: 16px;
  min-height: 45px;
  padding: 8px;
  padding-left: 24px;
}

.title {
  text-align: center;
  line-height: 2.5;
  font-size: x-large;
}

.info {
  line-height: 0.8;
  font-size: large;
}

.warn {
  text-align: center;
  font-size: large;
}
</style>

<script>
import axios from 'axios'
const newUrl = '/api/basic'
const fixUrl = newUrl.concat('?fix=true')

export default {
  data() {
    return {
      intervalId: null,
      requestBasicInfo: null,

      index: 0,
      players: {},
      mspt: [],
      ram: [],
      entities: 0,
      chunks: 0,
      cache: null,

      online: false,
      timeout: true,
      timeout_info: {
        times: 0,
        text: "连接中...",
        color: "gray"
      }
    };
  },

  mounted() {
    this.intervalId = setInterval(() => {
      if (this.index == 9) {
        if (this.updateData())
          this.index = 0
      } else {
        //if (!this.timeout && this.online)
          ++this.index
      }
    }, 100);

    this.requestBasicInfo = setInterval(() => {
      this.fetchBasicInfo(this.timeout || !this.online ? newUrl : fixUrl)
    }, 1000);
  },

  beforeDestroy() { this.clear() },

  methods: {
    async fetchBasicInfo(url) {
      try {
        const response = await axios.get(url, { timeout: 3000 });
        if (response.status === 200 && 'data' in response.data) {
          this.cache = response.data.data
          this.timeout = false
        } else this.timeoutThen()
      } catch (error) {
        console.error('Error fetching data:', error);
        this.timeoutThen()
      }
    },
    
    timeoutThen() {
        ++this.timeout_info.times
        if (this.timeout_info.times > 10) {
          this.timeout_info.text = '无法获取数据'
          this.timeout_info.color = 'crimson'
          this.clear()
        }
    },
    
    clear() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null
      }
      if (this.requestBasicInfo) {
        clearInterval(this.requestBasicInfo);
        this.requestBasicInfo = null
      }
    },
    
    updateData() {
      if (this.cache === null) {
        this.timeout = true
        this.index = 0
        return false
      }

      this.timeout = false
      this.requestTimes = 0
      if (Object.keys(this.cache).length === 0) {
        this.online = false
        this.players = {}
        this.index = 0
        this.cache = null
        return false
      }

      this.online = true
      if ('players' in this.cache && this.cache.players !== null) {
        this.players = this.cache.players
      }
      this.mspt = this.cache.mspt10.map(x => (x / 10).toFixed(1))
      this.ram = this.cache.ram
      this.entities = this.cache.entities
      this.chunks = this.cache.chunks
      this.cache = null
      return true
    }
  }
};
</script>