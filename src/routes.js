import { Route, Routes as MyRoutes } from 'react-router-dom';

import Home from './pages/Home';
import Test from './pages/Test';

const Routes = () => {
  return (
      <MyRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />

        <Route path='*' element={<h1>Page not found.</h1>} />
      </MyRoutes>
  )
}

export default Routes;