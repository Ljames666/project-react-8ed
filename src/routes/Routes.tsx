import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import HomeConfig from '../pages/home/HomeConfig';
import LoginConfig from '../pages/login/LoginConfig';
import CadastroConfig from '../pages/cadastro/CadastroConfig';
import Intro from '../pages/login/components/intro/Intro';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path={LoginConfig.path} element={LoginConfig.element} />
                <Route path={HomeConfig.path} element={HomeConfig.element} />
                <Route path={CadastroConfig.path} element={CadastroConfig.element} />
            </Routes>
        </BrowserRouter>
    );
}
