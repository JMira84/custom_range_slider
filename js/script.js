const project = {
    data: {
        contentWrapper: null,
        price: {
            element: null,
            currency: '$'
        },
        slider: {
            element: null,
            value: '1',
            min: '1.00',
            max: '100.00',
            step: '0.01'
        },
        buttonText: 'Buy Now'
    },
    init() {
        this.renderElements();
        this.sliderHandler();
    },
    renderElements() {
        this.renderContentWrapper();
        this.renderPriceWrapper();
        this.renderRangeSlider();
        this.renderButton();
    },
    renderContentWrapper() {
        const container = document.querySelector('.container');
        this.data.contentWrapper = container.appendChild(document.createElement('div'));
        this.data.contentWrapper.classList.add('content-wrapper');
    },
    renderPriceWrapper() {
        const priceWrapper = this.data.contentWrapper.appendChild(document.createElement('div'));
        priceWrapper.classList.add('price-wrapper');

        const dollarSign = priceWrapper.appendChild(document.createElement('span'));
        dollarSign.classList.add('dollar-sign');
        dollarSign.textContent = this.data.price.currency;

        this.data.price.element = priceWrapper.appendChild(document.createElement('span'));
        this.data.price.element.classList.add('price');
        this.data.price.element.textContent = this.data.slider.min;
    },
    renderRangeSlider() {
        this.data.slider.element = this.data.contentWrapper.appendChild(document.createElement('input'));
        this.data.slider.element.setAttribute('type', 'range');
        this.data.slider.element.setAttribute('value', this.data.slider.value);
        this.data.slider.element.setAttribute('min', this.data.slider.min);
        this.data.slider.element.setAttribute('max', this.data.slider.max);
        this.data.slider.element.setAttribute('step', this.data.slider.step);
        this.data.slider.element.classList.add('range-slider');
    },
    renderButton() {
        const button = this.data.contentWrapper.appendChild(document.createElement('button'));
        button.setAttribute('type', 'button');
        button.classList.add('button');
        button.textContent = this.data.buttonText;
    },
    sliderHandler() {
        this.data.slider.element.addEventListener('input', e => {
            const percent = (e.target.value / e.target.max) * 100;

            this.data.slider.element.style.background = `linear-gradient(to right, #EA346F ${percent}%, #4D4C53 ${percent}%)`;
            this.data.price.element.textContent = parseFloat(e.target.value).toFixed(2);
        });
    }
}

window.onload = function() {
    project.init();
}