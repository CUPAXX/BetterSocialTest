import {createContext, ReactNode, useContext, useMemo, useState} from 'react';

const dummyComment = [
  {
    name: 'cupaxx hd',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus',
  },
  {
    name: 'Ucup 2123',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus',
  },
];

interface CommentContextProvider {
  dataComment: [];
  setDataComment: (s: any | undefined) => void;
}

export const CommentContext = createContext<CommentContextProvider | undefined>(
  undefined,
);

export const useCommentContext = () => {
  const context = useContext(CommentContext);
  if (context === undefined) {
    throw new Error('must be used within a provider');
  }
  return context;
};

const CommentContextProvider = ({children}: {children: ReactNode}) => {
  const [dataComment, setDataComment] = useState<any | undefined>(dummyComment);

  const value = {
    dataComment,
    setDataComment,
  };

  return (
    <CommentContext.Provider value={value}>{children}</CommentContext.Provider>
  );
};

export default CommentContextProvider;
