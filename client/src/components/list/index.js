import React from 'react';


// This file exports both the List and ListItem components

// eslint-disable-next-line react/prop-types
export function List({children}) {
  return (
    <div className="list-overflow-container">
      <ol className="list-group">{children}</ol>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
export function ListItem({children}) {
  return <li className="list-group-item">{children}</li>;
}
