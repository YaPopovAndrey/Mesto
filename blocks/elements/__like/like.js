let like = document.querySelector('.elements__like');

function likeActive () {
    if (like.classList.contains('elements__like_active')) {}

    like.classList.toggle('elements__like_active');
}

like.addEventListener('click', likeActive);