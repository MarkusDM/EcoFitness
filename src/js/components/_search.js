window.addEventListener('click', () => {
  if (document.querySelector('.search')) {
    const searchContainer = document.querySelector('.search'),
      input = searchContainer.querySelector('.search__input > input');

    input.addEventListener('input', (e) => {
      const value = e.target.value;

      value ? searchContainer.classList.add('active') : searchContainer.classList.remove('active');
    });
  }
});
