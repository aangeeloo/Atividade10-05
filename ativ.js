
function maiorData(data1, data2) {
    if (data1 > data2) {
        const maiorData = data1;
        const dia = maiorData.getDate() + 1;
        const mes = maiorData.getMonth() + 1;
        const ano = maiorData.getFullYear();

      return `Maior = (${dia}/${mes}/${ano})`;
    } else if (data2 > data1){
        const maiorData = data2;
        const dia = maiorData.getDate() + 1;
        const mes = maiorData.getMonth() + 1;
        const ano = maiorData.getFullYear();

      return `(${dia}/${mes}/${ano})`;
    } else {
        return `as datas são iguais`;
    }   
}

function calcularIntervalo(dataAntiga, dataNova) {
    if (dataAntiga > dataNova) {
        return "A primeira data deve ser mais antiga que a segunda.";
    }
    
    var intervalo = dataNova - dataAntiga;
    
    var dias = Math.floor(intervalo / (1000 * 60 * 60 * 24));
    
    return "O intervalo entre as datas é de " + dias + " dias.";
}

function dataAtualFormatada() {
    var data = new Date();
    var hora = ("0" + data.getHours()).slice(-2);
    var minuto = ("0" + data.getMinutes()).slice(-2);
    var dia = ("0" + data.getDate()).slice(-2);
    var mes = ("0" + (data.getMonth() + 1)).slice(-2);
    var ano = data.getFullYear();
    
    return hora + ":" + minuto + " - " + dia + "/" + mes + "/" + ano;
}


console.log(maiorData(data1, data2));
console.log(dataAtualFormatada()); 


function executarFuncoes() {
    var data1 = new Date(document.getElementById("data1").value);
    var data2 = new Date(document.getElementById("data2").value);
    var resultado = document.getElementById("resultado");


    if (data1 && data2) {
        resultado.innerHTML = 
                               `<p><strong>Maior Data:</strong> ${ maiorData(data1, data2)}</p><br>
                               <strong>Intervalo:</strong>  ${calcularIntervalo(data1, data2)}`
    } else {
        resultado.innerHTML = "<span style='color: red;'>Por favor, insira ambas as datas.</span>";
    }
}

function preencherDataAtual() {
    var campoHoraAtual = document.getElementById("horaAtual");
    setInterval(function() {
        var dataAtual = new Date();
        var hora = String(dataAtual.getHours()).padStart(2,"0");
        var minuto = String(dataAtual.getMinutes()).padStart(2,"0");
        var segundo = String(dataAtual.getSeconds()).padStart(2,"0");
        var dia = String(dataAtual.getDate());
        var mes = String(dataAtual.getMonth()+1);
        var ano = String(dataAtual.getFullYear());
        campoHoraAtual.textContent = hora + ":" + minuto + ":" + segundo + "  -  " + dia + "/" + mes + "/" + ano;
    }, 1000);       
}

window.onload = preencherDataAtual;