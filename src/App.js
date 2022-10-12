import logo from './logo.png';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import QuizAll from './components/QuizAll/QuizAll';
import Statistic from './components/Statistic/Statistic';
import Blog from './components/Blog/Blog';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/quizzes/:quizzesId',
          loader: async ({ params }) => {
            //console.log(params.quizzesId);
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizzesId}`)
          },
          element: <QuizAll></QuizAll>
        },
        {
          path: '/statistic',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistic></Statistic>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }

      ]
    },
    {
      path: '*',
      element: <div>404 Not Found</div>
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
