// Main Imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
// CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
// Pages Imports
import Item_Page from './pages/Item_page';
import List_Page from './pages/List_page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <List_Page /> }
      //{ path: 'submission', element: <SubmitPage /> }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
