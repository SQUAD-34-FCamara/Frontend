import { Route, Routes as MyRoutes } from 'react-router-dom';

import ListaMentor from './pages/ListaMentor';

import MentorDetail from './pages/MentorDetail';
import StudentMentorship from './pages/StudentMentorship';

const Routes = () => {
  return (
      <MyRoutes>
        <Route path="/" element={<ListaMentor />} />
        <Route path="/mentor" element={<MentorDetail />} />
        <Route path="/student" element={<StudentMentorship />} />

        <Route path='*' element={<h1>Page not found.</h1>} />
      </MyRoutes>
  )
}

export default Routes;