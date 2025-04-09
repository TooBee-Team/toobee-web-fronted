<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6">
        <div class="text-center">
          <h3 class="title">在 线 玩 家</h3>
        </div>
        <v-card class="mx-auto" max-width="500" rounded="lg" variant="text">
          <div class="left-container">
            <div v-if="mark === Mark.ONLINE && players !== null" style="display:flex; flex-wrap:wrap; font-family:monospace; font-size:large;">
              <span
                v-for="(color, name) in players"
                :key="name"
                :style="{color: color}"
                style="width:calc(50%); line-height:1.8"
              >
                {{ name }}
              </span>
            </div>
            <div v-else-if="mark === Mark.OFFLINE" style="color:gray;" class="warn">
              离 线
            </div>
            <div v-else-if="mark === Mark.TIMEOUT" style="color:crimson;" class="warn">
              无法获取数据
            </div>
            <div v-else style="color:aqua;" class="warn">
              获取数据中……
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <div class="text-center">
          <h3 class="title">服 务 器 状 态</h3>
        </div>
        <v-card class="mx-auto" max-width="500" rounded="lg" variant="text">
          <div class="right-container">
            <div v-if="mark === Mark.ONLINE" style="display:flex; flex-wrap:wrap;">
              <p class="info">
                MSPT: 
                <span style="color:orange;">{{ basic.mspt[basic.index] }}</span>
              </p>
              <p class="info">
                堆内存: 
                <span style="color:orange;">{{ basic.ram[basic.index] }}</span> MB
              </p>
              <p class="info">
                实体数量: 
                <span style="color:orange;">{{ basic.entities }}</span>
              </p>
              <p class="info">
                区块数量: 
                <span style="color:orange;">{{ basic.chunks }}</span>
              </p>
              <p class="info">
                上传速: 
                <span style="color:orange;">{{ basic.oub }}</span> KB/s
              </p>
              <p class="info">
                下载速: 
                <span style="color:orange;">{{ basic.inb }}</span> KB/s
              </p>
            </div>
            <div v-else-if="mark === Mark.LOADING" style="color:aqua;" class="warn">
              获取数据中……
            </div>
            <div v-else-if="mark === Mark.OFFLINE" style="color:gray;" class="warn">
              离 线
            </div>
            <div v-else style="color:crimson;" class="warn">
              无法获取数据
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
  line-height: 0.6;
  font-size: large;
  width: calc(50%);
}

.warn {
  text-align: center;
  font-size: large;
}
</style>

<script lang="ts">
import { wsMan } from './HomePage';

const DECODER = new TextDecoder('utf-8');

class BasicInfo {
  mspt: number[];
  ram: number[];
  entities: number;
  chunks: number;
  inb: number;
  oub: number;
  index = 0;

  constructor(data: object) {
    this.mspt = data.mspt10.map((x: number) => (x / 10).toFixed(1))
    this.ram = data.ram
    this.entities = data.entities
    this.chunks = data.chunks
    this.inb = (data.inb / 1024).toFixed(2)
    this.oub = (data.oub / 1024).toFixed(2)
  }
}

export default {
  data() {
    return {
      Mark: {
        TIMEOUT: -1,
        LOADING: 0,
        ONLINE: 1,
        OFFLINE: 2,
      },

      basic: null as BasicInfo | null,
      cache: null as object | null,
      players: null,
      basicTime: 0n,
      playerTime: 0n,
      intervalId: null,
      tick: 0,
      mark: 0,
    };
  },

  methods: {
    handleOffline(time: bigint) {
      if (this.basicTime < time) {
        wsMan.time = this.basicTime = time;
        if (this.mark !== this.Mark.OFFLINE) {
          this.mark = this.Mark.OFFLINE;
          this.basic = this.cache = null;
        }
        this.tick = -190;
      }
    },

    handleBasicInfo(time: bigint, data: DataView) {
      if (this.basicTime < time) {
        this.basicTime = time;
        const c = {};
        c.mspt10 = new Int16Array(10);
        for (let i = 0; i < 10; ++i)
          c.mspt10[i] = data.getInt16(i << 1);
        c.ram = new Int16Array(10);
        for (let i = 0; i < 10; ++i)
          c.ram[i] = data.getInt16(20 + (i << 1));
        c.entities = data.getInt32(40);
        c.chunks = data.getInt32(44);
        c.inb = data.getInt32(48);
        c.oub = data.getInt32(52);
        this.cache = c;
      }
    },

    handlePlayerInfo(time: bigint, data: DataView) {
      if (this.playerTime < time) {
        wsMan.time = this.playerTime = time;
        this.players = JSON.parse(DECODER.decode(data));
      }
    },
    
    clear() {
      clearInterval(this.intervalId);
      this.intervalId = null;
      wsMan.ws?.close();
    },
    
    tickBasic() {
      const t: number = ++this.tick;
      const cache = this.cache;
      if (this.mark === this.Mark.ONLINE && t < 10 && this.basic !== null) {
        this.basic.index = t;
      } else if (cache !== null) {
        this.basic = new BasicInfo(cache);
        this.cache = null;
        this.mark = this.Mark.ONLINE;
        this.tick = 0;
      } else if (t === 16 && this.mark === this.mark.ONLINE) {
        this.mark = this.Mark.LOADING;
        this.basic = null;
        wsMan.sendMessage(0, this.basicTime);
      } else if (t > 100 && this.mark !== this.Mark.TIMEOUT) {
        this.mark = this.Mark.TIMEOUT;
        this.clear();
      }
    }
  },

  mounted() {
    wsMan.setUrl(window.location);
    wsMan.addListener(0, this.handleOffline);
    wsMan.addListener(1, this.handleBasicInfo);
    wsMan.addListener(2, this.handlePlayerInfo);
    wsMan.connect();
    this.intervalId = setInterval(this.tickBasic, 100);
  },
  
  beforeDestroy() { this.clear(); }
}
</script>