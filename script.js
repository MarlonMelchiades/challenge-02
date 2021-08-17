// ---- code validar campos de numeros ---- //

function somenteNumeros(num) {
  var er = /[^-,|^0-9.]/;
  er.lastIndex = 0;
  var campo = num;
  if (er.test(campo.value)) {
    campo.value = "";
  }
}

// ----- code step 11 ----- //

const botaoStep11 = document.querySelector("#botao-step11");

botaoStep11.addEventListener("click", (e) => {
  e.preventDefault();
  let valorA = document.querySelector("#valorA-step11");
  let valorB = document.querySelector("#valorB-step11");
  let valorC = document.querySelector("#valorC-step11");
  let a = parseInt(valorA.value);
  let b = parseInt(valorB.value);
  let c = parseInt(valorC.value);
  let delta = b * b - 4 * a * c;
  let textoResposta11 = document.querySelector("#text-response-step11");
  if (
    valorA.value.length == 0 ||
    valorB.value.length == 0 ||
    valorC.value.length == 0
  ) {
    textoResposta11.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    textoResposta11.innerHTML =
      '<p class="mt-3 mb-0"> O valor de delta é ' +
      delta +
      ". Espero ter ajudado!</p>";
  }
});

// ----- code step 12 ----- //

const botaoStep12 = document.querySelector("#botao-step12");

botaoStep12.addEventListener("click", (e) => {
  e.preventDefault();
  let valorPreco = document.querySelector("#preco-step12");
  let preco = parseInt(valorPreco.value);
  let calcularDesconto = (preco * 5) / 100;
  let precoDesconto = preco - calcularDesconto;
  let precoDescontoFormatada = precoDesconto.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  let textoResposta12 = document.querySelector("#text-response-step12");
  if (valorPreco.value.length == 0) {
    textoResposta12.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    textoResposta12.innerHTML =
      '<p class="mt-3 mb-0"> Com 5% de desconto, seu preço vai sair por ' +
      precoDescontoFormatada +
      ".</p>";
  }
});

// ----- code step 13 ----- //

const botaoStep13 = document.querySelector("#botao-step13");

botaoStep13.addEventListener("click", (e) => {
  e.preventDefault();
  let valorSalario = document.querySelector("#preco-step13");
  let salario = parseInt(valorSalario.value);
  let porcentagemAumento = (salario * 15) / 100;
  let salarioAtualizado = salario + porcentagemAumento;
  let salarioFormatado = salarioAtualizado.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  let textoResposta13 = document.querySelector("#text-response-step13");
  if (valorSalario.value.length == 0) {
    textoResposta13.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    textoResposta13.innerHTML =
      '<p class="mt-3 mb-0"> Com 15% de aumento, seu novo salário será de ' +
      salarioFormatado +
      ".</p>";
  }
});

// ----- code step 14 ----- //

const botaoStep14 = document.querySelector("#botao-step14");

botaoStep14.addEventListener("click", (e) => {
  e.preventDefault();
  let diaria = document.querySelector("#diaria-step14");
  let kilometros = document.querySelector("#kilometros-step14");
  let diasAlugados = parseInt(diaria.value);
  let kmRodados = parseInt(kilometros.value);
  let precoDiaria = diasAlugados * 90;
  let precoKm = kmRodados * 0.2;
  let precoTotal = precoDiaria + precoKm;
  let precoFinal = precoTotal.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  let textoResposta14 = document.querySelector("#text-response-step14");
  if (diaria.value.length == 0 || kilometros.value.length == 0) {
    textoResposta14.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    textoResposta14.innerHTML =
      '<p class="mt-3 mb-0"> O total à pagar será de: ' + precoFinal + ".</p>";
  }
});

// ----- code step 15 ----- //

const botaoStep15 = document.querySelector("#botao-step15");

botaoStep15.addEventListener("click", (e) => {
  e.preventDefault();
  let diasTrabalhados = document.querySelector("#diaria-step15");
  let dias = parseInt(diasTrabalhados.value);
  let calculoDiaHora = 8 * dias;
  let salarioTotal = calculoDiaHora * 25;
  let salarioFinal = salarioTotal.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  let textoResposta15 = document.querySelector("#text-response-step15");
  if (diasTrabalhados.value.length == 0) {
    textoResposta15.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    textoResposta15.innerHTML =
      '<p class="mt-3 mb-0"> Seu salário será de ' +
      salarioFinal +
      " em " +
      dias +
      " dias trabalhados.</p>";
  }
});

// ----- code step 16 ----- //

const botaoStep16 = document.querySelector("#botao-step16");

botaoStep16.addEventListener("click", (e) => {
  e.preventDefault();
  let cigarros = document.querySelector("#cigarros-step16");
  let anosFumados = document.querySelector("#anos-step16");
  let cigarrosPorDia = parseInt(cigarros.value);
  let anos = parseInt(anosFumados.value);
  let cigarrosPorAno = cigarrosPorDia * 365;
  let cigarrosPorTotalAnos = cigarrosPorAno * anos;
  let minutosPerdidos = 10 * cigarrosPorTotalAnos;
  let diasPerdidos = minutosPerdidos / 1440;
  let textoResposta16 = document.querySelector("#text-response-step16");
  if (cigarros.value.length == 0 || anosFumados.value.length == 0) {
    textoResposta16.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    textoResposta16.innerHTML =
      '<p class="mt-3 mb-0"> Você perderá ' +
      diasPerdidos.toFixed(1) +
      " dias da sua vida.</p>";
  }
});

