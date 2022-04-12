import { Route, Routes as MyRoutes } from 'react-router-dom';

import ListaMentor from './pages/ListaMentor';

const Routes = () => {
  return (
      <MyRoutes>
        <Route path="/" element={<ListaMentor />} />

        <Route path='*' element={<h1>Page not found.</h1>} />
      </MyRoutes>
  )
}

export default Routes;