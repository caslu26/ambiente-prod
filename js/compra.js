document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const card = document.getElementById('card').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;

    // Simulação de validação básica
    if (name && card && expiry && cvv) {
        alert('Pagamento realizado com sucesso!');
        // Aqui, você enviaria os dados para um servidor ou API para processamento
        // Exemplo: enviar os dados usando fetch() ou AJAX
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
