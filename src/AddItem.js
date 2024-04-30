// AddItem.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem } from './actions';

const AddItem = ({ addItem }) => {
  const [newName, setNewName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newName.trim()) return;
    addItem(newName);
    setNewName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter item name"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default connect(null, { addItem })(AddItem);
