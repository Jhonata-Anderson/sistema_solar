function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor digitado no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      // Verifica se o campo de pesquisa está vazio
      if (!campoPesquisa) {
        // Se o campo estiver vazio, exibe uma mensagem informando que é necessário digitar algo
        section.innerHTML = '<p class="mensagem-nada">Digite algo no campo de pesquisa!</p>';
        // Interrompe a função para evitar processar outros dados
        return;
      }
  
      // Verifica se o termo de pesquisa está presente no título, classe ou descrição do dado
      if (dado.titulo.includes(campoPesquisa) || dado.classe.includes(campoPesquisa.toLowerCase()) || dado.descricao.includes(campoPesquisa)) {
        // Se o termo foi encontrado, adiciona o resultado à string de resultados
        resultados += `
          <div class="resultados-pesquisa-imagem">
            <img src="./img/${dado.imagem}" alt="">
            <div class="item-resultado ${dado.classe}">
              <div>
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
              </div>
            </div>
          </div>
        `;
      }
    }
  
    // Verifica se algum resultado foi encontrado
    if (!resultados) {
      // Se nenhum resultado foi encontrado, exibe uma mensagem informando que não há resultados
      resultados = '<p class="mensagem-nada">Nada foi encontrado</p>';
    }
  
    // Atualiza o conteúdo da seção de resultados com os resultados encontrados
    section.innerHTML = resultados;
}
