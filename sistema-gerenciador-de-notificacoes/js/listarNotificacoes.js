    document.addEventListener('DOMContentLoaded', function() {

        carregarNotificacoes();
    });
  
    function carregarNotificacoes() {
        
        // Recupera as notificações do Local Storage
        const notificacoes = JSON.parse(localStorage.getItem('notificacoes')) || [];
    
        const lista = document.getElementById('listaNotificacoes');
        lista.innerHTML = '';
    
        // Itera sobre as notificações e cria as linhas na tabela, conforme a quantidade de notificações cadastradas.
        notificacoes.forEach(notificacao => {

        const tr = document.createElement('tr');
    
        const tdId = document.createElement('td');
        tdId.textContent = notificacao.id;
        tr.appendChild(tdId);
    
        const tdTitulo = document.createElement('td');
        tdTitulo.textContent = notificacao.titulo;
        tr.appendChild(tdTitulo);
    
        const tdMensagem = document.createElement('td');

        tdMensagem.textContent = notificacao.mensagem;
        tr.appendChild(tdMensagem);
    
        const tdAcoes = document.createElement('td');
        tdAcoes.className = 'containerAcoes'
        const btnEditar = document.createElement('a');

        btnEditar.href = `editarNotificacao.html?id=${notificacao.id}`;
        btnEditar.className = 'btn btn-warning botaoEditar';
        btnEditar.textContent = 'Editar';
        tdAcoes.appendChild(btnEditar);
    
        const btnDeletar = document.createElement('button');
        btnDeletar.className = 'btn btn-danger ms-2 botaoDeletar';
        btnDeletar.textContent = 'Deletar';
        
        //Quando clicar no botão de deletar, irá excluir a notificação.
        btnDeletar.onclick = function() {

            deletarNotificacao(notificacao.id);

        };

        tdAcoes.appendChild(btnDeletar);
    
        tr.appendChild(tdAcoes);
        lista.appendChild(tr);

        });

    }
    
    function deletarNotificacao(id) {

        // Recupera as notificações que estão salvas no Local Storage.
        let notificacoes = JSON.parse(localStorage.getItem('notificacoes')) || [];
    
        // Filtra para remover a notificação com o ID fornecido.
        notificacoes = notificacoes.filter(notificacao => notificacao.id !== id);
    
        // Atualiza o Local Storage, removendo a notificação selecionada.
        localStorage.setItem('notificacoes', JSON.stringify(notificacoes));
    
        localStorage.removeItem('notificacoes')

        // Recarrega a lista de notificações cadastradas e que estão salvas no local storage do navegador.
        carregarNotificacoes();

    }
  