// Main Imports
import { StrictMode, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
// CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
// Pages Imports
import Item_Page from './pages/Item_page';
import { List_Page, type ListHandle } from './pages/List_page';

function Root() {
  const listRef = useRef<ListHandle | null>(null);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App set_searchTerm={(Term) => listRef.current?.setSearch(Term)} />,
      children: [
        { index: true, element: <List_Page ref={listRef} /> },
        { path: 'content/:id', element: <Item_Page /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
