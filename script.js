document.addEventListener('DOMContentLoaded', () => {
    console.log("Blog Jamesorango carregado com sucesso!");

    // Exemplo: Logica simples para mudar a cor do logo ao clicar
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', () => {
        logo.style.color = logo.style.color === 'blue' ? '#111' : 'blue';
    });
});