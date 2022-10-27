var jogador                     //Elementos
var frames                      //Controle de animação
var posJogadorX, posJogadorY    //Posições
var dirJogadorY, dirJogadorX    //Direção
var telaWidth, telaHeight       //Tamanhos
var velJogador                  //Velocidade
var tecla                       //Controle
var jogo = false

function teclaDown(event) {  //MOVER NAVE
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
    atira(posJogadorX + 18, posJogadorY)
  }
}

function teclaUp(event) {   //PARAR NAVE
  tecla = event.key
  if (tecla == 'ArrowUp' || tecla == 'ArrowDown') {
    dirJogadorY = 0
  } else if (tecla == 'ArrowLeft' || tecla == 'ArrowRight') {
    dirJogadorX = 0
  }
}

function atira(x, y) {
  var tiro = document.createElement('div')
  var atributo1 = document.createAttribute('class')
  var atributo2 = document.createAttribute('style')
  atributo1.value = 'tiroJogador'
  atributo2.value = 'top:' + y + 'px;left:' + x + 'px'
  tiro.setAttributeNode(atributo1)
  tiro.setAttributeNode(atributo2)
  document.body.appendChild(tiro)
}

function controlaJogador() {
  posJogadorY += dirJogadorY * velJogador
  posJogadorX += dirJogadorX * velJogador
  jogador.style.top = posJogadorY + 'px'
  jogador.style.left = posJogadorX + 'px'
}

function gameLoop() {
  if (jogo) {
    //FUNÇÃO DE CONTROLE
    controlaJogador()
  }
  frames = requestAnimationFrame(gameLoop)
}

function inicia() {
  jogo = true
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

  gameLoop()
}

document.addEventListener('keydown', teclaDown)
document.addEventListener('keyup', teclaUp)
window.addEventListener('load', inicia)
