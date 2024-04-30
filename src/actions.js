// actions.js

export const addItem = (name) => ({
    type: 'ADD_ITEM',
    payload: {
      id: Math.random().toString(36).substr(2, 9), // Генерируем случайный id
      name: name
    }
  });
  
  export const deleteItem = (id) => ({
    type: 'DELETE_ITEM',
    payload: id
  });
  
  export const editItem = (id, newName) => ({
    type: 'EDIT_ITEM',
    payload: {
      id: id,
      newName: newName
    }
  });
  