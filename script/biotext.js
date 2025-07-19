document.addEventListener('DOMContentLoaded', () => {
    // 1. Obter o elemento onde a biografia será exibida
    const bioDisplayArea = document.getElementById('bio-display-area');

    // 2. Carregar o valor salvo do localStorage
    const savedBioText = localStorage.getItem('bioTextContent');

    // 3. Inserir o texto no elemento HTML
    if (bioDisplayArea && savedBioText) {
        bioDisplayArea.textContent = savedBioText;
    } else if (bioDisplayArea) {
        // Opcional: Se não houver texto salvo, exiba uma mensagem padrão
        bioDisplayArea.textContent = "Ainda não há uma biografia definida. Clique em 'Editar Biografia' para adicionar uma!";
    }
});