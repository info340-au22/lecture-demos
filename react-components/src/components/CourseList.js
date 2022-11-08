import React from 'react';

import COURSE_DATA from '../course-data.json';

function CourseCard(props) {
  console.log(props);

  const theNumber = props.courseData.number;
  const theTitle = props.courseData.title;

  let cssClasses = "card col-6"; 
  if(props.nowTeaching) { //logic!
    cssClasses += " bg-warning bg-gradient"
  }

  return (
    <div className={cssClasses}>
      <img src={"img/"+props.courseData.img} alt="chrome browser logo" />
      <h3>{theNumber}: {theTitle}</h3>
    </div>
  )
}

export function CourseCardList(props) {

  console.log(COURSE_DATA);

  //what I have: array of objects [{}]
  const componentArray = COURSE_DATA.map((courseObj) => {
    const component = (
      <CourseCard 
        courseData={courseObj} 
        key={courseObj.number}
      />
    )
    return component;
  })


  //what I want: array of DOM [<>]

  // const componentArray = [
  //   <CourseCard courseData={COURSE_DATA[0]} />,
  //   <CourseCard courseData={COURSE_DATA[1]} />,
  //   <CourseCard courseData={COURSE_DATA[2]} />,
  //   <CourseCard courseData={COURSE_DATA[3]} />,
  // ]

  return (
    <div className="row">
      {componentArray}      
      {/* <CourseCard number="INFO 201" title="Technical Foundations" />
      <CourseCard number="INFO 448" title="Android" /> */}
    </div>
  )
}
