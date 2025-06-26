
let estoque = 7;

 function comprar(){
     for ( let contador = 0; contador < 3; contador++ ){
    
         const nome_cliente = document.getElementById( "nome" ).value;
         console.log ( nome_cliente );

         const nome_produto = document.getElementById( "produto" ).value;
         console.log ( nome_produto );

         const quantidade_vendida = document.getElementById( "quantidade" ).value;
         console.log ( quantidade_vendida );

         if (quantidade_vendida > estoque){
             alert( "acabou o estoque" );
            
         } else {
            alert( "sua compra foi efetuada com sucesso!" );
             estoque = estoque - quantidade_vendida;

        }

        

     }
      console.log(contador)
 }


