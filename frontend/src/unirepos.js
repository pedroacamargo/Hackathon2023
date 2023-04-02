fetch('/static/pages/question.html')
  .then((response) => response.text())
  .then((r) => {
    fetch('/api/question/list')
      .then((response) => response.json())
      .then((data) => {
        data.forEach((element) => {
          const li = document.createElement('li');
          li.classList = 'w-full';
          li.innerHTML = r;
          li.onclick = () => {
            window.location.href = `/repo?id=${element.id}`;
          };
          li.querySelector('#name').innerText = element.name;
          li.querySelector('#question').innerText = element.statement || 'No statement';
          document.getElementById('question_list').appendChild(li);
        });
        // document.getElementById('nome').innerText = data[0].name;
        // document.getElementById('enunciado').innerText = data[0].statement;
        // document.getElementById('profile-fullname').innerHTML = data.fullname;
        // document.getElementById('profile-email').value = data.email;
      });
  });
