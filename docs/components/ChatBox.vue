<template>
  <v-container>
    <v-btn color="primary" @click="toggleChatBox">
      {{ isChatBoxVisible ? '收起聊天框' : '显示聊天框' }}
    </v-btn>

    <v-card v-if="isChatBoxVisible" class="chat-box" elevation="6">
      <v-card-title class="text-center">聊天室</v-card-title>
      <v-card-text class="chat-content" ref="chatContent">
        <div v-for="(message, index) in messages" :key="index" class="message">
          <strong>{{ message.sender }}</strong>: {{ message.text }}
        </div>
      </v-card-text>
      <v-card-actions class="text-center">
        <v-btn color="secondary" @click="scrollToBottom">跳转到最底部</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
  
  <script>
  export default {
    name: "ChatBox",
    data() {
      return {
        isChatBoxVisible: false,
        messages: [],
        messageInterval: null,
      };
    },
    methods: {
      toggleChatBox() {
        this.isChatBoxVisible = !this.isChatBoxVisible;
        if (this.isChatBoxVisible) {
          this.startReceivingMessages();
        } else {
          this.stopReceivingMessages();
        }
      },
      scrollToBottom() {
        // 滚动到聊天框的最底部
        this.$nextTick(() => {
          this.$refs.chatContent.scrollTop = this.$refs.chatContent.scrollHeight;
        });
      },
      startReceivingMessages() {
        let count = 0;
        this.messageInterval = setInterval(() => {
          if (count < 30) {
            this.messages.push({
              sender: `用户${count % 2 === 0 ? 'A' : 'B'}`,
              text: `这是第${count + 1}条消息`,
            });
            this.$nextTick(() => {
              this.scrollToBottom();
            });
            count++;
          } else {
            this.stopReceivingMessages();
          }
        }, 1000);
      },
      stopReceivingMessages() {
        clearInterval(this.messageInterval);
      },
    },
    beforeDestroy() {
      this.stopReceivingMessages();
    },
  };
  </script>
  
  <style scoped>
  .chat-box {
    max-width: 800px;
    min-width: 300px;
    height: 600px;
    margin: 20px auto;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .chat-content {
    max-height: 400px;
    overflow-y: auto;
    padding: 30px; /* 调整文字与边框的距离 */
    transition: scroll 0.5s ease; /* 添加滚动动画效果 */
  }
  
  .message {
    margin-bottom: 10px;
  }
  </style>