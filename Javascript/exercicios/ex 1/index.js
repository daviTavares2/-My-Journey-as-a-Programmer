function main() {
    var A, B, C, soma;

    A = Number(prompt("Digite o valor de A"));
    B = Number(prompt("Digite o valor de B"));
    C = Number(prompt("Digite o valor de C"));

    soma = A + B;

    if (soma < C) {
        alert("A soma de A + B é menor que C");
    } else {
        alert("A soma de A + B é maior ou igual a C");
    }
}
