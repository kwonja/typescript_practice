import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Main from './pages/home/Main';
import { SignUp } from './pages/siginup';
import ErrorPage from './pages/home/ErrorPage';
import { SignIn } from './pages/siginin';
import { Todo } from './pages/todo';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement :<ErrorPage/>,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "todo",
        element: <Todo />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
