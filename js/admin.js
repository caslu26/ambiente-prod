document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const module = document.getElementById('module').value;
    const title = document.getElementById('title').value;
    const url = document.getElementById('url').value;

    // validação 
    if (module && title && url) {

        alert('video enviado com sucesso');
        document.getElementById('uploadForm').reset();
    }else {
        alert ('Por favor, preencha todos os campos')
    }
});

// exemplo da estatisticas de visualizações
document.getElementById('stats').innerText = 'Usuarios assistindo: 23'

