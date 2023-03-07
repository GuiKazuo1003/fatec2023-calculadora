function somar(){//não é obrigado a declarar variaveis

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    resp = num1 + num2;

    document.getElementById("resp").value = resp;
}
function subtrair(){//não é obrigado a declarar variaveis

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    resp = num1 - num2;

    document.getElementById("resp").value = resp;
}
function dividir(){//não é obrigado a declarar variaveis

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    resp = num1 / num2;

    document.getElementById("resp").value = resp;
}
function multiplicar(){//não é obrigado a declarar variaveis

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    resp = num1 * num2;

    document.getElementById("resp").value = resp;
}
function porcentagem(){//não é obrigado a declarar variaveis

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    document.getElementById("resp").value = resp;


        this.value = `${parseFloat(this.value / resp) * 100}`;

}
function limpar(){//não é obrigado a declarar variaveis

    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
    document.getElementById("resp").value = '';
}