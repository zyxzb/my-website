import { ContactPage, HomePage, AboutPage, ProjectsPage } from 'pages';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import RootLayout from 'layouts/RootLayout';
import { GlobalContextProvider } from 'context/globalContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<HomePage title='Home Page' />} />
      <Route path='contact' element={<ContactPage title='Contact Page' />} />
      <Route path='about' element={<AboutPage title='About Page' />} />
      <Route path='projects' element={<ProjectsPage title='Projects Page' />} />
    </Route>,
  ),
);

function App() {
  return (
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  );
}

export default App;
