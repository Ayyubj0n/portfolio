var btn = document.getElementById("contact");
var btnimg = document.getElementById("name");
var line1 = document.getElementById('line-1');

btn.addEventListener('click', function handleClick() {
    const initialText = 'Contact';
  
    if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
      btn.textContent = 'erkinovayub9@gmail.com';
    } else {
      btn.textContent = initialText;
    }
  });