const celulas = document.querySelectorAll('.celula');celulas

let vezDoX = true;
let jogando = false;

function iniciarJogo(){
    console.log('iniciarJogo');
    vezDoX = true;
    jogando = true;
    document.getElementById('resultado').innerHTML = '';
    celulas.forEach(celula => {
            celula.textContent = "";
            celula.addEventListener("click", tratarClick, {once:true});
        }
    );
}

function tratarClick(evento){
    if (jogando){
        console.log('clicou');
        evento.target.textContent = vezDoX ? "X" : "O";
        vezDoX = !vezDoX;
        testarVitoria();
    }    
}

function testarVitoria(){
    if (!testarVitoriaXO('X')){
        if (!testarVitoriaXO('O')){
            testaEmpate();
        }
    }
    
}

function testarVitoriaXO(jogador){
    // 0    1   2
    // 3    4   5
    // 6    7   8

    
    let num=0;
    let cel = [false,false,false,false,false,false,false,false,false];

    celulas.forEach(celula => {
            cel[num] = (celula.textContent==jogador);
            num++;
        }
    );

    //condicao vitoria
    // 0 1 2 / 3 4 5 / 6 7 9
    // 0 3 6 / 1 4 7 / 2 5 8
    // 0 4 8 / 2 4 6
    let vitoria = ( 
                (cel[0]&&cel[1]&&cel[2])||
                (cel[3]&&cel[4]&&cel[5])||
                (cel[6]&&cel[7]&&cel[8])||

                (cel[0]&&cel[3]&&cel[6])||
                (cel[1]&&cel[4]&&cel[7])||
                (cel[2]&&cel[5]&&cel[8])||

                (cel[0]&&cel[4]&&cel[8])||
                (cel[2]&&cel[4]&&cel[6])
                );

    if (vitoria){
        exibeResultado('Vitória do '+jogador);
    }
    return vitoria;
}

function testaEmpate(){
    let qtd_marcados = 0;
    celulas.forEach(celula => {
        if (celula.textContent!=''){
            qtd_marcados++;
        }
    });
    if (qtd_marcados==9){
        exibeResultado('Foi um empate!');        
    }
}

function exibeResultado(msg){
    jogando = false;
    console.log(msg);
    document.getElementById('resultado').innerHTML = msg;
}


document.getElementById('botaoReiniciar').addEventListener("click",iniciarJogo)
iniciarJogo();