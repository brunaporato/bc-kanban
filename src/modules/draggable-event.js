export function draggableEvent() {
  const cards = document.querySelectorAll('.card')
  const dropzones = document.querySelectorAll('.cards')

  // cards
  cards.forEach((card) => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
  })

  function dragstart() {
    dropzones.forEach(zone => zone.classList.add('highlight'))

    this.classList.add('is-dragging')
  }

  function drag() {
  }

  function dragend() {
    dropzones.forEach(zone => zone.classList.remove('highlight'))

    this.classList.remove('is-dragging')
  }


  // dropzones
  dropzones.forEach((zone) => {
    zone.addEventListener('dragenter', dragenter)
    zone.addEventListener('dragover', dragover)
    zone.addEventListener('dragleave', dragleave)
    zone.addEventListener('drop', drop)
  })

  function dragenter() {
  }
  
  function dragover(e) {
    e.preventDefault()
    this.classList.add('is-over')

    // get dragging card
    const cardDragged = document.querySelector('.is-dragging')

    this.appendChild(cardDragged)
  }
  
  function dragleave() {
    this.classList.remove('is-over')
  }
  
  function drop() {
    this.classList.remove('is-over')
  }
}