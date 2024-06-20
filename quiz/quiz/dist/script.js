function nextPage(pageId) {
    let pages = document.getElementsByClassName('quiz-page');
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    document.getElementById(pageId).style.display = 'block';
}

// Função para redirecionar para o link especificado
function redirectToLink() {
    window.location.href = "https://kiwify.app/lms5tRJ?afid=pORlTFzU";
}

// Adiciona o evento de clique para os botões da página 4
document.addEventListener("DOMContentLoaded", function() {
    const page4Buttons = document.querySelectorAll("#page4 .option");
    page4Buttons.forEach(button => {
        button.addEventListener("click", redirectToLink);
    });
});