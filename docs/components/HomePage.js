class WebSocketManager {
  constructor(relativePath) {
    this.relativePath = relativePath;
    this.url = null;
    this.ws = null;
    this.intervalId = null;
    this.listeners = new Array(4);
    this.time = 0n;
    this.buf = new ArrayBuffer(12);
  }

  connect() {
    if (this.ws)
      this.ws.close();
    const ws = new WebSocket(this.url);
    ws.binaryType = "arraybuffer";

    ws.onopen = () => {
      this.intervalId = setInterval(() => {
        this.sendMessage(0);
      }, 20000);
    };

    ws.onmessage = (event) => {
      const data = event.data;
      const all = new DataView(data);
      this.listeners[all.getInt32(8)](all.getBigInt64(), new DataView(data, 12))
    };

    ws.onclose = () => {
      this.listeners = null;
      clearInterval(this.intervalId);
      this.intervalId = null;
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
    
    this.ws = ws;
  }
  
  sendMessage(type, time = this.time) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      const v = new DataView(this.buf);
      v.setBigInt64(0, time);
      v.setInt32(8, type);
      this.ws.send(this.buf);
    } else {
      console.error('WebSocket is not connected');
    }
  }

  addListener(type, listener) {
    this.listeners[type] = listener;
  }
  
  setUrl(location) {
    const fullUrl = new URL(this.relativePath, location.origin);
    fullUrl.protocol = fullUrl.protocol === 'https:' ? 'wss:' : 'ws:';
    this.url = fullUrl.href;
    //this.url = 'ws://localhost:8080/home'
    this.relativePath = null;
  }
}

export const wsMan = new WebSocketManager('/mc/home');
