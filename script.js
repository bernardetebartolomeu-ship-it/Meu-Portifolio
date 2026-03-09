
function scrollParaProjetos() {
    const sectionProjetos = document.getElementById('projetos');
    sectionProjetos.scrollIntoView({ behavior: 'smooth' });
}


window.addEventListener('scroll', function() {
    const secoes = document.querySelectorAll('section');
    secoes.forEach(secao => {
        const top = secao.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            secao.style.opacity = "1";
            secao.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll('section').forEach(secao => {
    secao.style.opacity = "0";
    secao.style.transform = "translateY(20px)";
    secao.style.transition = "all 0.8s ease-out";
});