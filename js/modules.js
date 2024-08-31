document.addEventListener('DOMContentLoaded', function() {
    const modulesList = document.getElementById('modules-list');

    // Simulação de módulos e vídeos (pode ser substituído por conteúdo dinâmico)
    const modules = [
        {
            title: 'Módulo 1: Introdução',
            description: 'Uma introdução ao curso.',
            videos: [
                'Video 1: Bem-vindo ao Curso',
                'Video 2: Conceitos Básicos'
            ]
        },
        {
            title: 'Módulo 2: Fundamentos',
            description: 'Aprofundando os conhecimentos.',
            videos: [
                'Video 1: Fundamentos Essenciais',
                'Video 2: Técnicas Avançadas'
            ]
        }
    ];

    modules.forEach(module => {
        const moduleDiv = document.createElement('div');
        moduleDiv.classList.add('module');

        const moduleTitle = document.createElement('h3');
        moduleTitle.textContent = module.title;

        const moduleDescription = document.createElement('p');
        moduleDescription.textContent = module.description;

        moduleDiv.appendChild(moduleTitle);
        moduleDiv.appendChild(moduleDescription);

        module.videos.forEach(video => {
            const videoItem = document.createElement('p');
            videoItem.textContent = `- ${video}`;
            moduleDiv.appendChild(videoItem);
        });

        modulesList.appendChild(moduleDiv);
    });
});
