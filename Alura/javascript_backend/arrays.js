// let nota1 = 10;
// let nota2 = 6.5;
// let nota3 = 8;
// let nota4 = 7.5;

// // const notas = [10, 6.5, 8, 7.5];
// // let soma = null;
// // notas.push(7);
// // //let media = (nota1 + nota2 + nota3 + nota4) / 4;

// // //let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
// // for(i = 0; i < notas.length; i++) {
// //     soma = soma + notas[i];
// // }
// // console.log(notas);
// // media = soma / notas.length;
// // console.log(`A médias das notas é ${media}.`);
// // notas.pop();
// // console.log(notas);

//  let alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];
// // console.log("Alunos matriculados: " + alunos.length);
// // console.log(alunos);

//  let sala1 = alunos.slice(0,alunos.length/2);
//  let sala2 = alunos.slice(alunos.length/2,alunos.length);

// // console.log("Alunos na Sala 1: " + sala1.length);
// // console.log(sala1);

// // console.log("Alunos na Sala 2: " + sala2.length);
// // console.log(sala2);

// // let alunos = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];
// // console.log("Alunos matriculados: " + alunos.length);
// // console.log(alunos);

// // // console.log('Lista atualizada:');

// // // alunos.splice(1,2,'Rodrigo');
// // // console.log(alunos);

// // let salaPython = sala1;
// // let salaJavaScript = sala2;

// // let salaUnica = salaPython.concat(salaJavaScript);
// // console.log(salaUnica);
// function imprime(nome, nota, resultado) {
//     console.log(`${nome}, sua média é ${nota}. Você está ${resultado}.`);
// }
// function informaResultado(nota) {
//     if(nota >= 7) {
//         return parecer = "APROVADO";
//     } else {
//         return parecer = "REPROVADO";
//     }
// }
// let aluno = 'Caio';

// const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
// const mediaAlunos = [10, 7, 9, 6];
// let parecer;
// let encontrado;

// let listaNotasAlunos = [alunos, mediaAlunos];
    

// for(i = 0; i < alunos.length; i++) {
//     if(listaNotasAlunos[0][i] === aluno) {
//         parecer = informaResultado(listaNotasAlunos[1][i]);
//         imprime(listaNotasAlunos[0][i], listaNotasAlunos[1][i], parecer);
//         encontrado = true;
//         break;
//     } else {
//         encontrado = false;
//     }
// }
// console.log(encontrado === false ? `Aluno(a) ${aluno} não foi localizado(a).` : "");

// const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
// const mediaAlunos = [10, 7, 9, 6];

// let listaNotasAlunos = [alunos, mediaAlunos];

// const exibeNomeNota = (nomeDoAluno) => {
//     if(listaNotasAlunos[0].includes(nomeDoAluno)) {
//         indice = listaNotasAlunos[0].indexOf(nomeDoAluno);
//         return listaNotasAlunos[0][indice] + ', sua média é: ' + listaNotasAlunos[1][indice];
//     } else {
//         return "O aluno não está cadastrado.";
//     }
// }

// console.log(exibeNomeNota('Ana'));

let numeros = [100, 200, 300, 400, 500, 600];

for(let i = 0; i < numeros.length; i++) {
    console.log(i, numeros[i]);
}