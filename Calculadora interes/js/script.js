function calcular() {
    let valor, inicial, prestamo, seisporciento, sf, gps, sfaDos, traspaso, financiar, interesmensual, interestotal, capitalMasInteres, cuotas, treintadias, anios;

    valor = parseFloat(document.getElementById("valor1").value);
    inicial = parseFloat(document.getElementById("valor2").value);
    cuotas = parseFloat(document.getElementById("valor3").value);
    interes = parseFloat(document.getElementById("valor4").value);
    treintadias = parseFloat(document.getElementById("valor5").value);
    anios = parseFloat(document.getElementById("valor6").value);

    prestamo = valor - inicial - treintadias;
    seisporciento = prestamo * 0.06;
    sf = 36400;
    gps = 8500 * anios;
    sfaDos = 36400;
    traspaso = 17200;
    financiar = prestamo + seisporciento + sf + gps + sfaDos + traspaso;
    interesmensual = financiar * interes / 100 ;
    interestotal = interesmensual * cuotas;
    capitalMasInteres = financiar + interestotal;
    document.getElementById("resultado").innerHTML = "capital + interés: $" + capitalMasInteres.toFixed(2) + "<br>" + "Interés mensual: $" + interesmensual.toFixed(2) + "<br>" + "Interés total: $" + interestotal.toFixed(2) + "<br>" + "Cuotas: " + cuotas + "<br>" + "Cuotas de: $" + (capitalMasInteres / cuotas).toFixed(2);
}

function calcularInicial(input) {
    let valor, minteres, recteres;

    minteres = parseFloat(document.getElementById("valor1").value) * 0.35;
    recteres = parseFloat(document.getElementById("valor1").value) * 0.40;

    document.getElementById("inicial-result").innerHTML = "Inicial mínimo 35%: " + minteres.toFixed(2) + "<br>" + "Inicial ideal 40%: " + recteres.toFixed(2);
}

function calcularTreintaDias() {
    let valor, inicialcliente, inicial, treintadias;

    valor = parseFloat(document.getElementById("valor1").value);
    inicial = parseFloat(document.getElementById("valor2").value);
    treintadias = parseFloat(document.getElementById("valor5").value);

    inicialcliente =  100 * (inicial + treintadias) / valor / 100;

    document.getElementById("treintadias-result").innerHTML = "Inicial + 30 días: " + (inicial + treintadias).toFixed(2) + "<br>" + "Porcentaje inicial: " + inicialcliente.toFixed(2) + "%";

}