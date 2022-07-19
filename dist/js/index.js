const cardsTrending = document.querySelectorAll('.card-top');

cardsTrending.forEach((card) => {
    let urlBg = card.dataset.urlbg;
    card.style.backgroundImage = `url(${urlBg})`;
});
