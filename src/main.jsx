import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import BookDetails from './Components/BookDetails/BookDetails';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PageToRead from './Components/PageToRead/PageToRead';
import Review from './Components/Review/Review';
import Ratings from './Components/Ratings/Ratings';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json")
      },
      {
        path: "/booklisted",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("/data.json")
      },
      {
        path: "/pagetoread",
        loader: () => fetch("/data.json"),
        element: <PageToRead></PageToRead>
      },
      {
        path: "/book/:id",
        loader: () => fetch("/data.json"),
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/review",
        element: <Review></Review>
      },
      {
        path: "/rating",
        element: <Ratings></Ratings>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
