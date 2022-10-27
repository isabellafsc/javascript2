//Elementos
var jogador

//Controle de animação
var frame

//Posições
var posJogadorX, posJogadorY

//Direção
var dirJogadorY, dirJogadorX

//Tamanhos
var telaWidth, telaHeight
//Velocidade
var velJogador

//Controle
var tecla
var jogo = false

function inicia() {
  jogo = false
  telaWidth = window.innerWidth
  telaHeight = window.innerHeight
  //JOGADOR INICIAL:
  dirJogadorX = dirJogadorY = 0
  posJogadorX = telaWidth / 2
  posJogadorY = telaHeight / 2
  velJogador = 5
  jogador = document.getElementById('naveJogador')
  jogador.style.top = posJogadorY + 'px'
  jogador.style.left = posJogadorX + 'px'
}

function gameLoop() {
  if (jogo) {
    //FUNÇÃO DE CONTROLE
  }
  frame = requestAnimationFrame(gameLoop)
}

function controlaJogador() {}

function teclaDown(event) {
  tecla = event.key
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
  tecla = event.key
  if (tecla == 'ArrowUp' || tecla == 'ArrowDown') {
    dirJogadorY = 0
  } else if (tecla == 'ArrowLeft' || tecla == 'ArrowRight') {
    dirJogadorX = 0
  }
}

document.addEventListener('keydown', teclaDown)
document.addEventListener('keyup', teclaUp)
window.addEventListener('load', inicia)
