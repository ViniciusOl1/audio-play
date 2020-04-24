export default {
  get() {
    this.cover = document.querySelector('.card-image');
    this.title = document.querySelector('.card-content h5');
    this.artist = document.querySelector('.card-content p');
    this.playPause = document.querySelector('#play-pause');
    this.vol = document.querySelector('#vol');
    this.volume = document.querySelector('#vol-control');
    this.seekbar = document.querySelector('#seekbar');
  },

  createAudioElement(audio) {
    this.audio = new Audio(audio);
  },
  action() {
    this.playPause.onclick = () => this.togglePlayPause();
    this.vol.onclick = () => this.toggleMute();
    this.volume.oninput = () => this.setVolume(this.volume.value);
    this.volume.onchange = () => this.setVolume(this.volume.value);
    this.seekbar.oninput = () => this.setSeek(this.seekbar.value);
    this.seekbar.onchange = () => this.setSeek(this.seekbar.value);
  }
}