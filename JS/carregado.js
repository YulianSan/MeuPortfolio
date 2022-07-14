const home_nome = document.getElementsByClassName("nome")[0];
var texto = `Eu sou <br/> Yulian Santiago`;

const escreverInicio = {
    getTexto: ()=> `Eu sou <br/> Yulian Santiago`,
    temporizador: null,
    elemento: home_nome,
    tempo: 120,
    indice: 0,
    vel: 1,
    fixo: "<div class='animacao-cursor'></div>"
};

window.addEventListener("load", ()=>{

    CriarEscrita(
        escreverInicio
    );

});