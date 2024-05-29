function suitableCourse() {
  const persentText = document.querySelector('.suitable-course__num');
  function getPercent() {
    const inputs = Array.from(document.querySelectorAll('.suitable-course__checkbox'));
    const checkedInputs = inputs.filter((input) => input.checked).length;
    const inputPercent = Math.round(100 / inputs.length);
    const percent = checkedInputs * inputPercent;
    persentText.parentElement.style.opacity = '0';
    setTimeout(() => {
      persentText.textContent = percent;
      persentText.parentElement.style.opacity = '1';
    }, 300);
  }

  const pointBox = document.querySelector('.suitable-course__point-box');

  pointBox.addEventListener('click', (e) => {
    let target = e.target;
    if (target.classList.contains('suitable-course__checkbox')) {
      getPercent();
    }
  });
  getPercent();
}

export default suitableCourse;
