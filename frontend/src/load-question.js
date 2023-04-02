const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
fetch('/api/question/get-item?id=' + params.id)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById('nome').innerText = data.name;
        document.getElementById('enunciado').innerText = data.statement;
    });