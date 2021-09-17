
const data = [{
    message: "Hi User",
    createdAt: "2021-09-14T13:23:02.298z",
    sender: "agent",
    _id: "1"
},
{
    message: "How Are You Doing today",
    createdAt: "2021-09-14T13:23:02.298z",
    sender: "user",
    _id: "2"
},
{
    message: "I am good, how about you",
    createdAt: "2021-09-14T13:23:02.298z",
    sender: "agent",
    _id: "3"
},
{
    message: "I am good, thanks for asking",
    createdAt: "2021-09-16T02:08:02.298z",
    sender: "user",
    _id: "4"
},
{
    message: "How can I help you today ?",
    createdAt: "2021-09-16T00:23:02.298z",
    sender: "agent",
    _id: "5"
}
]
function gaetDataFromServer(){
    return data;
}
function constructor() {
    var data = gaetDataFromServer();
    var table = document.getElementById("myTable");
    for (var i = 0; i < data.length; i++) {
        var row = table.insertRow(i);
        dateObj = new Date(data[i].createdAt);
        if (data[i].sender == "user") {
            row.innerHTML = "<tr><div class='column'><div class='row'><div class='chat user'><div class='user_photo'></div><p class='chat-message' id='row'> " + data[i].message + " </p></div> </div><span class='usertime' id='t1'>" + timeSince(dateObj) + ' ago' + "</span></div></tr>";
        }
        else {
            row.innerHTML = "<tr><div class='column'><div class='row'><div class='chat agent'><div class='agent_photo'></div><p class='chat-message' id='row'> " + data[i].message + " </p></div> </div><span class='agenttime' id='t1'>" + timeSince(dateObj) + ' ago' + "</span></div></tr>";
        }
    }
}
 const ch=new constructor();

function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}
function add_text() {
    var length = document.getElementById("text").value.length;
    if (length == 0) {
        alert("Please enter input message");
        return;
    }
    var msgObj = { message: document.getElementById('text').value, createdAt: new Date().toISOString(), sender: "user", id: data.length + 1 }
    data.push(msgObj);
     var table = document.getElementById("myTable");
     var row = table.insertRow(-1);
     dateObj = new Date(msgObj.createdAt);
     row.innerHTML = "<tr><div class='column'><div class='row'><div class='chat user'><div class='user_photo'></div><p class='chat-message' id='row'> " + msgObj.message + " </p></div> </div><span class='usertime' id='t1'>" + timeSince(dateObj) + ' ago' + "</span></div></tr>";
    
     document.getElementById("text").value = '';
     
}
