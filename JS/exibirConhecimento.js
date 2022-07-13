const img_conhecimento  = Array.from( document.querySelectorAll( ".img-conhecimento > *" ) );
const codigo            = document.getElementsByClassName("codigo");
const texto_desc        = document.getElementsByClassName("texto-desc")[0];
const usuario_caminho   = document.querySelectorAll(".user , .path");

const escreverDesc = {
    getTexto: () => `A amizade consegue ser tão complexa...<br />
        Deixa uns desanimados, outros bem felizes...<br />
        É a alimentação dos fracos<br />
        É o reino dos fortes<br />
        Faz-nos cometer erros<br />
        Os fracos deixam se ir abaixo<br />
        Os fortes erguem sempre a cabeça<br />
        os assim assim assumem-os<br /><br />

        Sem pensar conquistamos<br />
        O mundo geral<br />
        e construímos o nosso pequeno lugar<br />
        deixando brilhar cada estrelinha<br /><br />

        Estrelinhas...<br />
        Doces, sensíveis, frias, ternurentas...<br />
        Mas sempre presentes em qualquer parte<br />
        Os donos da amizade...<br />`,
    temporizador: null,
    elemento: texto_desc,
    tempo: 10,
    indice: 0,
    fim: ()=>{
        usuario_caminho[2].innerHTML = "you@Your-name:";
        usuario_caminho[3].innerHTML = "~/Conhecimentos";
        codigo[1].innerHTML          = "$ cls<div class='cursor_pisca'></div>";
    }
}

const escreverCodigo = {
    temporizador: null,
    elemento: codigo[0],
    tempo: 120,
    indice: 0,
    inicio: ()=>{
        texto_desc.innerHTML         = "";
        usuario_caminho[2].innerHTML = "";
        usuario_caminho[3].innerHTML = "";
        codigo[1].innerHTML          = "";
        clearInterval(escreverDesc.temporizador);

    },
    fim: ()=>{
        CriarEscrita(
            escreverDesc
        );
    }
};

// var temporizadorCodigo;

img_conhecimento.forEach( ( v ) =>{
    

    v.addEventListener("click", ()=>{
        escreverCodigo.getTexto = () => `node ${ v.alt }.js`,
        CriarEscrita(
            escreverCodigo
        );
    })
})