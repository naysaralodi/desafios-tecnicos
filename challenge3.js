const fs = require('fs');

fs.readFile('dados.json', 'utf8', (err, data) => {
    if (err) throw err;

    const dados = JSON.parse(data);
    const valores = dados.filter(d => d.valor > 0).map(d => d.valor);

    const menor = Math.min(...valores);
    const maior = Math.max(...valores);
    const media = valores.reduce((a, b) => a + b, 0) / valores.length;
    const diasAcimaMedia = valores.filter(v => v > media).length;

    console.log(`Menor faturamento: ${menor.toFixed(2)}`);
    console.log(`Maior faturamento: ${maior.toFixed(2)}`);
    console.log(`Dias acima da média: ${diasAcimaMedia}`);
});
