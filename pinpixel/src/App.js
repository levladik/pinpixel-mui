import * as React from 'react';
import Editor from './components/Editor';
import { ThemeProvider } from '@emotion/react';
import theme from './themes/theme';

function App() {
  return (
	  <ThemeProvider theme={theme} className="App">
		<Editor />
    </ThemeProvider>
  );
}

export default App;
