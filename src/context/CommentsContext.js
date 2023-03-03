import React, { createContext, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

export const CommentsContext = createContext();

const CommentsProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [canRemove, setCanRemove] = useState(false);
  const date = format(new Date(), 'yyyy-MM-dd HH:mm');

  const saveComment = (text) => {
    setComments((prevComments) => [...prevComments, { date, text }]);
    setCanRemove(true);
  };

  const editComment = (id, text) => {
    setComments((prevComments) =>
      prevComments.map((item, index) => (index === id ? { date, text } : item)),
    );
  };

  const deleteComment = (id) => {
    setComments((prevComments) =>
      prevComments.filter((item, index) => index !== id && item),
    );
    setCanRemove(false);
  };

  useEffect(() => {
    if (comments.length) {
      localStorage.setItem('comments', JSON.stringify(comments));
    }
  }, [comments]);

  useEffect(() => {
    if (!isEmpty(JSON.parse(localStorage.getItem('comments')))) {
      setComments(JSON.parse(localStorage.getItem('comments')));
    }
  }, []);

  return (
    <CommentsContext.Provider
      value={{ comments, saveComment, editComment, deleteComment, canRemove }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

CommentsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CommentsProvider;
