export default {
  get() {
    this.cover = document.querySelector('.card-image');
    this.title = document.querySelector('.card-content h5');
    this.artist = document.querySelector('.card-content p');
    this.playPause = document.querySelector('#play-pause');
  },

  createAudioElement(audio) {
    this.audio = new Audio(audio);
  },
  action(){
    this.playPause.onclick = () => this.play();
  }
}