const numpad = document.querySelector('.numpad');
const input = document.querySelector('.input');

const keyPress = (e) => {
  const key = e.target.closest('.key');
  if (!key) return false;
  input.focus();
  if (key.hasAttribute('writable')) input.innerHTML += key.innerHTML;
  else switch (key.classList[2]) {
    case 'clear-key': {
      input.innerHTML = '';
      break;
    }
    case 'backspace-key': {
      input.innerHTML = input.innerHTML.slice(0, -1);
      break;
    }
    case 'equals-key': {
      try {
        input.innerHTML = eval(input.innerHTML) || 'Error';
      }
      catch {
        input.innerHTML = 'Error';
      }
      break;
    }
  }
}

numpad.addEventListener('click', keyPress);