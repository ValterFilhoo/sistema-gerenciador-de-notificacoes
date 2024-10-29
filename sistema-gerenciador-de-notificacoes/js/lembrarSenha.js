    
    const elementoFeedback = document.getElementById('feedback');
    const inputEmail = document.getElementById('email');

    function enviarEmail(event) {

        // Verificando se os dados do campo email corresponde ao requisitos do type "email".
        if (inputEmail.validity.valid) {

            // Verificando se o elemento que exibe o feedback para o usuário está oculto.
            if (elementoFeedback.style.display === 'none') {

                event.preventDefault()
                elementoFeedback.style.display = 'flex'
                elementoFeedback.style.justifyContent = 'center'
                elementoFeedback.style.marginTop = '3vh'
    
                elementoFeedback.innerHTML = 'Um email foi enviado para a sua caixa de mensagens, verifique-a, por favor.'

                // Redirecionando o usuário para a página de login após 7 segundos, que é um tempo estimado para a visualização do feedback.
                setTimeout(function() {
                    window.location.href = 'login.html'
                }, 7000)
    
            } 

        }
       

    };

    // Definindo o estado inicial do elemento de feedback para 'none', para ficar oculto inicialmente.
    document.addEventListener('DOMContentLoaded', function() {
        elementoFeedback.style.display = 'none';
    });