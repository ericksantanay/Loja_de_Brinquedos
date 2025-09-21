    // Função para o menu Mobile
        function ClickMenu(){
            if (mobile_menu.style.display == 'block'){
                mobile_menu.style.display = 'none'
            }else{
                mobile_menu.style.display = 'block'
            }
        }
            // Função Para tema escuro
        function temaEscuro(){
                document.body.style.color = 'white'
                document.body.style.background = '#121212'
        }
            // Função para o tema Claro
        function claro(){
            document.body.style.color = 'black'
            document.body.style.background = '#e4e4e452'
        } 
               
        
        // Contador adicionar 
        var contador = 0
         var r = document.getElementById('cont')

        function adicionar(){
            contador++;
            r.innerText = (`${contador}` )
        }

         // Contador remover
        function remover(){
            contador--;
            r.innerText = (`${contador}`)
        }