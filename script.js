const keys = document.querySelectorAll('.say')


keys.forEach(say => {
  say.addEventListener('click', () => playNote(say))
})

function playNote(say) {
  const noteAudio = document.getElementById(say.dataset.note)
  noteAudio.play()
}