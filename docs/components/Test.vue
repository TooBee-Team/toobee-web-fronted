<template>
    <v-container>
      <v-card class="chat-box" elevation="6" ref="chatBox">
        <v-card-title class="text-center">聊天室</v-card-title>
        <v-card-text class="chat-content" ref="chatContent">
          <div v-for="(message, index) in messages" :key="index" class="message">
            <strong>{{ message.sender }}</strong>: {{ message.text }}
          </div>
        </v-card-text>
        <div class="resizer" @mousedown="startResize"></div>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "Test",
    data() {
      return {
        messages: [
          { sender: "用户A", text: "你好，今天天气不错！" },
          { sender: "用户B", text: "是啊，适合出去走走。" },
          { sender: "用户A", text: "你最近忙不忙？" },
          { sender: "用户A", text: "你最近忙不忙？" },
          { sender: "用户A", text: "你最近忙不忙？" },
          { sender: "用户B", text: "挺忙的，不过还好。" },
          // 初始消息
        ],
        isResizing: false,
        originalHeight: 0,
        originalY: 0,
      };
    },
    methods: {
      startResize(event) {
        this.isResizing = true;
        // 确保 DOM 更新完成后获取高度
        this.$nextTick(() => {
          if (this.$refs.chatBox && this.$refs.chatBox.$el) {
            this.originalHeight = this.$refs.chatBox.$el.clientHeight; // 使用 offsetHeight
          }
        });
        this.originalY = event.clientY;
        document.addEventListener("mousemove", this.resize);
        document.addEventListener("mouseup", this.stopResize);
      },
      resize(event) {
        if (this.isResizing && this.$refs.chatBox && this.$refs.chatBox.$el) {
          const newHeight = this.originalHeight + (event.clientY - this.originalY);
          this.$refs.chatBox.$el.style.height = `${newHeight}px`;
        }
      },
      stopResize() {
        this.isResizing = false;
        document.removeEventListener("mousemove", this.resize);
        document.removeEventListener("mouseup", this.stopResize);
      },
    },
  };
  </script>
  
  <style scoped>
  .chat-box {
    width: 60%; /* 设置宽度为页面的 60% */
    max-width: 600px; /* 可选：限制最大宽度 */
    background-color: rgba(32, 32, 32, 0.7);
    margin: 20px auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: relative;
    transition: height 0.2s ease; /* 平滑高度变化 */
    overflow: hidden; /* 防止内容溢出 */
  }
  
  .chat-content {
    max-height: 300px;
    overflow-y: auto;
    padding: 20px; /* 调整文字与边框的距离 */
    background-color: rgba(16, 16, 16, 0.8);
    transition: scroll 0.5s ease; /* 添加滚动动画效果 */
  }
  
  .message {
    margin-bottom: 10px;
  }
  
  .resizer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10px;
    cursor: ns-resize;
    background: rgba(0, 0, 0, 0.2);
  }
  </style>