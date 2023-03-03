import { useContext } from 'react';
import { CommentsContext } from 'context/CommentsContext';

export function useComments() {
  return useContext(CommentsContext);
}
