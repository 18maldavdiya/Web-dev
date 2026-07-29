const erpress=require('express');
const app=express();    
const http=require('http');
const server=http.createServer(app);
const io=require('socket.io')(server);
app.use(express.static('public'));
app.use(express.json());


io.on('connection',(socket)=>{
    console.log(io.engine,clientsCount);
    socket.on("newuser",async ({socketId,name})=>{
        usermap[socketId]=name;
        let clients=[];
        let sockets=await io.fetchSockets();
        sockets.forEach((c)=>{
            if(usermap[c.id]){
                clients.push({id:c.id ,
                    name:usermap[c.id]
                });
            }
        });
        socket.emit("useradded",{
            msg:"user added successfully",
            username: usermap[socket.id],
            clients,
            clientsCount: sockets.length
        });
        socket.broadcast.emit("updatedetails",{
           msg:"new user added",
            clients,
            clientsCount: sockets.length
        });
        socket.on("newmessage",({socketId,msg})=>{
            socket.broadcast.emit("newmessage",{
                msg,
                username: usermap[socketId],
                socketId: socketId,
                clientsCount: io.engine.clientsCount
            });
        }
            });
        
})
server.listen(3000);