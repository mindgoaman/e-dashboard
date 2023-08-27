import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { 
      SignUpContainer,
      LoginContainer,
      ProductsPageContainer
      } from '../webpages/index';
import {Header, Footer} from '../components/index';

const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route
                     path='/'
                     element={<ProductsPageContainer />}
                />
                <Route
                     path='/signup'
                     element={<SignUpContainer/>}
                />
                <Route
                     path='/login'
                     element={<LoginContainer/>}
                />
                <Route
                     path='/addproducts'
                     element={<h1>Add Products</h1>}
                />
                <Route
                     path='/updateproducts'
                     element={<h1>Update Products</h1>}
                />
                <Route
                     path='/logout'
                     element={<h1>Logout</h1>}
                />
                <Route
                     path='/profile'
                     element={<h1>Profile</h1>}
                />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );

}

export default Router;