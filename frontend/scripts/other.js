let others = false;

document.getElementById('toggleButton').addEventListener('click', () => {
  const answers1 = document.getElementById('answers1');
  const answers2 = document.getElementById('answers2');
  const state = document.getElementById('state');

  if (others === false) {
    answers1.classList.add('hidden');
    answers2.classList.remove('hidden');
    state.classList.remove('hidden');
    others = true;
  } else {
    answers1.classList.remove('hidden');
    answers2.classList.add('hidden');
    state.classList.add('hidden');
    others = false;
  }
});
