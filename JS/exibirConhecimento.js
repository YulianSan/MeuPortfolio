const img_conhecimento  = Array.from( document.querySelectorAll( ".img-conhecimento > *" ) );
const codigo            = document.getElementsByClassName("codigo");
const texto_desc        = document.getElementsByClassName("texto-desc")[0];
const usuario_caminho   = document.querySelectorAll(".user , .path");
const arrayConhecimentos= 
    [
        `
        HTML é uma linguagem de marcação utilizada na construção de páginas na Web.<br />
        Tenho um pouco mais de 1 ano de experiência, tenho um conhecimento intermediario`,

        `CSS é um mecanismo para adicionar estilo a um documento web.<br /><br />
        Tenho um pouco mias de 1 ano de experiência, tenho um conhecimento intermediario para avançado`,

        `JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com
        tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três
        principais tecnologias da World Wide Web.`,

        `PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor`,
        
        `O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface`,

        `Um framework em desenvolvimento de software, é uma abstração que une códigos comuns entre vários projetos de software provendo uma funcionalidade genérica.`,

        `Git ₍ou em inglês britânico₎ é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.`
    ];

const escreverDesc = {
    temporizador: null,
    elemento: texto_desc,
    tempo: 30,
    indice: 0,
    vel: 5,
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
    vel: 1,
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

img_conhecimento.forEach( ( v, i ) =>{
    

    v.addEventListener("click", ()=>{
        escreverDesc.getTexto = () => arrayConhecimentos[i];
        escreverCodigo.getTexto = () => `node ${ v.alt }.js`,
        CriarEscrita(
            escreverCodigo
        );
    })
})