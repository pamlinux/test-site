const para = document.querySelector('p');
const input = document.querySelector('input');
const bouton = document.querySelector('button');


bouton.addEventListener('click', function() {
  let num = input.value;
  para.textContent = '';
  input.value = '';
  input.focus();
  for (let i = 1; i <= num; i++) {
  let sqRoot = Math.sqrt(i);
  if (Math.floor(sqRoot) !== sqRoot) {
    continue;
  }

  para.textContent += i + ' ';
}

});

