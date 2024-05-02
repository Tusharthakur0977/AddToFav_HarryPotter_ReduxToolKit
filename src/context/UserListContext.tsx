import React, {useState} from 'react';

// Define the type for your context state
type UserListType = {
  id: string;
  name: string;
  gender: string;
  image: string;
  house: string;
};

type UserListContextType = {
  userList: UserListType;
  setUserList: (userList: UserListType) => void;
};

// Create the context with a default undefined value
export const UserListContext = React.createContext<
  UserListContextType | undefined
>(undefined);

type UserListProviderProps = {
  children: React.ReactNode;
};

// Define the provider component
export const UserListProvider: React.FC<UserListProviderProps> = ({
  children,
}) => {
  const [userList, setUserList] = useState<UserListType>({
    id: '',
    name: '',
    gender: '',
    image: '',
    house: '',
  });

  return (
    <UserListContext.Provider value={{userList, setUserList}}>
      {children}
    </UserListContext.Provider>
  );
};
