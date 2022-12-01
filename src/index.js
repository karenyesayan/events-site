import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import Loading from "./components/Loading"
import routes from "./routes/index"
import {store} from './redux/store'
import LanguageProvider from './contexts/LanguageProvider'

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<Loading />}>
    <LanguageProvider>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </LanguageProvider>
  </Suspense>
);
