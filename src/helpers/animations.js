/**
 * ripple animation
 */
const rippleClickAnimation = (e) => {
    let ripple = e.target;
    let posX = e.pageX - ripple.getBoundingClientRect().left;
    let posY = e.pageY - ripple.getBoundingClientRect().top;
    let waveWidth = 2 * ripple.getBoundingClientRect().width;
    let divRippleEffect = document.createElement('div');
    divRippleEffect.className = 'ripple-effect';
    divRippleEffect.style.width = `${waveWidth}px`;
    divRippleEffect.style.height = `${waveWidth}px`;
    divRippleEffect.style.left = `${posX - waveWidth / 2}px`;
    divRippleEffect.style.top = `${posY - waveWidth / 2}px`;
    ripple.appendChild(divRippleEffect);
    window.setTimeout(() => {
        ripple.removeChild(divRippleEffect);
    }, 1000);
};

export { rippleClickAnimation };
