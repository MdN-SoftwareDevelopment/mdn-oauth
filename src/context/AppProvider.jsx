import { useContext, useState } from 'react';
import { getApplication } from '../api/common_auth.api';
import { AppContext } from './AppContext';

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('UseApp must be used within a AppContextProvider');
  }
  return context;
};

export const AppContextProvider = ({ children }) => {
  const [app, setApp] = useState({});

  const loadApp = async id => {
    const tmpApp = await getApplication(id);
    tmpApp.data = { ...tmpApp.data, idApp: id };
    setApp(tmpApp.data);
  };

  return (
    <AppContext.Provider
      value={{
        app,
        loadApp
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
