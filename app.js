const randColorGenerator = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const clrCngBtn = document.querySelector('.bg-clr-change')
clrCngBtn.addEventListener('click', function () {
    const temp = randColorGenerator();
    document.body.style.backgroundColor = temp;
});