import React from 'react';

import { Header } from './Header.js';
import { CourseCardList } from './CourseList.js';

export default function App(props) {
    return (
      <div>
        <Header />
        <CourseCardList />
      </div>
    )
  }
  