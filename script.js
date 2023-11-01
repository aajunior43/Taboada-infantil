// Função para adicionar os elementos da taboada
$(document).ready(function() {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      // Criando elemento div para cada cálculo
      const taboadaBox = $('<div></div>')
        .addClass('taboadaBox')
        .text(`${i} x ${j} = ${i * j}`);

      // Adicionando interatividade ao clicar
      taboadaBox.click(function() {
        alert(`O resultado de ${i} x ${j} é ${i * j}`);
      });

      // Adicionando o elemento ao container principal
      $('#mainContainer').append(taboadaBox);
    }
  }
});
