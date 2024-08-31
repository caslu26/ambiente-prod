document.addEventListener('DOMContentLoaded', function() {
    const statistics = `
        <p>Usuários Registrados: 150</p>
        <p>Usuários Ativos: 23</p>
        <p>Vídeos Assistidos Hoje: 58</p>
        <p>Vídeo Mais Assistido: Introdução ao XYZ</p>
    `;

    document.getElementById('statistics').innerHTML = statistics;
});
