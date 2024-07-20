const input = document.getElementById('Input');

function num(val) {
  input.value += val;
}

function Result() {
  try {
    input.value = eval(input.value.replace('x', '*'));
  } catch {
    input.value = 'Error';
  }
}

function ClearInput() {
  input.value = '';
}

function Back() {
  input.value = input.value.slice(0, -1);
}

document.addEventListener('keydown', function(event) {
  const key = event.key;
  const validKeys = '0123456789+-*/.%';
  if (validKeys.includes(key)) {
    updateInput(key === '*' ? 'x' : key);
  } else if (key === 'Enter') {
    Result();
  } else if (key === 'Backspace') {
    Back();
  } else if (key === 'Escape') {
    ClearInput();
  }
});