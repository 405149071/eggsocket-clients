const socket = require('socket.io-client')('http://127.0.0.1:7001');

// 连接服务端
socket.on('connect', () => {
  console.log('connect!');
  socket.emit('chat', 'hello world!');
});

//接收消息通知
socket.on('res', msg => {
  console.log('res from server: %s!', msg);
});

// 接收上线通知
socket.on('online', msg=>{
   console.log('online from server: %s!', msg);
});

