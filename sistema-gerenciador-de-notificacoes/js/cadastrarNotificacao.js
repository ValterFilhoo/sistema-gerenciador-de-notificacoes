
    document.addEventListener('DOMContentLoaded', function() {

        // Obtém o formulário de cadastro pelo ID do seu elemento.
        const formulario = document.getElementById('formCadastrar');

        // Adiciona um evento de escuta para o envio do formulário.
        formulario.addEventListener('submit', cadastrarNotificacao);

    });
    
    // Função para validar, ainda que de forma básica, o formulário de cadastro.
    function validarFormulario() {

        const titulo = document.getElementById('titulo').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();
    
        // Verifica se os campos estão vazios.
        if (titulo === '' || mensagem === '') {

        alert('Por favor, preencha todos os campos.');
        return false; 

        }
    

        salvarNotificacao(titulo, mensagem);

        alert('Notificação cadastrada com sucesso!');
        return true; // Retorna verdadeiro, sendo assim os campos estão "corretamente" preenchidos.

    }
    
    // Função para cadastrar a notificação e direcionar o usuário para a página inicial de listar as notificações cadastradas.
    function cadastrarNotificacao(evento) {

        evento.preventDefault(); // Previne o comportamento padrão de envio do formulário.
    
        // Valida o formulário e, se válido, redireciona o usuário após o cadastro.
        if (validarFormulario()) {

        setTimeout(function() {
            window.location.href = 'listarNotificacoes.html';
        }, 3000); 

        }

    }
    
    // Função para salvar a notificação cadastrada no Local Storage, porque não há um back-end.
    function salvarNotificacao(titulo, mensagem) {

        // Recupera as notificações do Local Storage ou cria um array vazio se não houver notificações
        let notificacoes = JSON.parse(localStorage.getItem('notificacoes')) || [];
    
        // Gera um novo ID baseado no maior ID existente, para evitar que tenha notificação com o mesmo id.
        let novoId = 1;
        if (notificacoes.length > 0) {

        const maxId = Math.max(...notificacoes.map(notificacao => notificacao.id));
        novoId = maxId + 1; // Incrementa em 1 o maior ID existente.

        }
    
        // Cria um novo objeto da notificação que será cadastrada.
        const novaNotificacao = {

        id: novoId,
        titulo: titulo,
        mensagem: mensagem

        };
    
        // Adiciona a nova notificação ao array.
        notificacoes.push(novaNotificacao);

        // Salva o array atualizado no Local Storage do navegador.
        localStorage.setItem('notificacoes', JSON.stringify(notificacoes));

    }
  