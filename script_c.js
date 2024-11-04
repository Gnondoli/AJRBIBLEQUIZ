// Liste des pistes (vidéo et audio) avec des liens YouTube
const tracks = [
    { type: 'video', title: 'Evangile', src: 'Evangile.mp4', thumbnail: 'evangile.png' },
    { type: 'video', title: 'Ennemies de prière', src: 'enemie_priere.mp4', thumbnail: 'enemie_priere.png' },
    { type: 'video', title: 'La présence de Dieu', src: 'la_presence_de_Dieu.mp4', thumbnail: 'presence_de_Dieu.png' },
    { type: 'video', title: 'Tu as tout fait', src: 'Tu_as_tout_fait.mp4', thumbnail: 'enfants_jesus.jpg' },
  ];
  
  let currentIndex = 0;
  
  // Récupération des éléments HTML
  const videoPlayer = document.getElementById('videoPlayer');
  const audioPlayer = document.getElementById('audioPlayer');
  const youtubePlayer = document.getElementById('youtubePlayer');
  const playlist = document.getElementById('playlist');
  const currentTrack = document.getElementById('currentTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  // Charger une piste
  function loadTrack(index) {
    const track = tracks[index];
  
    // Cacher tous les lecteurs
    videoPlayer.style.display = 'none';
    audioPlayer.style.display = 'none';
    youtubePlayer.style.display = 'none';
  
    // Jouer le bon type de fichier
    if (track.type === 'video') {
      videoPlayer.src = track.src;
      videoPlayer.style.display = 'block';
      videoPlayer.play();
    } else if (track.type === 'audio') {
      audioPlayer.src = track.src;
      audioPlayer.style.display = 'block';
      audioPlayer.play();
    } else if (track.type === 'youtube') {
      youtubePlayer.src = track.src;
      youtubePlayer.style.display = 'block';
    }
  
    // Mettre à jour le titre du morceau
    currentTrack.textContent = `En lecture : ${track.title}`;
  
    // Marquer l'élément actif
    const items = document.querySelectorAll('.playlist li');
    items.forEach(item => item.classList.remove('active'));
    items[index].classList.add('active');
  
    currentIndex = index;
  }
  
  // Charger la piste précédente
  function prevTrack() {
    currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentIndex);
  }
  
  // Charger la piste suivante
  function nextTrack() {
    currentIndex = (currentIndex + 1) % tracks.length;
    loadTrack(currentIndex);
  }
  
  // Écouteurs pour les boutons de navigation
  prevBtn.addEventListener('click', prevTrack);
  nextBtn.addEventListener('click', nextTrack);
  
  // Générer la playlist avec les miniatures
  tracks.forEach((track, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<img src="${track.thumbnail}" alt="Miniature"> ${track.title}`;
    li.addEventListener('click', () => loadTrack(index));
    playlist.appendChild(li);
  });
  