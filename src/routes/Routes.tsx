import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../page/home/Home';
import NotFound from '../page/not-found/NotFound';

function appRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default appRoutes;
