import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props){
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  function deleteHandler() {
   setModalIsOpen(true);

  }
  function closeModalHandler(){
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler} >Remove To Do</button>
      </div>
      { modalIsOpen && <Modal /> }
      { modalIsOpen && <Backdrop onCancel={closeModalHandler} /> }
    </div>
  );
}
export default Todo;
