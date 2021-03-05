let listaCompras = [];
let listaProdutos = [];

const addCliente = () => {
    const nomeCli = document.getElementById("nomeCli").value;
    const compra = document.getElementById("compra").value;

    if(!nomeCli || !compra){
        alert("Preencha os campos corretamamente");
    }
    else{
        listaCompras.push({nome: nomeCli, compra: compra, itens: listaProdutos});
        console.log(listaCompras);
        criaTbClientes(nomeCli, compra, listaProdutos);
        cancelar();
    }
    
}

const adicionarP = () =>{
    const nomeP = document.getElementById("nomeP").value;
    listaProdutos.push(nomeP);
    criaTbProdutos(nomeP);
    document.getElementById("nomeP").value = '';
}

const criaTbProdutos = (nomeP) =>{
    const tbProdutos = document.getElementById("tbProdutos");
    tbProdutos.innerHTML += '<tr>'+
    '<td>'+nomeP+'</td>'    
    +'</tr>';
}

const criaTbClientes = (nomeCli, compra, listaProdutos) =>{
    const tbClientes = document.getElementById("tbClientes");
    tbClientes.innerHTML += '<tr>'+
                                '<td>'+nomeCli+'</td>'+   
                                '<td>'+compra+'</td>'+
                                '<td>'+listaProdutos+'</td>'
                            +'</tr>';
}

const cancelar = () =>{
    document.getElementById("nomeCli").value = '';
        document.getElementById("compra").value = '';
        listaProdutos = [];
        document.getElementById("tbProdutos").innerHTML = '';
}

const limparTodos = () =>{
    document.getElementById("tbClientes").innerHTML = '';
}