import React from 'react';
import AppNavigator from '@navigation/index';
import {ThemeContext, Theme} from '@styles/theme';

const App = () => {
  const [theme, setTheme]: any = React.useState(Theme.light);
  return (
    <ThemeContext.Provider value={theme}>
      <AppNavigator />
    </ThemeContext.Provider>
  );
};

export default App;
