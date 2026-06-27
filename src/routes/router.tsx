import { createBrowserRouter, Navigate } from 'react-router-dom'
import { App } from '@/App'
import { HomePage } from '@/pages/HomePage'
import { ProjectDetailPage } from '@/pages/ProjectDetailPage'
import { ProjectsPage } from '@/pages/ProjectsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/pt" replace />
      },
      {
        path: 'pt',
        element: <HomePage locale="pt" />
      },
      {
        path: 'en',
        element: <HomePage locale="en" />
      },
      {
        path: 'pt/projetos',
        element: <ProjectsPage locale="pt" />
      },
      {
        path: 'en/projects',
        element: <ProjectsPage locale="en" />
      },
      {
        path: 'pt/projetos/:slug',
        element: <ProjectDetailPage locale="pt" />
      },
      {
        path: 'en/projects/:slug',
        element: <ProjectDetailPage locale="en" />
      },
      {
        path: '*',
        element: <Navigate to="/pt" replace />
      }
    ]
  }
])
