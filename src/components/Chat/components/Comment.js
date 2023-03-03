import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useComments } from 'hooks/useComments';
import { ReactComponent as EditIcon } from 'assets/pencil.svg';
import { ReactComponent as DeleteIcon } from 'assets/trash.svg';
import { ReactComponent as UserIcon } from 'assets/userIcon.svg';
import styles from './Comment.module.scss';

const Comment = ({ userName, comment, id }) => {
  const ref = useRef(null);
  const { comments, editComment, deleteComment, canRemove } = useComments();
  const [editingComment, setEditingComment] = useState();
  const [edit, setEdit] = useState(false);

  const handleKeypress = (event, id) => {
    if (event.code === 'Enter') {
      editComment(id, event.target.value);
      setEdit(false);
    }
    if (event.code === 'Escape') {
      setEdit(false);
    }
    if (ref.current && !ref.current.contains(event.target)) {
      setEdit(false);
    }
  };

  const editHandler = (index, text) => {
    setEdit(true);
    setEditingComment({ [index]: text });
  };

  useEffect(() => {
    document.addEventListener('click', handleKeypress, true);
    return () => {
      document.removeEventListener('click', handleKeypress, true);
    };
  });

  return (
    <div className={styles.container}>
      <UserIcon className={styles.icon} />
      <div className={styles.comment}>
        <div className={styles.heading}>
          <p>{userName}</p>
          <div className={styles.actionIcons}>
            <button onClick={() => editHandler(id, comment.text)}>
              <EditIcon />
            </button>
            {canRemove && comments.length === id + 1 && (
              <button onClick={() => deleteComment(id)}>
                <DeleteIcon />
              </button>
            )}
          </div>
        </div>
        <p className={styles.date}>{comment.date}</p>
        {edit && editingComment[id] !== undefined ? (
          <input
            type="text"
            ref={ref}
            className={styles.input}
            value={editingComment[id]}
            onKeyDown={(event) => handleKeypress(event, id)}
            onChange={(event) =>
              setEditingComment({ [id]: event.target.value })
            }
          />
        ) : (
          <p className={styles.text}>{comment.text}</p>
        )}
      </div>
    </div>
  );
};

Comment.propTypes = {
  userName: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};

export default Comment;
