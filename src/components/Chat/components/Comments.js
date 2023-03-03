import React from 'react';
import { isEmpty } from 'lodash';
import { useComments } from 'hooks/useComments';
import { ReactComponent as IconBalloon } from 'assets/balloon.svg';
import Header from './Header';
import Comment from './Comment';
import Input from './Input';
import styles from './Comments.module.scss';

const Comments = () => {
  const { comments } = useComments();
  const userName = 'Petras Petraitis';

  return (
    <div className={styles.comments}>
      <Header>Comments</Header>
      {isEmpty(comments) ? (
        <div className={styles.empty}>
          <IconBalloon />
          <p className={styles.title}>No comments yet</p>
          <p className={styles.subtitle}>Be the first to add a comment</p>
        </div>
      ) : (
        <div className={styles.commentList}>
          {comments?.map((comment, index) => (
            <Comment
              key={`${comment.text}${index}`}
              userName={userName}
              comment={comment}
              id={index}
            />
          ))}
        </div>
      )}
      <div className={styles.inputWrapper}>
        <Input />
      </div>
    </div>
  );
};

export default Comments;
