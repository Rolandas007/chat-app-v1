import React, { useState } from 'react';
import { useComments } from 'hooks/useComments';
import { ReactComponent as SendIcon } from 'assets/send.svg';
import styles from './Input.module.scss';

const Input = () => {
  const { saveComment } = useComments();
  const [comment, setComment] = useState('');

  const submitHandler = () => {
    saveComment(comment);
    setComment('');
  };

  const handleKeypress = (event) => {
    if (event.code === 'Enter') {
      submitHandler();
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        placeholder="Type a comment"
        value={comment}
        onKeyPress={handleKeypress}
        onChange={(event) => setComment(event.target.value)}
      />
      <button className={styles.button} onClick={submitHandler}>
        <SendIcon />
      </button>
    </div>
  );
};

export default Input;
