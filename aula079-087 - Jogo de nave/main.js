var jogador, bomba //Elementos
var frames //Controle de animação
var posJogadorX, posJogadorY //Posições
var dirJogadorY, dirJogadorX //Direção
var telaWidth, telaHeight //Tamanhos
var velJogador, velTiro //Velocidade
var tecla //Controle
var jogo = false

function teclaDown(event) {
  //MOVER NAVE
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

function teclaUp(event) {
  //PARAR NAVE
  tecla = event.key
  if (tecla == 'ArrowUp' || tecla == 'ArrowDown') {
    dirJogadorY = 0
  } else if (tecla == 'ArrowLeft' || tecla == 'ArrowRight') {
    dirJogadorX = 0
  }
}

function criaBomba() {
  if (jogo) {
    bomba = document.createElement('div')
    var posBombaX = Math.random() * telaWidth
    var posBombaY = 0
    var atributo1 = document.createAttribute('class')
    var atributo2 = document.createAttribute('style')
    atributo1.value = 'bomba'
    atributo2.value = 'top:' + posBombaY + 'px;left:' + posBombaX + 'px'
    bomba.setAttributeNode(atributo1)
    bomba.setAttributeNode(atributo2)
    document.body.appendChild(bomba)
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

function controleTiros() {
  var tiros = document.getElementsByClassName('tiroJogador')
  for (var i = 0; i < tiros.length; i++) {
    if (tiros[i]) {
      var posTiro = tiros[i].offsetTop
      posTiro -= velTiro
      tiros[i].style.top = posTiro + 'px'
      if (posTiro < 0) {
        tiros[i].remove()
      }
    }
  }
}

function controleJogador() {
  posJogadorY += dirJogadorY * velJogador
  posJogadorX += dirJogadorX * velJogador
  jogador.style.top = posJogadorY + 'px'
  jogador.style.left = posJogadorX + 'px'
}

function gameLoop() {
  if (jogo) {
    //FUNÇÃO DE CONTROLE
    controleJogador()
    controleTiros()
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
  velJogador = velTiro = 5
  jogador = document.getElementById('naveJogador')
  jogador.style.top = posJogadorY + 'px'
  jogador.style.left = posJogadorX + 'px'

  gameLoop()
}

document.addEventListener('keydown', teclaDown)
document.addEventListener('keyup', teclaUp)
window.addEventListener('load', inicia)
