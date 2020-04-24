export default {
  get() {
    this.cover = document.querySelector('.card-image');
    this.title = document.querySelector('.card-content h5');
    this.artist = document.querySelector('.card-content p');
  },

  createAudioElement(audio) {
    this.audio = new Audio(audio);
  }

}