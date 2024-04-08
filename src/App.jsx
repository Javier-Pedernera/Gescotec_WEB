import './App.scss';
import { ParallaxProvider } from 'react-scroll-parallax';
import Layout from './Pages/Layout';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/root';
import { ThemeProvider } from './contexts/ThemeContext';
// import { ThemeProvider } from './contexts/ThemeContext';

const App = () => {
  return (
    <ParallaxProvider>
      <ThemeProvider>
      <RouterProvider router={router}>
        <div className="app">

          <Layout />
          {/* <Footer/> */}
        </div>
      </RouterProvider>
      </ThemeProvider>
    </ParallaxProvider>
  );
}

export default App;