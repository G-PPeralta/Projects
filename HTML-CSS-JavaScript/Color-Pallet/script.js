window.onload = function () {
  function setPalletListener() {
    let palletItems = document.getElementsByClassName('color');
    let currentColor = palletItems[0];
    let secondColor = palletItems[1];
    let thirdColor = palletItems[2];
    let fourthColor = palletItems[3];

    currentColor.style.background = 'black';
    secondColor.style.background = 'red';
    thirdColor.style.background = 'blue';
    fourthColor.style.background = 'green';

    for (let i = 0; i < palletItems.length; i += 1) {
      let item = palletItems[i];

      item.addEventListener('click', function () {
        // 1. Remover class selected da atual cor
        currentColor.className = currentColor.className.replace(
          ' selected',
          ''
        );
        // ideia do className.replace: https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript

        // 2. Adicionar class selected na cor clicada
        item.className += ' selected';

        //Obs: usei o += para adicionar a classe selected sem remover as anteriores

        // 3. A cor clicada é o novo currentSelectedItem
        currentColor = item;
      });
    }
  }

  function createBoard() {
    let rows = document.getElementsByClassName('pixel-row');

    for (let i = 0; i < rows.length; i += 1) {
      populateRow(rows[i]);
    }
  }

  function populateRow(row) {
    for (let i = 0; i < 5; i += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';

      pixel.addEventListener('click', function () {
        let selectedColorItem = document.querySelector('.selected');

        pixel.style.background = selectedColorItem.style.background;
      });

      row.appendChild(pixel);
    }
  }

  setPalletListener();
  createBoard();

  let button = document.getElementById('clear-board');
  button.innerText = 'Clean';

  button.addEventListener('click', clearBoard);

  function clearBoard() {
    let pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      let pixelList = pixels[i];
      pixelList.style.background = 'white';
    }
  }

  clearBoard();
};
