console.log('does this work?');

const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // dataset is an object containing all the custom data attributes
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix,
  );
}

inputs.forEach((input) => {
  input.addEventListener('change', handleUpdate);
});

inputs.forEach((input) => {
  input.addEventListener('mousemove', handleUpdate);
});
