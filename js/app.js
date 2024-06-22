let ptotal=0;
function adicionar(){
    let produto=document.getElementById('produto').value;
    let quantidade=document.getElementById('quantidade').value;
    if(quantidade<0){
        alert('Não pode quantidade negativa.');
        return;
    }
    if(quantidade%1!=0){
        alert('Somente quantidade inteiras.');
        return;
    }
    let total=document.getElementById('valor-total');
    let nome=produto.split('-')[0];
    let preco=(produto.split('-')[1]).split('R$')[1];
    let lista=document.querySelector('.carrinho__produtos__produto');
    ptotal=ptotal+quantidade*preco; //1*
    lista.innerHTML+=`<span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">R$${preco}</span> <br>`;
    total.innerHTML=`RS${ptotal}`
}
function limpar(){
    document.querySelector('.carrinho__produtos__produto').innerHTML='';
    document.getElementById('valor-total').innerHTML='';
}

/*
1* -> Por que não colocar a variável 'ptotal' dentro da função?
      Como eu quero atualizar constantemente essa variável, ou seja, não quero
      que ela zere toda vez que eu apertar o botão 'adicionar', declaro a variável
      como global, não como local, assim, o valor obtido no botão é armazenado no código inteiro :)
      Muito obrigado pela atenção!!!
*/