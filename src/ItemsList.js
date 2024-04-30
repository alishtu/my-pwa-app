// ItemsList.js

import React from 'react';
import { connect } from 'react-redux';
import { deleteItem, editItem } from './actions';
import AddItem from './AddItem';

const ItemsList = ({ items, deleteItem, editItem }) => {
  return (
    <div>
      <AddItem />
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
            <button onClick={() => editItem(item.id, prompt('Enter new name:', item.name))}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.items
});

export default connect(mapStateToProps, { deleteItem, editItem })(ItemsList);
