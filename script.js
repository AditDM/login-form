document.getElementById('button').addEventListener('click', function() {

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        alert("login sukses")
        window.open("http://127.0.0.1:5500/week2/test.html", "_blank");
    } else {
        document.querySelector('.p').style.display = 'block';
        document.querySelector('.a').style.display = 'block';
        alert("login gagal")
    }
});