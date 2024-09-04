let mostradorDigital = document.querySelector('.digital');
let ponteiroSegundo = document.querySelector('.p_s');
let ponteiroMinuto = document.querySelector('.p_m');
let ponteiroHora = document.querySelector('.p_h');

function atualizarHora(){
    let horarioAtual = new Date();
    let milisegundoAtual = horarioAtual.getMilliseconds();
    let segundoAtual = horarioAtual.getSeconds();
    let minutoAtual = horarioAtual.getMinutes();
    let horaAtual = horarioAtual.getHours();

    mostradorDigital.innerHTML = `${adicionarZero(horaAtual)}:${adicionarZero(minutoAtual)}:${adicionarZero(segundoAtual)}`;

    let segundosEmGraus = (6 * segundoAtual) + (milisegundoAtual * (6 / 1000)) - 90;
    let minutosEmGraus = (6 * minutoAtual) - 90;
    let horasEmGraus = (30 * horaAtual) - 90;
    ponteiroSegundo.style.transform = `rotate(${segundosEmGraus}deg)`;
    ponteiroMinuto.style.transform = `rotate(${minutosEmGraus}deg)`;
    ponteiroHora.style.transform = `rotate(${horasEmGraus}deg)`;
}

function adicionarZero(tempo){
    if(tempo < 10){
        return `0${tempo}`;
    } else {
        return tempo;
    }
}

setInterval(atualizarHora, 10);
atualizarHora();