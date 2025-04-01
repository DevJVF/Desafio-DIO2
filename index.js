const readline = require('readline');

// Criando interface para ler entradas do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularRanking(vitorias, derrotas) {
    // Calculando o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;

    // Definindo o nível com base nas vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Exibindo a mensagem final
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Função para ler as entradas
rl.question('Digite a quantidade de vitórias: ', (vitorias) => {
    rl.question('Digite a quantidade de derrotas: ', (derrotas) => {
        // Convertendo as entradas para inteiros
        const resultado = calcularRanking(parseInt(vitorias), parseInt(derrotas));
        console.log(resultado);
        
        // Fechando a interface readline
        rl.close();
    });
});
