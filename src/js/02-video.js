import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoRef = document.querySelector('#vimeo-player');
const player = new Player(videoRef);

const saveCurrentTime = function (time) {
  localStorage.setItem('videoplayer-current-time', time.seconds);
  console.log(localStorage.getItem('videoplayer-current-time'));
};
player.on('timeupdate', throttle(saveCurrentTime, 1000));

const setSavedTime = function () {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
};
setSavedTime();
