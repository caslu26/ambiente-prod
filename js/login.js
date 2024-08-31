document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // validando 
    if (email && password) {
        alert('Login bem-sucedido')

        window.location.href = 'vip.html';
    }else {
        alert('por favor, preencha todos os campos')
    }
});