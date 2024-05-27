function resultsBanner () {


        const imageInputs = document.querySelectorAll('.image-slider__input');

        imageInputs.forEach(input => {
            const imageContainer = input.parentElement
            input.addEventListener('input', e => {
                imageContainer.style.setProperty('--position', `${e.target.value}%`);
            });
        })


}

export default resultsBanner