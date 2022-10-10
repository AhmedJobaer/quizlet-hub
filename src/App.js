import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Topic from './components/Topic/Topic';
import QuizAll from './components/QuizAll/QuizAll';


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
          path: '/topic',
          //loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topic></Topic>
        },
        {
          path: '/quizzes/:quizzesId',
          loader: async ({ params }) => {
            //console.log(params.quizzesId);
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizzesId}`)
          },
          element: <QuizAll></QuizAll>
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
