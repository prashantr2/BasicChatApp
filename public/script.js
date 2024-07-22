const socket = io();

let btn = document.getElementById('btn');
let inputMsg = document.getElementById('newmsg');
let msgList = document.getElementById('msglist');

btn.onclick = () => {
    socket.emit('msg_send', {
        msg: inputMsg.value,
    });
}