const numpad = document.querySelector('.numpad');
const input = document.querySelector('.input');

const mathEval = (str) => {
  if (!/(?!.*([/+])\1)^-?\d+((?:\/?[+-]{1,2}|[/÷×])\d+)+$/gm.test(str)) return undefined;
  str = str.replace(/\+-|-\+/g, '-').replace(/--/g, '+').split(/(\+|-|×|÷)/);
  while (str.includes('÷')) {
    const i = str.indexOf('÷');
    str.splice(i - 1, 3, str[i - 1] / str[i + 1]);
  }
  while (str.includes('×')) {
    const i = str.indexOf('×');
    str.splice(i - 1, 3, str[i - 1] * str[i + 1]);
  }
  while (str.includes('-')) {
    const i = str.indexOf('-');
    str.splice(i - 1, 3, str[i - 1] - str[i + 1]);
  }
  while (str.includes('+')) {
    const i = str.indexOf('+');
    str.splice(i - 1, 3, +str[i - 1] + +str[i + 1]);
  }
  return str[0];
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
      const answer = mathEval(input.innerHTML);
      if (answer !== undefined) input.innerHTML = answer;
      else input.innerHTML = 'Error';
      break;
    }
  }
}

numpad.addEventListener('click', keyPress);