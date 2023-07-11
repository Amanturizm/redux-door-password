import React from 'react';

interface Props {
  value: string;
  onClick: React.MouseEventHandler;
}

const NumberItem: React.FC<Props> = ({ value, onClick }) => (
  <button
    style={{ minWidth: 80, minHeight: 80, cursor: 'pointer' }}
    className="d-flex justify-content-center align-items-center fs-1 border border-2 border-info rounded-3"
    onClick={onClick}
  >
    {value}
  </button>
);

export default NumberItem;