// ----- code step 17 ----- //

const botaoStep17 = document.querySelector("#botao-step17");

botaoStep17.addEventListener("click", (e) => {
  e.preventDefault();
  let inputVelocidade = document.querySelector("#velocidade-step17");
  let velocidadeDoCarro = parseInt(inputVelocidade.value);
  const velocidadeDaVia = 80;
  let textoResposta17 = document.querySelector("#text-response-step17");
  if (inputVelocidade.value.length == 0) {
    textoResposta17.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    if (velocidadeDoCarro <= 80) {
      textoResposta17.innerHTML =
        '<p class="mt-3 mb-0"> Ok! Você está no limite adequado para esta via.</p>';
    }
    if (velocidadeDoCarro > 80) {
      let acrescimo = velocidadeDoCarro - velocidadeDaVia;
      let valorAcrescimo = acrescimo * 5;
      let valorMulta = velocidadeDaVia + valorAcrescimo;
      let valorMultaFormatada = valorMulta.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
      textoResposta17.innerHTML =
        '<p class="mt-3 mb-0"> Você foi MULTADO em ' +
        valorMultaFormatada +
        ".</p>";
    }
  }
});

// ----- code step 18 ----- //

const botaoStep18 = document.querySelector("#botao-step18");

botaoStep18.addEventListener("click", (e) => {
  e.preventDefault();
  let inputData = document.querySelector("#data-step18").value;
  let data = new Date(inputData);
  let anoNascimento = data.getFullYear();
  let mesNascimento = data.getMonth() + 1;
  let diaNascimento = data.getDate() + 1;
  let dataAtual = new Date();
  let anoAtual = dataAtual.getFullYear();
  let mesAtual = dataAtual.getMonth() + 1;
  let idade = anoAtual - anoNascimento;
  if (mesAtual < mesNascimento) {
    idade--;
  } else {
    if (mesAtual == mesNascimento) {
      if (new Date().getDate() < diaNascimento) {
        idade--;
      }
    }
  }
  let textoResposta18 = document.querySelector("#text-response-step18");
  if (inputData.length == 0 || inputData == "00/00/0000") {
    textoResposta18.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    if (idade < 18) {
      textoResposta18.innerHTML =
        '<p class="mt-3 mb-0"> Você ainda não pode tirar título eleitoral.</p>';
    }
    if (idade >= 18) {
      textoResposta18.innerHTML =
        '<p class="mt-3 mb-0"> Você já pode tirar seu título!</p>';
    }
  }
});

// ----- code step 19 ----- //

const botaoStep19 = document.querySelector("#botao-step19");

botaoStep19.addEventListener("click", (e) => {
  e.preventDefault();
  let nomeAluno = document.querySelector("#nome-step19").value;
  let nota1Step19 = document.querySelector("#nota1-step19").value;
  let nota2Step19 = document.querySelector("#nota2-step19").value;
  let nota1 = parseFloat(nota1Step19);
  let nota2 = parseFloat(nota2Step19);
  let media = (nota1 + nota2) / 2;
  let textoResposta19 = document.querySelector("#text-response-step19");
  if (
    nomeAluno.length == 0 ||
    nota1Step19.length == 0 ||
    nota2Step19.length == 0
  ) {
    textoResposta19.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    if (media >= 7) {
      textoResposta19.innerHTML =
        '<p class="mt-3 mb-0"> O aluno ' +
        nomeAluno.toUpperCase() +
        " foi APROVADO(A) com a média de " +
        media +
        ".</p>";
    }
    if (media < 7) {
      textoResposta19.innerHTML =
        '<p class="mt-3 mb-0"> O aluno ' +
        nomeAluno.toUpperCase() +
        " foi REPROVADO(A) com a média de " +
        media +
        ".</p>";
    }
  }
});

const botaoStep20 = document.querySelector("#botao-step20");

botaoStep20.addEventListener("click", (e) => {
  e.preventDefault();
  let inputNumero = document.querySelector("#numero-step20").value;
  let numero = parseInt(inputNumero);
  let parOuImpar = numero % 2;
  let textoResposta20 = document.querySelector("#text-response-step20");
  if (inputNumero.length == 0) {
    textoResposta20.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    if (parOuImpar == 1) {
      textoResposta20.innerHTML =
        '<p class="mt-3 mb-0"> É óbvio que o número ' +
        numero +
        " é ÍMPAR né!</p>";
      inputNumero = "";
    }
    if (parOuImpar == 0) {
      textoResposta20.innerHTML =
        '<p class="mt-3 mb-0"> É óbvio que o número ' +
        numero +
        " é PAR né!</p>";
      inputNumero = "";
    }
  }
});
