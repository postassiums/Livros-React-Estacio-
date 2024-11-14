import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LivroLista from './components/LivroLista.tsx'
import NovoLivroForm from './components/NovoLivroForm.tsx'

const router=createBrowserRouter([
  {
    path: '/',
    element: <App>


    </App>,
    children:[
      {path: '/new/livro',element: <NovoLivroForm>

      </NovoLivroForm>},
      {path: '/catalogo',element: <LivroLista></LivroLista>}
    ]
  },
  
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} >

    </RouterProvider>
  </StrictMode>,
)
