# teste_tecnico

1- Três homens: **Peter**, **Steve** e **Bruce**, são casados com: **Natasha**, **Diana** e **Gamora**, mas não sabemos quem é casado com quem. Eles são: **Engenheiro**, **Advogado** e **Médico**, mas também não sabemos quem faz o quê. Tente descobrir o nome de cada esposa e a profissão de cada um com base nas dicas abaixo:
peter é casado com natasha
steve é casado com diana 
bruce é casado com Gamora 

peter é engenheiro 
steve é advogado 
bruce é medico

2 - Você terá que realizar uma viagem internacional com duração de 20 dias e o avião parte de um
aeroporto que está localizado a mais de 100km da sua cidade. Quais são as providências que você tomaria para esta viagem?

- verificaria onde se contra a cidade quais são os costumes para eu poder me adaptar esses dias 
- com roupas se vai ser quentes , ou frias.
- me programas com a familia como como vou fizar todos os esses dias fora e deixar tudo organizado para posso fazer essa viagem tranquila 


3 - Na sua opinião, quem deve ser responsável pelos testes do sistema?
a) Apenas o Analista de Qualidade (QA).
b) O Desenvolvedor que desenvolveu o código e o QA buscando um teste mais refinado.
c) Qualquer pessoa do time de desenvolvimento.
d) Qualquer pessoa que esteja disponível na empresa e que tenha conhecimento da ferramenta para o qual o código foi desenvolvido.

responsta : d 

4 - Analise o código a seguir :
class Equation {
  constructor(a = 0, b = 0, c = 0) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  getRoots() {
    if (this.a === 0 && this.b === 0 && this.c === 0) {
      console.log("Erro! Nenhum parâmetro informado.");
    if (this.a === 0 && this.b === 0) {
       console.log("1. Parâmetros insuficientes.\\nNenhuma raiz real.");
        return [];
    } else if (this.a = 0) {
        console.log(`1. ${this.b}x + ${this.c} = 0`);
        console.log(`2. ${this.b}x = ${this.c * -1}`);
        console.log(`3. x = ${this.c * -1} / ${this.b}`);
        console.log(`4. x = ${-this.c / this.b}`);
        return [-this.c / this.b];
      }
    } else {
      const d = this.b ** 2 - 4 * this.a * this.c;
      console.log(`1. Δ = ${this.b}² - 4 * ${this.a} * ${this.c}`);
      console.log(`2. Δ = ${d}`);
      if (d < 0) {
      console.log(`3. Δ < 0.\\nNenhuma raiz real.`);
      return [];
      } else {
        console.log(`3. x' = (-(${this.b}) + √${d}) / 2 * ${this.a}`);
        console.log(`4. x" = (-(${this.b}) - √${d}) / 2 * ${this.a}`);
        console.log(`5. x' = ${this.b * -1} + √${d} / ${this.a * 2}`);
        console.log(`6. x" = ${this.b * -1} - √${d} / ${this.a * 2}`);
        const x1 = (-this.b + Math.sqrt(d)) / (2 * this.a);
        const x2 = (-this.b - Math.sqrt(d)) / (2 * this.a);
        if (Number.isInteger(Math.sqrt(d))) {
          console.log(
            `7. x' = ${this.b * -1} + ${Math.sqrt(d)} / ${this.a * 2}`
          );
          console.log(
            `8. x" = ${this.b * -1} - ${Math.sqrt(d)} / ${this.a * 2}`
          );
          console.log(`9.  x' = ${x1}`);
          console.log(`10. x" = ${x2}`);
        }
        return x1 === x2 ? [x1] : [x1, x2];
      }
    }
  }
}
Há algo que precise ser modificado? Por quê? 
não a nada para ser alterado , esta usando equação do segundo grau.
