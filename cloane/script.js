const socket = io();
console.log("connected to server");
let btn = document.querySelector(".login-btn")
let inp = document.querySelector('.username')

let login = document.querySelector('.chat-application')

let chartapp = document.querySelector('chat-app');


btn.addEventListener('click', () => {
    let username = inp.value.trim(); 
    if(username.length > 0) {
        socket.emit('newuser', {
            socketId: socket.id,
            username: username
        })
    }else{
        alert("Please enter a username");
    }
});

socket.on('useradded', (msg, username, clients, clientCount)=>{
    if(clientCount ){
        document.querySelector('active-users').innerText = clientCount;

    }
    login.style.display = 'none';
    chatapplication.style.display = 'block';
    let currentuser = document.querySelector('.current-user');
    currentuser.innerText = username;
})

document.querySelector('message-input').addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        e.preventDefault();
        document.querySelector('send-btn').click();
    }
});

document.querySelector('send-btn').addEventListener('click', () => { 
    let message = document.querySelector('message-input').value.trim(); 
    if(message.length > 0){
        socket.emit('newmessage', {
            socketId: socket.id,
            msg: message
           
        });
        document.querySelector('message-input').value = '';
    }
});
socket.on('msgreceived', (msg, username, socketId, clientsCount) => {
    let chats = document.querySelector('.chats');
    let chat = document.createElement('div'); 
    document.querySelector('active-users').innerText = clientsCount;
    innertext=clientsCount;
    chat.classList.add('chat');
    if(socketId === socket.id){
        chatmsg.innerText =${msg};
        chatmsg.classList.add('my-chat');
    }else{
        chatmsg.innerText =`${username}: ${msg}`;
        chatmsg.classList.add('other-chat');
    }
    chat.appendChild(chatmsg);
    chats.appendChild(chat);

});