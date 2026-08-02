const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// تشغيل ملفات موقعك الحالية كملفات ثابتة
app.use(express.static(path.join(__dirname)));

io.on('connection', (socket) => {
    console.log('مستخدم جديد اتصل بالدردشة');

    // استقبال الرسالة من أحد المستخدمين وتوزيعها على الجميع
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('مستخدم غادر الدردشة');
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`الخادم يعمل على الرابط: http://localhost:${PORT}`);
});
