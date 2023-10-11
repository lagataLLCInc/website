fetch('https://api.almix.net/v1/mc?hostname=smp.charley.wtf&port=25565').then(function(response) {
    return response.json();
}).then(function(data) {
    if (data.players.online != 0) {
        document.getElementById("online").innerHTML = data.players.online + " of " + data.players.max + " playing now";
    }
    else {
        document.getElementById("online").innerHTML = "0 of " + data.players.max + " playing now";
    }
}).catch(function(err) {
    console.log(err);
    document.getElementById("online").innerHTML = "server is offline...";
});
setInterval(() => {
    fetch('https://api.almix.net/v1/mc?hostname=smp.charley.wtf&port=25565').then(function(response) {
    return response.json();
}).then(function(data) {
    if (!data.players.online) { document.getElementById("online").innerHTML = "server is offline..."; }
    if (data.players.online != 0) {
        document.getElementById("online").innerHTML = data.players.online + " of " + data.players.max + " playing now";
    }
    else {
        document.getElementById("online").innerHTML = "0 of " + data.players.max + " playing now";
    }
}).catch(function(err) {
    console.log(err);
    document.getElementById("online").innerHTML = "server is offline...";
});
}, 10000);