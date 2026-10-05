const music = document.getElementById("music");
const startButton = document.getElementById("startButton");
const volume = document.getElementById("volume");
const volumeIcon = document.getElementById("volumeIcon");

function updateVolume() {
    music.volume = Number(volume.value);

    if (music.volume === 0) volumeIcon.textContent = "🔇";
    else if (music.volume < 0.5) volumeIcon.textContent = "🔉";
    else volumeIcon.textContent = "🔊";
}

updateVolume(); 

startButton.addEventListener("click", async () => {
    try {
        if (music.paused) {
            await music.play();
        } else {
            music.pause();
        }
    } catch (error) {
        console.error("Music could not play:", error);
        alert("Sweden could not be played. Put the song in the same folder as index.html and name it sweden.mp3.");
    }
});

music.addEventListener("play",  () => { startButton.textContent = "⏸ Pause Minecraft"; });
music.addEventListener("pause", () => { startButton.textContent = "▶ Play Minecraft"; });

volume.addEventListener("input", updateVolume);