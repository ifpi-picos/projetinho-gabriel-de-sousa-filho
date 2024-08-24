let contador = 0
function gerarId(list){
    if(list.length < 1){
        return contador = 1
    }
    else{
        return contador += 1
    }
}

export function adicionarLivros(list){
    let tituloLivro = prompt("\nDigite o título do Livro: ")
    let autorLivro = prompt("\nDigite o autor do Livro: ")
    let anoLivro = parseInt(prompt("\nDigite o ano do Livro: "))
    let generoLivro = prompt("\nDigite o genero do Livro: ")
    console.log(" ")
    while(tituloLivro === null  || autorLivro === null|| isNaN(anoLivro) || generoLivro === null){
        if(tituloLivro === null){
            tituloLivro = prompt("*Campo Obrigatório* -> Digite o título do livro:")
        }
        if( autorLivro === null){
            autorLivro = prompt("*Campo Obrigatório* -> Digite o autor do livro:")
        }
        if( isNaN(anoLivro)){
            anoLivro = parseInt(prompt("*Campo Obrigatório* -> Digite o ano do livro:"))
        }
        if(generoLivro === null){
            generoLivro = prompt("*Campo Obrigatório* -> Digite o genero do livro:")
        }
    }
    list.push({Titulo: tituloLivro, Autor: autorLivro, Ano: anoLivro, Genero: generoLivro, IdLivro: gerarId(list), Disponibilidade: true})
}

export function listarLivros(list){
    console.log("Livros disponíveis:")
    console.table(list)
}


export function editarLivros(list){
    const qualLivro = parseInt(prompt("\nDigite o Id do livro que deseja editar:"))
    for(let livro of list){
        if(livro.IdLivro === qualLivro){
            let index = list.indexOf(livro)
            const novoTitulo = prompt("Digite o novo Título do Livro:")
            const novoAutor = prompt("Digite o novo Autor do Livro:")
            const novoAno = parseInt(prompt("Digite o novo Ano do Livro:"))
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
    const removLivro = parseInt(prompt("\nDigite o Id do Livro que deseja remover:"))
    for(let livrinho of list){
        if(livrinho.IdLivro === removLivro){
            const k = prompt("Tem certeza que deseja remover esse livro? Digite SIM para Sim e NAO para NÂO:")
            if(k === "S"){
                let index = list.indexOf(livrinho)
                list.splice(index, 1)
                console.log("Livro Removido!")
                
            }
            
        }
    }
}

export function emprestimo(list,listH, listUs){
    const idemp = parseInt(prompt("Digite o Id do livro que deseja reservar:"))
    
    for(let l of list){
        if(l.IdLivro === idemp && l.Disponibilidade === true){
            console.log("O livro está disponível para empréstimo!")
            let dataemp = prompt("Digite a data do empréstimo no formato xx/xx/xxxx:")
            let nomemp = prompt("Digite o seu nome de usuário:")
            let dataN = dataemp.length
            if(dataN === 10){

                let ind = list.indexOf(l)


                let y = dataemp.split("/")
                let d = parseInt(y[0])
                let m = parseInt(y[1])
                let a = parseInt(y[2]) 
                
                if(d >= 1 && d <=9){
                    d = "0" + d
                }
                
                if(m >= 9 && m < 12){
                    m = m + 1
                }
                else if(m >= 1 && m<9){
                    m = "0" + (m+1)
                }
                
                else if(m == 12){
                    a = a + 1
                    m = "0" + 1
                }
                
                let dataD = `${d}/${m}/${a}`
                list[ind].DataEmprestimo = dataemp
                list[ind].DataDevolucao = dataD
                list[ind].NomeUsuario = nomemp
                list[ind].Disponibilidade = false
                listH.push({Nome: l.Titulo, Usuario: l.NomeUsuario, DataE: l.DataEmprestimo, DataD: l.DataDevolucao})
                listUs.push({nUsuario: l.NomeUsuario, NomeLivro: l.Titulo, DataEmp: l.DataEmprestimo, DataDevolver: l.DataDevolucao})
            }
            else {
            console.log('data inválida')
            }
        }
    }
}

export function devolucao(list){
    const livroDev = parseInt(prompt("Digite o Id do livro que deseja devolver:"))
    const datDevolucao = prompt("Digite a data de devolucao do livro:")
    for(let livro of list ){
        if(livro.IdLivro === livroDev && livro.DataDevolucao == datDevolucao && livro.Disponibilidade === false){
            let indice = list.indexOf(livro)
            delete list[indice].DataEmprestimo
            delete list[indice].NomeUsuario
            delete list[indice].DataDevolucao
            list[indice].Disponibilidade = true
        }
    }
}

export function empPorLivro(listH){
    const empL = prompt("Digite o livro que deseja ver o histórico:")
    const noval = listH.filter((livroL) => livroL.Nome === empL )
    console.table(noval)
}

export function empPorUsuario(listUs){
    const empU = prompt("Digite o Usuário que deseja ver o histórico de empréstimos:")
    const listU = listUs.filter((UsuarioL) => UsuarioL.nUsuario === empU)
    console.table(listU)
}
