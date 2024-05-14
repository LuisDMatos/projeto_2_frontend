const form = document.getElementById('form-atividade');
const telefone = [];

let linhas = '';
form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
});

function adicionarLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputTelefoneAtividade = document.getElementById('telefone-atividade');

    if(telefone.includes(inputTelefoneAtividade.value)) {
        alert(`O telefone: ${inputTelefoneAtividade.value} já foi adicionado`);
    } else {
        telefone.push(inputTelefoneAtividade.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}`;
        linha += `<td>${inputTelefoneAtividade.value}`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputTelefoneAtividade.value = '';
};

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};
