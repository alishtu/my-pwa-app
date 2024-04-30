// EditItemForm.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editItem } from './actions';

const EditItemForm = ({ item, editItem }) => {
  const [newName, setNewName] = useState(item.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newName.trim()) return;
    editItem(item.id, { ...item, name: newName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default connect(null, { editItem })(EditItemForm);
