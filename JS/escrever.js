function CriarEscrita( objEscrita = {}) {
    
    if(!objEscrita) return;
    

    clearInterval(objEscrita.temporizador);
    objEscrita.indice = 1;

    if(objEscrita.inicio)
        objEscrita.inicio();
        
    objEscrita.temporizador = setInterval( ()=>{ 

        

        if( /[<br\/>]{1}/.test(objEscrita.getTexto()[objEscrita.indice])) { 
            objEscrita.indice++; 
            return;
        }
        
        objEscrita.elemento.innerHTML = 
            objEscrita.getTexto().slice(0, objEscrita.indice) + (objEscrita.fixo ? objEscrita.fixo: "");
        
        objEscrita.indice++;
    
        if(objEscrita.indice > objEscrita.getTexto().length){
            clearInterval(objEscrita.temporizador);
            objEscrita.indice = 1;
    
            if(objEscrita.fim)
                objEscrita.fim()
            
        }


    }, objEscrita.tempo);
     
}