  document.getElementById('toggleButton').addEventListener('click', function () {
    const answers1 = document.getElementById('answers1');
    const answers2 = document.getElementById('answers2');

    answers1.classList.toggle('hidden');
    answers2.classList.toggle('hidden');
  });

