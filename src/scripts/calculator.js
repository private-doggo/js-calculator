const numpad = document.querySelector('.numpad');
const input = document.querySelector('.input');

const mathEval = (str) => {
  // str.replaceAll(/\+-|-\+/, '-');
  // str = str.split('');
  // while (str.includes('×')) {
  //   const i = str.indexOf('×');
  //   str.splice(i - 1, 3, str[i - 1] * str[i + 1]);
  // }
  //
  // if (str.length === 1) return str[0];
  // else return undefined;
}

const keyPress = (e) => {
  const key = e.target.closest('.key');
  if (!key) return undefined;

  if (key.hasAttribute('writable')) input.append(key.innerHTML);
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
      input.innerHTML = mathEval(input.innerHTML) || 'Error'; // чтобы не было пустого ввода и ошибок
      break;
    }
  }
}

numpad.addEventListener('click', keyPress);