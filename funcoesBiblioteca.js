export function adicionarLivros(list){
    const tituloLivro = prompt("Digite o título do Livro: ")
    const autorLivro = prompt("Digite o autor do Livro: ")
    const anoLivro = parseInt(prompt("Digite o ano do Livro: "))
    const generoLivro = prompt("Digite o genero do Livro: ")

    const id = Math.floor(Math.random() * Math.pow(10, 13))
    let idNovo = id.toString().padStart(13, '0');
    
    list.push({Titulo: tituloLivro, Autor: autorLivro, Ano: anoLivro, Genero: generoLivro, IdLivro: idNovo})
    console.log(list)
}

export function listarLivros(list,listaemp){
    console.log("Livros disponíveis:")
    console.table(list)
    console.log(" Livros Emprestados")
    console.table(listaemp)
}




export function editarLivros(list){
    const qualLivro = prompt("Digite o nome do livro que deseja editar:")
    for(let livro of list){
        if(livro.Titulo === qualLivro){
            let index = list.indexOf(livro)
            const novoTitulo = prompt("Digite o novo Título do Livro:")
            const novoAutor = prompt("Digite o novo Autor do Livro:")
            const novoAno = prompt("Digite o novo Ano do Livro:")
            const novoGenero = prompt("Digite o novo Gênero do Livro:")
            list[index].Titulo = novoTitulo
            list[index].Autor = novoAutor
            list[index].Ano = novoAno
            list[index].Genero = novoGenero
            console.table(list)
        }
    }
}

export function removeLivros(list){
    const removLivro = prompt("Digite o Título do Livro que deseja remover:")
    for(let livrinho of list){
        if(livrinho.Titulo === removLivro){
            const k = prompt("Tem certeza que deseja remover esse livro? Digite S para Sim e N para NÂO:")
            if(k === "S"){
                let index = list.indexOf(livrinho)
                list.splice(index, 1)
                 console.log(list)
            }
            
        }
    }
}

export function emprestimo(list,listaemp){
    const tituloemp = prompt("Digite o titulo do livro que deseja reservar:")
    const dataemp = prompt("Digite a data do empréstimo no formato xx/xx/xxxx:")
    const nomemp = prompt("Digite o seu nome de usuário:")
    for(let l of list){
        if(l.Titulo === tituloemp){
            console.log("O livro está disponível para empréstimo!")
            listaemp.push(l)
            let ind = list.indexOf(l)
            list.splice(ind,1)
            let index = listaemp.indexOf(l)
            listaemp[index].DataEmprestimo = dataemp
            listaemp[index].NomeUsuario = nomemp

        }
    }
}

export function devolucao(listaemp){
    const livroDev = prompt("Digite o Título do livro que deseja devolver:")
    for(let livro of listaemp ){
        if(livro.Titulo === livroDev){
            let indice = listaemp.indexOf(livro)
            console.log(indice)
          //  delete listaemp[index].DataEmprestimo
           // delete listaemp[index].NomeUsuario
            
        }
    }
}



/*for(let l of list){
    if(l.IdLivro === idemp){
        console.log("O livro está disponível para empréstimo!")
        listaemp.push(l)
        listH.push({IdlivroEmprestado : idemp, DataDoEmprestimo : dataemp, NomeUsuario : nomemp})
        let ind = list.indexOf(l)
        list.splice(ind,1)
        let inde = listaemp.indexOf(l)
        listaemp[inde].DataEmprest = dataemp
    }
}
}*/
