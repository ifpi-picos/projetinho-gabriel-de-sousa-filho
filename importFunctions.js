import { adicionarLivros } from "./functionBiblioteca";
import { listarLivros } from "./functionBiblioteca";
import { listarLivrosEmprest } from "./functionBiblioteca";
import { editarLivros } from "./functionBiblioteca";
import { removeLivros } from "./functionBiblioteca";
import { emprestimo } from "./functionBiblioteca";
import { devolucao } from "./functionBiblioteca";
import { empPorLivro } from "./functionBiblioteca";
import { empPorUsuario } from "./functionBiblioteca";


let listaLivros = []
let histL = []
let listaUss= []



let cont = 3
while(cont == 3){
    console.log('\n-----MENU-----\n 1-Adicionar livro \n 2-Listar Livros \n 3-Listar Livros Emprestados \n 4-Editar livro \n 5-Remover Livro \n 6-Realizar empréstimo \n 7-Devolver livro \n 8-Listar emprestimos por livro \n 9-Listar empréstimos por Usuário \n 10-Encerrar')
    const menu = parseInt(prompt("Digite um número de acordo com a função: "))
    switch(menu){
        case 1:
            adicionarLivros(listaLivros)
            break;
        case 2:
            listarLivros(listaLivros)
            break;
        case 3:
            listarLivrosEmprest(listaLivros)
            break;
        case 4:
            editarLivros(listaLivros)
            break;
        case 5:
            removeLivros(listaLivros)
            break;
        case 6:
            emprestimo(listaLivros,histL,listaUss)
            break;
        case 7:
            devolucao(listaLivros)
            break;
        case 8:
            empPorLivro(histL)
            break;
        case 9:
            empPorUsuario(listaUss)
            break;
        case 10:
            cont = 12;
    }
}