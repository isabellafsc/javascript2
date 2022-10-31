var jogador //Elementos
var frames //Controle de animação
var posJogadorX, posJogadorY //Posições
var dirJogadorY, dirJogadorX //Direção
var telaWidth, telaHeight //Tamanhos
var velJogador, velTiro, velBomba //Velocidade
var tecla //Controle
var jogo = false
var contagemBombas, painelContBombas, intervaloBomba
var hpPlaneta

function teclaDown(event) {
  //MOVER NAVE
  tecla = event.key
  if (tecla == 'ArrowUp' || tecla == 'w') {
    dirJogadorY = -1
  } else if (tecla == 'ArrowDown' || tecla == 's') {
    dirJogadorY = 1
  } else if (tecla == 'ArrowLeft' || tecla == 'a') {
    dirJogadorX = -1
  } else if (tecla == 'ArrowRight' || tecla == 'd') {
    dirJogadorX = 1
  } else if (tecla == ' ') {
    atira(posJogadorX + 18, posJogadorY)
  }
}

function teclaUp(event) {
  tecla = event.key
  if (
    tecla == 'ArrowUp' ||
    tecla == 'ArrowDown' ||
    tecla == 'w' ||
    tecla == 's'
  ) {
    dirJogadorY = 0
  } else if (
    tecla == 'ArrowLeft' ||
    tecla == 'ArrowRight' ||
    tecla == 'a' ||
    tecla == 'd'
  ) {
    dirJogadorX = 0
  }
}

function criaBomba() {
  if (jogo) {
    var bomba = document.createElement('div')
    var posBombaX = Math.random() * telaWidth
    var posBombaY = 0
    var atributo1 = document.createAttribute('class')
    var atributo2 = document.createAttribute('style')
    atributo1.value = 'bomba'
    atributo2.value = 'top:' + posBombaY + 'px;left:' + posBombaX + 'px'
    bomba.setAttributeNode(atributo1)
    bomba.setAttributeNode(atributo2)
    document.body.appendChild(bomba)
    contagemBombas--
  }
}

function controleBombas() {
  var bombas = document.getElementsByClassName('bomba')
  for (var i = 0; i < bombas.length; i++) {
    if (bombas[i]) {
      var posBomba = bombas[i].offsetTop
      posBomba += velBomba
      bombas[i].style.top = posBomba + 'px'
      if (posBomba > telaHeight) {
        hpPlaneta -= 1
        bombas[i].remove()
      }
    }
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
    controleBombas()
  }
  frames = requestAnimationFrame(gameLoop)
}

function inicia() {
  jogo = true
  telaWidth = window.innerWidth
  telaHeight = window.innerHeight

  dirJogadorX = dirJogadorY = 0
  posJogadorX = telaWidth / 2
  posJogadorY = telaHeight / 2
  velJogador = velTiro = 5
  jogador = document.getElementById('naveJogador')
  jogador.style.top = posJogadorY + 'px'
  jogador.style.left = posJogadorX + 'px'

  clearInterval(intervaloBomba)
  contagemBombas = 150
  velBomba = 3
  intervaloBomba = setInterval(criaBomba, 1700)

  hpPlaneta = 100

  gameLoop()
}

document.addEventListener('keydown', teclaDown)
document.addEventListener('keyup', teclaUp)
window.addEventListener('load', inicia)
