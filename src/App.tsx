import React from 'react';
import DefaultLayout from './config/layouts/DefaultLayout';
import MyCard from './pages/home/components/card/MyCard';
import Home from './pages/home/Home';

import MyRoutes from './routes/Routes';

function App() {
  const Layout = DefaultLayout;

  return (
    <div>
      <Layout>
        <MyRoutes />
      </Layout>
    </div>
  );
}

export default App;
