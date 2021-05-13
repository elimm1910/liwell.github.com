import React, {useState, useEffect} from 'react';
import { Provider } from 'react-redux';
// import { HashRouter as Router, Route } from 'react-router-dom';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import store from './store';
import './App.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MotionLayoutProvider } from "react-motion-layout";

// import { auth, createUserProfileDocument } from './components/Auth/Firebase/firebaseUtil';

//Componentes
import Navegacion from './components/componentesGLB/Navegacion';
import Home from './components/Home/Home';
import Detail from './components/Home/page2/Detail';
import Tema from './components/Home/page3/Tema';
import ScrollToTop from './components/ScrollToTop';
import TiendaOnline from './components/TiendaOnline/TiendaOnline';
import PageProduct from './components/TiendaOnline/page2/PageProduct';
import PageCart from './components/TiendaOnline/pageCart/pageCart';
import CursoOnline from './components/CursoOnline/CursoOnline';
import Detalles from './components/CursoOnline/Detalles/Detalles';

function App() {

  // const [User, setUser] = useState(null);
  // var unsubscribeFromAuth = null;
  // useEffect(() => {
  //   unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);

  //       userRef.onSnapshot(snapShot => {
  //         setUser({
  //           id: snapShot.id,
  //           ...snapShot.data()
  //         })
  //       });
  //     }
  //     setUser(userAuth);
  //   })
  //   return () => {
  //     unsubscribeFromAuth()
  //   }
  // }, [])


  return (
    <Provider store={store}>
      <div className='todo'>
        <Router>
          <Navegacion/>
          <ScrollToTop>
          <Route
            render={({ location }) => (
              <AnimatePresence 
              initial={false} 
              exitBeforeEnter>
              <MotionLayoutProvider>
              <Switch location={location} key={location.pathname}>
                  <Route
                    exact
                    path='/'
                    component={Home}
                  />
                  <Route
                    exact
                    path='/tienda/cart'
                    component={PageCart}
                  />
                  <Route
                    exact
                    path='/:photoId'
                    component={Detail}
                  />
                  <Route
                    exact
                    path='/:photoId/:temaId'
                    component={Tema}
                  />
                  <Route
                    exact
                    path='/:photoId/:temaId/tienda'
                    component={TiendaOnline}
                  />
                  <Route
                    exact
                    path='/:photoId/:temaId/cursoOnline'
                    component={CursoOnline}
                  />
                  <Route
                    exact
                    path='/:photoId/:temaId/tienda/detalles/:collectionId'
                    component={PageProduct}
                  />
                  <Route
                    exact
                    path='/:photoId/:temaId/cursoOnline/:cursoId/detalles'
                    component={Detalles}
                  />
                </Switch>
              </MotionLayoutProvider>
              </AnimatePresence>
            )}
          />
          </ScrollToTop>
        </Router>
      </div>
    </Provider>
  );
}

export default App;


