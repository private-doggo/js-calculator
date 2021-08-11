const numpad = document.querySelector('.numpad');
const input = document.querySelector('.input');

const keyPress = (e) => {
  const key = e.target.closest('.key');
  if (!key) return false;
  input.focus();
  if (key.hasAttribute('writable')) input.value += key.innerHTML;
  else switch (key.classList[2]) {
    case 'clear-key': {
      input.value = '';
      break;
    }
    case 'backspace-key': {
      input.value = input.value.slice(0, -1);
      break;
    }
    case 'equals-key': {
      try {
        input.value = eval(input.value);
      }
      catch {
        input.value = 'Error';
      }
      break;
    }
  }
}

numpad.addEventListener('click', keyPress);