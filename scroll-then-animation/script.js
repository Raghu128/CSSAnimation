const cards = document.querySelectorAll('.card')


window.addEventListener('scroll', checkbox);

checkbox();

function checkbox() {
    const triggerbottom = window.innerHeight/4 * 4;

    cards.forEach((card) => {
        const boxtop = card.getBoundingClientRect().top;

        if(boxtop < triggerbottom) {
            card.classList.add('show');
        }
    })
}