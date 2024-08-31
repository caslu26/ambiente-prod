document.addEventListener('DOMContentLoaded', function() {
    const vipContent = document.getElementById('vip-content');

    // Simulação de vídeos VIP (pode ser substituído por conteúdo dinâmico)
    const vipVideos = [
        { title: 'Video 1: Dicas Exclusivas', url: 'https://video-url.com/1' },
        { title: 'Video 2: Aulas Avançadas', url: 'https://video-url.com/2' },
        { title: 'Video 3: Entrevista com Expert', url: 'https://video-url.com/3' }
    ];

    vipVideos.forEach(video => {
        const videoDiv = document.createElement('div');
        videoDiv.classList.add('video');

        const videoTitle = document.createElement('h3');
        videoTitle.textContent = video.title;

        const videoElement = document.createElement('video');
        videoElement.src = video.url;
        videoElement.controls = true;

        videoDiv.appendChild(videoTitle);
        videoDiv.appendChild(videoElement);
        vipContent.appendChild(videoDiv);
    });
});
