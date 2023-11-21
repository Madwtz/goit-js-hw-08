
const throttle = require('lodash.throttle');

const iframe = document.getElementById('vimeo-player');
    const player = new Vimeo(iframe);

player.on('timeupdate', throttle(() => {
    const currentTime = player.getCurrentTime();
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)); 
  window.addEventListener('load', () => {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime) {
      player.setCurrentTime(parseFloat(savedTime));
    }
  });