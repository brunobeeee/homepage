function scrollToSection() {
    var targetElement = document.getElementById('scrollTarget');
    targetElement.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById("scrollArrows").onclick =  function (){
    scrollToSection()
};