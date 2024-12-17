function insert(num){
    let valor = document.getElementById("resultado").innerHTML += num;
    
}

function clean(){
    document.getElementById('resultado').innerHTML = ""
}

function back(){
    // função que remove numero por numero
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        // calcula automaticamente os calculos no html
        document.getElementById('resultado').innerHTML = eval(resultado)
    }    
}