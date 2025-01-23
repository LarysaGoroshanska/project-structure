import React from 'react';

type AppProps = {
  children?: React.node[];
};

const App = ({ children }: AppProps ) => (
  <div>
    App
    {children}
  </div>
);

export default App;
