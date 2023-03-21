import {
  ContactPage,
  HomePage,
  AboutPage,
  ProjectsPage,
  ErrorPage,
} from 'pages';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import RootLayout from 'layouts/RootLayout';
import { GlobalContextProvider } from 'context/globalContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<HomePage title='Home Page' />} />
      <Route path='contact' element={<ContactPage title='Contact Page' />} />
      <Route path='about' element={<AboutPage title='About Page' />} />
      <Route path='projects' element={<ProjectsPage title='Projects Page' />} />
      <Route path='*' element={<ErrorPage title='Error Page' />} />
    </Route>,
  ),
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContextProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </GlobalContextProvider>
    </QueryClientProvider>
  );
}

export default App;
