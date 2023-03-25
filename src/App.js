import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/help/Faq'
import Contact, { contactAction } from './pages/help/Contact'
import NotFound from './pages/NotFound'
import Careers, { careersLoader } from './pages/careers/Careers'     //so we import 2 things from the file
import CareerDetails, { careerDetailsLoader } from "./pages/careers/CareerDetails"
import CareersError from './pages/careers/CareersError'

// layouts
import RootLayout from './layouts/RootLayout' //nav links adds active classes to to element in case we want to style by saying a.active 
import HelpLayout from './layouts/HelpLayout'
import CareersLayout from './layouts/CareersLayout'


const router = createBrowserRouter(   // this (router) is what we return to the RouterProvider  
  createRoutesFromElements(          //inside this component is where our routes will live
    <Route path="/" element={<RootLayout />}>  {/*main container is here to every other thing inside here will be rendered */}
      <Route index element={<Home />} />       {/*instead of setting the path to / we can just say index */}
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact/>} action={contactAction} />
      </Route>
      <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />}>
        <Route 
          index 
          element={<Careers />} 
          loader={careersLoader}   //loaders help to loading info before a page is displayed, hence we don't need useEffect we just have to make a function outside the component
          // errorElement={<CareersError />}   // basically saying that if we throw an error, we should display this component
        />
        <Route 
          path=":id"                    //for params
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App

