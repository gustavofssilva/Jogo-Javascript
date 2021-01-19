const meuCanvas = document.querySelector('#meuCanvas');

const ctx = meuCanvas.getContext('2d');


const left = 37;
const up = 38;
const right = 39;
const down = 40;

const leftB = 65;
const upB = 87;
const rightB = 68;
const downB = 83;


let moverEsquerda = false;
let moverDireita = false;
let moverAcima = false;
let moverAbaixo = false;

let moverEsquerdaB = false;
let moverDireitaB = false;
let moverAcimaB = false;
let moverAbaixoB = false;



const q1 = {
    x:100,
    y:75,
    w:25,
    h:0
}
const q2 = {
    x:200,
    y:75,
    w:25,
    h:0
}








function mover(){
    if (moverEsquerda) {
        q1.x-=5;
    }
    if (moverDireita) {
        q1.x+=5;
    }
    if (moverAcima) {
        q1.y-=5;
    }
    if (moverAbaixo) {
        q1.y+=5;
    }
}


function moverB(){
    if (moverEsquerdaB) {
        q2.x-=5;
    }
    if (moverDireitaB) {
        q2.x+=5;
    }
    if (moverAcimaB) {
        q2.y-=5;
    }
    if (moverAbaixoB) {
        q2.y+=5;
    }
}




function criarElemento() {
    ctx.beginPath();
    ctx.clearRect(0,0, meuCanvas.width, meuCanvas.height);
    ctx.arc(q1.x, q1.y, q1.w, q1.h, 2 * Math.PI )
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#fff";
    ctx.stroke();
  
  
    
}

function criarElementoB() {
    ctx.beginPath();
    ctx.arc(q2.x, q2.y, q2.w, q2.h, 2 * Math.PI )
    ctx.strokeStyle = "red";
    ctx.stroke();


  }


window.addEventListener('keydown',pressionarTecla);


window.addEventListener('keyup', soltarTecla);


window.addEventListener('keydown',pressionarTeclaB);


window.addEventListener('keyup', soltarTeclaB);



function pressionarTecla(e){
    let codigo = e.keyCode;
   
    if (codigo === left && codigo!== right) {
        moverEsquerda = true;
    }
    if (codigo === right && codigo!== left) {
        moverDireita = true;
    }
    if (codigo === up && codigo!== down) {
        moverAcima = true;
    }
    if (codigo === down && codigo!== up) {
        moverAbaixo = true;
    }
  

}

function soltarTecla(e){
    let codigo = e.keyCode;
   
    if (codigo === left && codigo!== right) {
        moverEsquerda = false;
    }
    if (codigo === right && codigo!== left) {
        moverDireita = false;
    }
    if (codigo === up && codigo!== down) {
        moverAcima = false;
    }
    if (codigo === down && codigo!== up) {
        moverAbaixo = false;
    }
   
}




function pressionarTeclaB(e){
    let codigoB = e.keyCode;
   
    if (codigoB === leftB && codigoB!== rightB) {
        moverEsquerdaB = true;
    }
    if (codigoB === rightB && codigoB!== leftB) {
        moverDireitaB = true;
    }
    if (codigoB === upB && codigoB!== downB) {
        moverAcimaB = true;
    }
    if (codigoB === downB && codigoB!== upB) {
        moverAbaixoB = true;
    }
  

}

function soltarTeclaB(e){
    let codigoB = e.keyCode;
   
    if (codigoB === leftB && codigoB!== rightB) {
        moverEsquerdaB = false;
    }
    if (codigoB === rightB && codigoB!== leftB) {
        moverDireitaB = false;
    }
    if (codigoB === upB && codigoB!== downB) {
        moverAcimaB = false;
    }
    if (codigoB === downB && codigoB!== upB) {
        moverAbaixoB = false;
    }
   
}



function colidir() {
    q1.x = Math.max(29, Math.min(meuCanvas.width - q1.w, q1.x  ));
    q1.y = Math.max(29, Math.min(meuCanvas.height - q1.h, q1.y ));
}

function colidirB() {
    q2.x = Math.max(29, Math.min(meuCanvas.width - q2.w, q2.x));
    q2.y = Math.max(29, Math.min(meuCanvas.height - q2.h, q2.y ));
}



function atualizarTela() {
    requestAnimationFrame(atualizarTela, meuCanvas);
    mover();
    moverB();
    colidir();
    colidirB();
    criarElemento();
    criarElementoB()
}

atualizarTela();


