import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const setTime = () => {
  player
    .getCurrentTime()
    .then(seconds => {
      localStorage.setItem('time', seconds);
    })
    .catch(error => {
      console.error(error.message);
    });
};
window.addEventListener('load', () => {
  const savedTime = localStorage.getItem('time');
  if (savedTime) {
    player.setCurrentTime(savedTime).catch(error => {
      console.error('Error setting the current time:', error);
    });
  }
});
player.on('pause', setTime);
player.on('seeking', setTime);
player.on('timeupdate', _.throttle(setTime, 1500));