fetch('/api/blog/list')
    .then(response => response.json())
    .then(data => {
    console.log(data[0])
    document.getElementById('nome').innerText = data[0].name;
    document.getElementById('enunciado').innerText = data[0].statement;
    // document.getElementById('profile-fullname').innerHTML = data.fullname;
    // document.getElementById('profile-email').value = data.email;
    });