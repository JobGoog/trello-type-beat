import './styles.css';


const STORAGE_KEY = 'myTrelloData';


const initialData = {
  columns: [
    {
      id: 'todo',
      title: 'TODO',
      cards: ['test'],
    },
    {
      id: 'in-progress',
      title: 'IN PROGRESS',
      cards: ['test2'],
    },
    {
      id: 'done',
      title: 'DONE',
      cards: ['test3'],
    },
  ],
};

function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return initialData;
  }
  try {
    return JSON.parse(saved);
  } catch (e) {

    return initialData;
  }
}


function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

let state = loadData();

function renderBoard() {
  const app = document.getElementById('app');
  app.innerHTML = ''; 

  const board = document.createElement('div');
  board.classList.add('board');

  state.columns.forEach((column) => {
    const columnEl = document.createElement('div');
    columnEl.classList.add('column');
    columnEl.dataset.columnId = column.id;


    const headerEl = document.createElement('div');
    headerEl.classList.add('column-header');
    headerEl.textContent = column.title;
    columnEl.appendChild(headerEl);


    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('cards');
    column.cards.forEach((cardText, cardIndex) => {
      const cardEl = createCardElement(column.id, cardIndex, cardText);
      cardsContainer.appendChild(cardEl);
    });

    columnEl.appendChild(cardsContainer);


    const addCardContainer = document.createElement('div');
    addCardContainer.classList.add('add-card-container');
    const addCardButton = document.createElement('button');
    addCardButton.classList.add('add-card-button');
    addCardButton.textContent = '+ Add card';
    addCardContainer.appendChild(addCardButton);


    addCardButton.addEventListener('click', () => {
      showAddCardForm(addCardContainer, column.id);
    });

    columnEl.appendChild(addCardContainer);

    board.appendChild(columnEl);
  });

  app.appendChild(board);
}

function createCardElement(columnId, cardIndex, cardText) {
    const cardEl = document.createElement('div');
    cardEl.classList.add('card');
    cardEl.draggable = true;
    cardEl.textContent = cardText;
  

    const deleteIcon = document.createElement('span');
    deleteIcon.classList.add('delete-card');
    deleteIcon.textContent = '×';
    cardEl.appendChild(deleteIcon);
  
    deleteIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      removeCard(columnId, cardIndex);
    });
  
    cardEl.addEventListener('dragstart', (e) => {

      e.dataTransfer.setData('text/plain', JSON.stringify({
        fromColumn: columnId,
        fromIndex: cardIndex,
      }));
  

      const clone = cardEl.cloneNode(true);
      clone.style.position = 'absolute';
      clone.style.top = '-9999px'; 
      clone.style.left = '-9999px';
      clone.style.opacity = '0.8';
  
      document.body.appendChild(clone);
  
   
      const rect = cardEl.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
  
  
      e.dataTransfer.setDragImage(clone, offsetX, offsetY);
  
   
      document.body.style.cursor = 'grabbing';
    });
  

    cardEl.addEventListener('dragend', (e) => {
 
      document.body.style.cursor = 'default';
  
 
      const clones = document.querySelectorAll('.card[style*="-9999px"]');
      clones.forEach((c) => c.remove());
    });
  
    return cardEl;
}
  
  


function removeCard(columnId, cardIndex) {
  const column = state.columns.find((col) => col.id === columnId);
  if (!column) return;
  column.cards.splice(cardIndex, 1);
  saveData(state);
  renderBoard();
}


function showAddCardForm(container, columnId) {
  container.innerHTML = '';

  const form = document.createElement('div');
  form.classList.add('add-card-form');

  const textarea = document.createElement('textarea');
  textarea.placeholder = 'Enter a test text for this card...';
  form.appendChild(textarea);

  const addBtn = document.createElement('button');
  addBtn.textContent = 'Add Card';
  form.appendChild(addBtn);

  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  form.appendChild(cancelBtn);

  container.appendChild(form);


  addBtn.addEventListener('click', () => {
    const text = textarea.value.trim();
    if (!text) return;
    const column = state.columns.find((col) => col.id === columnId);
    if (!column) return;
    column.cards.push(text);
    saveData(state);
    renderBoard();
  });


  cancelBtn.addEventListener('click', () => {
    container.innerHTML = '';
    const addCardButton = document.createElement('button');
    addCardButton.classList.add('add-card-button');
    addCardButton.textContent = '+ Add card';
    container.appendChild(addCardButton);

    addCardButton.addEventListener('click', () => {
      showAddCardForm(container, columnId);
    });
  });
}


document.addEventListener('dragover', (e) => {
  e.preventDefault();
  const target = e.target;

});

document.addEventListener('drop', (e) => {
  e.preventDefault();
  const dropTarget = e.target;

  const dataStr = e.dataTransfer.getData('text/plain');
  if (!dataStr) return;
  let { fromColumn, fromIndex } = JSON.parse(dataStr);

  const fromCol = state.columns.find((c) => c.id === fromColumn);
  if (!fromCol) return;


  const [movedCard] = fromCol.cards.splice(fromIndex, 1);


  let columnElement = dropTarget.closest('.column');
  if (!columnElement) {

    fromCol.cards.splice(fromIndex, 0, movedCard);
    saveData(state);
    renderBoard();
    return;
  }
  const toColumnId = columnElement.dataset.columnId;
  const toCol = state.columns.find((c) => c.id === toColumnId);


  let insertIndex = toCol.cards.length;


  if (dropTarget.classList.contains('card')) {

    const cards = Array.from(columnElement.querySelectorAll('.card'));
    insertIndex = cards.indexOf(dropTarget);
  }


  toCol.cards.splice(insertIndex, 0, movedCard);

  saveData(state);
  renderBoard();
});

document.addEventListener('DOMContentLoaded', () => {
  renderBoard();
});
