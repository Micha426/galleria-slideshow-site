const lightboxLinkOpen = document.querySelector(".art-visual-link .lightbox-link");
const lightboxLinkClose = document.querySelector(".lightbox .lightbox-link");
const lightboxComponent = document.querySelector(".lightbox");

lightboxLinkOpen.addEventListener("click", function() {
    lightboxComponent.classList.add("active");
});

lightboxLinkClose.addEventListener("click", function() {
    lightboxComponent.classList.remove("active");
});