const quantidadeVitorias = 54;
const quantidadeDerrotas = 2;

function determinarNivel(vitorias) {
  if (vitorias <= 10) {
    return "Ferro";
  } else if (vitorias <= 20) {
    return "Bronze";
  } else if (vitorias <= 50) {
    return "Prata";
  } else if (vitorias <= 80) {
    return "Ouro";
  } else if (vitorias <= 90) {
    return "Diamante";
  } else if (vitorias <= 100) {
    return "Lendário";
  } else {
    return "Imortal";
  }
}

function calcularVitorias(vitorias, derrotas) {
  let ranking;

  if (vitorias > derrotas) {
    saldoVitorias = vitorias - derrotas;
  } else {
    saldoVitorias = 0;
  }

  return `O Herói tem de saldo de ${saldoVitorias} e está no nível de ${ranking}`;
}

function calcularVitorias(vitorias, derrotas) {
  let saldoVitorias;

  if (vitorias > derrotas) {
    saldoVitorias = vitorias - derrotas;
  } else {
    saldoVitorias = 0;
  }
  const nivel = determinarNivel(vitorias);

  return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

const resultado = calcularVitorias(quantidadeVitorias, quantidadeDerrotas);
console.log(resultado);
