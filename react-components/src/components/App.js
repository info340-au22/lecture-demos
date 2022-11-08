import React from 'react';

import { CourseCardList } from './CourseList.js';
import { Header } from './Header.js';

export default function App(props) {
  return (
    <div>
      <Header />
      <CourseCardList />
    </div>
  )
}
