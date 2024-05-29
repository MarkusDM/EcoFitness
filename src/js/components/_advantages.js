function advantages() {
  // document.addEventListener('DOMContentLoaded', () => {
  //   const positions = [
  //     // { transform: 'translate(-150px, -150px)' },
  //     // { transform: 'translate(150px, -150px)' },
  //     // { transform: 'translate(0, 150px)' }
  //     { transform: 'translate(0, 0)' },
  //     { transform: 'translate(300px, 0px)' },
  //     { transform: 'translate(150px, 300px)' }
  //   ];

  //   const blocks = [
  //     document.getElementById('block1'),
  //     document.getElementById('block2'),
  //     document.getElementById('block3')
  //   ];

  //   let currentIndex = 0;

  // setInterval(() => {
  //   blocks.forEach((block, index) => {
  //     const nextPosition = positions[(index + currentIndex) % positions.length];
  //     block.style.transform = nextPosition.transform;
  //   });
  //   currentIndex = (currentIndex + 1) % positions.length;
  // }, 10000);
  // });

  const blocks = document.querySelectorAll('.advantages__text-box');
  let i = blocks.length;

  $('.advantages__text-wrapper').css({
    transform: 'rotate(' + 240 + 'deg)'
  });
  $('.advantages__text-box').css({
    transform: 'rotate(' + (i - 2) * 120 + 'deg)'
  });

  // if (window.innerWidth < 768) {
  setInterval(function () {
    // if(i == 0) {
    //   i = blocks.length
    // }
    i--;
    $('.advantages__text-box').css({
      transform: 'rotate(' + (i - 2) * 120 + 'deg)',
      transition: '3s'
    });
    $('.advantages__text-wrapper').css({
      transform: 'rotate(' + (360 - (i - 2) * 120) + 'deg)',
      transition: '3s'
    });
  }, 8000);
  // }
}

export default advantages;
