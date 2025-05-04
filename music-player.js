// Mendapatkan elemen audio dan tombol play/pause
const audio = document.getElementById('bgMusic');
const playPauseBtn = document.getElementById('playPauseBtn');

// Cek jika audio sedang diputar atau dijeda
if (localStorage.getItem('audioStatus') === 'playing') {
  audio.play();
  playPauseBtn.textContent = 'Pause';
} else {
  audio.pause();
  playPauseBtn.textContent = 'Play';
}

// Menambahkan event listener pada tombol play/pause
playPauseBtn.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = 'Pause';
    localStorage.setItem('audioStatus', 'playing'); // Simpan status pemutaran
  } else {
    audio.pause();
    playPauseBtn.textContent = 'Play';
    localStorage.setItem('audioStatus', 'paused'); // Simpan status pemutaran
  }
});
