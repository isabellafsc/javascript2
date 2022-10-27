var dirJogadorY, dirJogadorX

function teclaDown(event) {
  var tecla = event.key
  if (tecla == 'ArrowUp') {
    dirJogadorY = -1
  } else if (tecla == 'ArrowDown') {
    dirJogadorY = 1
  } else if (tecla == 'ArrowLeft') {
    dirJogadorX = -1
  } else if (tecla == 'ArrowRight') {
    dirJogadorX = 1
  } else if (tecla == ' ') {
  }
}

function teclaUp(event) {
  var tecla = event.key
  if (tecla == 'ArrowUp' || tecla == 'ArrowDown') {
    dirJogadorY = 0
  } else if (tecla == 'ArrowLeft' || tecla == 'ArrowRight') {
    dirJogadorX = 0
  }
}
