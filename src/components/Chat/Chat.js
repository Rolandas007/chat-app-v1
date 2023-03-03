import React, { useState } from 'react';
import classnames from 'classnames';
import { useComments } from 'hooks/useComments';
import { OVERVIEW, COMMENTS } from 'constants/constants';
import IconWidthBadge from 'components/IconWidthBadge/IconWidthBadge';
import Overview from './components/Overview';
import Comments from './components/Comments';
import { ReactComponent as IconDoc } from 'assets/doc.svg';
import { ReactComponent as IconComment } from 'assets/comment.svg';
import styles from './Chat.module.scss';

const buttons = [
  { title: 'Overview', icon: <IconDoc />, tab: OVERVIEW },
  { title: 'Comments', icon: <IconComment />, tab: COMMENTS },
];

const Chat = () => {
  const [active, setActive] = useState(OVERVIEW);
  const { comments } = useComments();

  return (
    <div className={styles.container}>
      <div className={styles.chat}>
        {
          {
            [OVERVIEW]: <Overview />,
            [COMMENTS]: <Comments />,
          }[active]
        }
      </div>
      <div className={styles.tabs}>
        {buttons.map((item) => (
          <div
            key={item.tab}
            onClick={() => setActive(item.tab)}
            className={classnames(
              styles.category,
              active === item.tab && styles.active,
            )}
          >
            <IconWidthBadge
              count={item.tab === COMMENTS ? comments.length : 0}
              icon={item.icon}
            />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
