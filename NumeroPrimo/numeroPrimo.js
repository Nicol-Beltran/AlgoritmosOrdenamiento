function esPrimo(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i < Math.sqrt(n); i+=2) {
        if (n % i === 0 ) return false;
    }

    return true;
}


function verificar(){
    const numero= parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');
    if (isNaN(numero)) {
        resultado.innerHTML = 'Por favor ingrese un número válido';
        return; 
    }
    if(esPrimo(numero)){
        resultado.innerHTML = `${numero} Es primo.`    
    }else{
        resultado.innerHTML = `${numero} No es primo.`
    }

}
