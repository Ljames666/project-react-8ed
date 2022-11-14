import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import HomeConfig from '../pages/home/HomeConfig';
import LoginConfig from '../pages/login/LoginConfig';
import CadastroConfig from '../pages/cadastro/CadastroConfig';
import IntroConfig from '../pages/intro/IntroConfig';

const routes = [IntroConfig, LoginConfig, CadastroConfig, HomeConfig];

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                {[...routes].map((item, index) => (
                    <Route key={index} path={item.path} element={item.element} />
                ))}
            </Routes>
        </BrowserRouter>
    );
}
