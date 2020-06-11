function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>obrigado por clicar!</b>"
    // console.log(document.getElementById("agradecimento"))
    // alert("Obrigado por clicar!!!!")
}

function redirecionar(){
    window.open("http://google.com.br")
    // window.location.href = "http://jw.org"
}

function trocar(elemento){
    // document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse"
    elemento.innerHTML = "obrigado por passar o mouse"
    // alert("Trocar texto.")
}

function voltar(elemento){
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

// function soma(n1, n2){
//     return n1 + n2;
// }

// function validaIdade(idade){
//    if (idade >= 18){
//         validar = true
//     }else{
//         validar = false
//     }
//     return validar
// }

// var idade = prompt("Qual é a sua idade?")

// console.log(validaIdade(idade))
// alert(validar)

// alert(soma(5, 10));

// var d = new Date();
// alert(d.getMonth()+1);

// for(var count = 1; count <= 5; count ++){
//     alert(count);
// };

// var count = 0;
// while (count <= 5){
//     console.log(count)
//     alert(count)
//     count++
// };

// var idade = prompt("Qual é sua idade?");
// if (idade >= 18){
//     alert("Maior de 18");
// }else{
//     alert("menor de idade");
// };

// var frutas = [{
//     nome:"maça",
//     cor: "vermelha"
// }, {
//     nome:"uva",
//     cor: "roxa"
// }, {
//     nome:"laranja",
//     cor: "laranja"
// }, {
//     nome:"limão",
//     cor: "verde"
// }]

// console.log(frutas);
// alert(frutas[1].nome + " " +frutas[1].cor);


// var fruta = {
//     nome:"maça",
//     cor: "vermelha"
// }

// console.log(fruta.nome);
// alert(fruta.cor);


// var lista = ["maça", "pera", "laranja"];
// lista.push("uva");
// lista.pop();
// console.log(lista.length);
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista.join(" | "));

// var nome = "Rodrigo";
// var n1 = 5;
// var n2 = 3;
// var frase = "Japão é o melhor time do mundo!"
// alert(nome + " tem " + idade + " anos.");
// console.log(nome);
// console(n1 * n2);
// console.log(frase.toLowerCase());
// alert(frase.replace("Japão", "Brasil"));
