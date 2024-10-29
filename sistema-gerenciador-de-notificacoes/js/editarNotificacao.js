// Esse evento é executado quando o js é carregado dentro da página, sendo assim todos os blocos de códigos que estão dentro dele poderão ser executados.
document.addEventListener('DOMContentLoaded', function() {
  
    // Obtém o parâmetro de ID da URL.
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    // Carrega os dados da notificação com o ID fornecido, que será editado.
    carregarNotificacao(id);
  
    // Obtém o formulário de edição da notificação.
    const formulario = document.getElementById('formEditar');

    // Evento que será ativado quando o botão de editar que é do tipo "submit" for selecionado.
    formulario.addEventListener('submit', function(evento) {

      evento.preventDefault(); // Previne o comportamento padrão de envio do formulário.
        
      // Se os campos do formulário de edição da notificação não estiverem vazios...
      if (validarFormulario()) {

        // Redireciona o usuário para a página que lista as notificações cadastradas após salvar a notificação editada.
        setTimeout(function() {
          window.location.href = 'listarNotificacoes.html';
        }, 3000);

      };

    });

  });
  
  // Função para carregar a notificação com base no ID fornecido.
  function carregarNotificacao(id) {

    const notificacoes = JSON.parse(localStorage.getItem('notificacoes')) || [];
    const notificacao = notificacoes.find(notificacao => notificacao.id == id);
  
    if (notificacao) {

      // Preenche os campos do formulário com os dados da notificação.
      document.getElementById('titulo').value = notificacao.titulo;
      document.getElementById('mensagem').value = notificacao.mensagem;

    } else {

      // Exibe um alerta se a notificação não for encontrada
      alert('Notificação não encontrada!');

    };

  };
  
  // Função que valida os dados do formulário, para verificar se estão vazios ou não.
  function validarFormulario() {

    const titulo = document.getElementById('titulo').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    // Verificando se os campos do formulário de edição da notificação estão vazios.
    if (titulo === '' || mensagem === '') {

      // Exibe um alerta se algum campo estiver vazio
      alert('Por favor, preencha todos os campos, pois são obrigatórios.');
      return false;

    }
  
    // Chama o método que salva a notificação editada no navegador, já que não há back-end.
    salvarNotificacaoEditada(id, titulo, mensagem);
    alert('Notificação editada com sucesso!');
    return true;

  }
  
  // Função para salvar a notificação editada no Local Storage do navegador.
  function salvarNotificacaoEditada(id, titulo, mensagem) {

    // Pegando todos os dados que estão armazenados no local storage do navegador, por meio da chave "notificacoes" ou se ela não existir cria um array vazio.
    let notificacoes = JSON.parse(localStorage.getItem('notificacoes')) || [];

    // Pegando a notificação especifica que será editada pelo seu id.
    let notificacao = notificacoes.find(notificacao => notificacao.id == id);
  
    if (notificacao) {

      // Atualiza os dados da notificação.
      notificacao.titulo = titulo;
      notificacao.mensagem = mensagem;

      // Salva o array atualizado no Local Storage.
      localStorage.setItem('notificacoes', JSON.stringify(notificacoes));

    } else {

      // Mostra um alerta em caso de erro.
      alert('Erro ao salvar a notificação!');

    }

  };
  