import { Route, Routes as MyRoutes } from 'react-router-dom';

import Home from './pages/Home';

import MentorDetail from './pages/MentorDetail';

const Routes = () => {
  return (
      <MyRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/mentor" element={<MentorDetail />} />

        <Route path='*' element={<h1>Page not found.</h1>} />
      </MyRoutes>
  )
}

export default Routes;