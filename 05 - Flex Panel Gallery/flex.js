const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

// function toggleActive() {
//   if (this.classList.contains('open')) {
//     this.classList.add('open-active');
//   } else {
//     this.classList.remove('open-active');
//   }
// }
function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    // Includes the word flex for browser support
    this.classList.toggle('open-active');
  }
}

panels.forEach((panel) => {
  panel.addEventListener('click', toggleOpen);
});

panels.forEach((panel) => {
  panel.addEventListener('transitionend', toggleActive);
});
