const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    console.log('This hovering');
    panel.classList.toggle('open', 'open-active');
  });
});
