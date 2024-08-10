import { adicionarLivros } from "./funcoesBiblioteca";
import { listarLivros } from "./funcoesBiblioteca";
import { editarLivros } from "./funcoesBiblioteca";
import { removeLivros } from "./funcoesBiblioteca";
import { emprestimo } from "./funcoesBiblioteca";
import { devolucao } from "./funcoesBiblioteca";

let listaLivros = []
let listaLivrosEmp = []

let cont = 3
while(cont == 3){
    console.log('-----MENU----- \n 1- Adicionar livro \n 2- Listar Livros \n 3- Editar livro \n 4- Remover Livro \n 5-Realizar empréstimo \n 6- para devolver livro')
    const menu = parseInt(prompt("Digite um número de acordo com a função: "))
    switch(menu){
        case 1:
            adicionarLivros(listaLivros)
            break;
        case 2:
            listarLivros(listaLivros,listaLivrosEmp)
            break;
        case 3:
            editarLivros(listaLivros)
            break;
        case 4:
            removeLivros(listaLivros)
            break;
        case 5:
            emprestimo(listaLivros, listaLivrosEmp)
            break;
        case 6:
            devolucao(listaLivros,listaLivrosEmp)
    }
}