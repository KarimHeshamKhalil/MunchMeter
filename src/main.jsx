import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage.jsx';
import Root from './Root.jsx';
import RecipesPage from './components/RecipesPage.jsx';
import Nutrients from './components/Nutrients.jsx';
import ContactUs from './components/ContactUs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "/home/calories",
    element: <App />,
  },
  {
    path: "/home/recipes",
    element: <RecipesPage />,
  },
  {
    path: "/home/micronutrients",
    element: <Nutrients />,
  },
  {
    path: "/home/contactus",
    element: <ContactUs />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
