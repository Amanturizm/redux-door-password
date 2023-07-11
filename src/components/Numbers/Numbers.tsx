import React from 'react';
import NumberItem from "../NumberItem/NumberItem";
import {setValue} from "../../containers/DoorPassword/doorPasswordSlice";
import {useDispatch} from "react-redux";

interface Props {
  amount: number;
}

const Numbers: React.FC<Props> = ({ amount }) => {
  const dispatch = useDispatch();

  const numbers: React.ReactNode[] = [];

  for (let i = 1; i <= amount; i++) {
    numbers.push(
      <NumberItem
        key={`passwordItems-${i}`}
        value={i + ''}
        onClick={() => dispatch(setValue(i + ''))}
      />
    );
  }

  return (
    <div className="d-flex flex-wrap w-100">
      { numbers }
    </div>
  );
};

export default Numbers;