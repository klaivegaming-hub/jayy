let username;



document.getElementById("mybutton").onclick = function() {
    username = document.getElementById("input").value; 
    document.getElementById("myh1").textContent = `Hello ${username}`
}
