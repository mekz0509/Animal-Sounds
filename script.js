const animalImages = document.querySelectorAll('.animal-img');
let currentAudio = null;

animalImages.forEach((image) => {
    image.addEventListener('click', () => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        let audio;

        switch (image.src.split('/').pop()) {
            case 'monkey.png':
                audio = new Audio('sound/monkey.mp3');
                break;
            case 'birds.png':
                audio = new Audio('sound/birds.mp3');
                break;
            case 'elephant.png':
                audio = new Audio('sound/elephant.mp3');
                break;
            case 'cobra.png':
                audio = new Audio('sound/cobra.mp3');
                break;
            case 'lion.png':
                audio = new Audio('sound/lion.mp3');
                break;
            default:
                audio = null;
        }

        if (audio) {
            audio.play();
            currentAudio = audio;
        }
    });
});