const playingPiano = (e)=> {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.keys[data-key="${e.keyCode}"]`)
    if (!audio) return
    audio.currentTime = 0
    audio.play()
    
    key.classList.add('playing')
}
function removingTransition(e){

    if (e.propertyName !== 'transform') return

    this.classList.remove('playing')

}

const keys = document.querySelectorAll('.keys')
keys.forEach(key => key.addEventListener('transitionend', removingTransition))

window.addEventListener('keydown', playingPiano)