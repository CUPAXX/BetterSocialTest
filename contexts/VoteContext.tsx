import {createContext, ReactNode, useContext, useMemo, useState} from 'react';

interface VoteContextProvider {
  totalVote: number;
  setTotalVote: (s: number | undefined) => void;
}

export const VoteContext = createContext<VoteContextProvider | undefined>(
  undefined,
);

export const useVoteContext = () => {
  const context = useContext(VoteContext);
  if (context === undefined) {
    throw new Error('must be used within a provider');
  }
  return context;
};

const VoteContextProvider = ({children}: {children: ReactNode}) => {
  const [totalVote, setTotalVote] = useState<any | undefined>(12);

  const value = {
    totalVote,
    setTotalVote,
  };

  //   const contextValue = useMemo(() => ({totalVote, setTotalVote}), [totalVote]);

  return <VoteContext.Provider value={value}>{children}</VoteContext.Provider>;
};

export default VoteContextProvider;
