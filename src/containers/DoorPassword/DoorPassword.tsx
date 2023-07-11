import React from 'react';
import Numbers from "../../components/Numbers/Numbers";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/app";
import NumberItem from "../../components/NumberItem/NumberItem";
import {passwordCheck, removeValue, setMessage, setValue} from "./doorPasswordSlice";

const DoorPassword = () => {
  const dispatch = useDispatch();
  const { value: doorPasswordValue, message } = useSelector((state: RootState) => state.doorPassword);
  const hiddenPassword = Array(doorPasswordValue.length).fill('*');

  let messageColorClass = '';

  if (message) {
    messageColorClass = message === 'Access Granted' ? 'text-success' : 'text-danger';
    setTimeout(() => {
      dispatch(setMessage(''));
    }, 3000);
  }

  return (
    <div style={{ width: 310 }} className="m-auto mt-5">
      <h1
        style={{ width: 240, height: 70 }}
        className="d-flex align-items-center justify-content-center pt-3 border border-2 border-info rounded-3"
      >
        {
          message ? <div style={{ fontSize: 26, marginBottom: 10 }} className={messageColorClass}>{message}</div>
                  : <div style={{ fontSize: 70 }}>{hiddenPassword}</div>
        }
      </h1>

      <Numbers amount={9} />

      <div className="d-flex">
        <NumberItem value={'<'} onClick={() => dispatch(removeValue())} />
        <NumberItem value={'0'} onClick={() => dispatch(setValue('0'))} />
        <NumberItem value={'E'} onClick={() => dispatch(passwordCheck())} />
      </div>
    </div>
  );
};

export default DoorPassword;