let slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n){
    showSlides(slideIndex += n)
}
function currentSlide(n){
    showSlides(slideIndex = n)
}
function showSlides(n){
    let i;
    let slides = document.querySelectorAll(".mySlides");
    let quadrates = document.querySelectorAll(".quadrate"); 
    if(n > slides.length) slideIndex = 1
    if(n < 1) slideIndex = slides.length
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    for(i = 0; i < quadrates.length;i++){
        quadrates[i].className = quadrates[i].className.replace("active","")
    }
    slides[slideIndex-1].style.display = "block";
    quadrates[slideIndex-1].className += " active";
}


// ------------------------------------
// Galerías de Fancybox
// ------------------------------------
Fancybox.bind('[data-fancybox="gallery-1"]', {
    //
});
Fancybox.bind('[data-fancybox="gallery-2"]', {
    //
});
Fancybox.bind('[data-fancybox="antes-1"]', {
    //
});
Fancybox.bind('[data-fancybox="antes-2"]', {
    //
});
Fancybox.bind('[data-fancybox="antes-3"]', {
    //
});
Fancybox.bind('[data-fancybox="antes-4"]', {
    //
});
Fancybox.bind('[data-fancybox="antes-5"]', {
    //
});
Fancybox.bind('[data-fancybox="antes-6"]', {
    //
});
