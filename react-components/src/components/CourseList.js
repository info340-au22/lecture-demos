import React from 'react';

import COURSE_DATA from '../course-data.json';

function CourseCard(props) {
  //do some stuff
  console.log(props);
  const courseNumber = props.number;
  const courseTitle = props.title;

  let classList = "card col-6"
  if(props.nowTeaching) {
    classList += " bg-warning bg-gradient"
  }

  return (
    <div className={classList}>
      <img src={"img/"+props.img} alt="chrome browser logo" />
      <h3>{courseNumber}: {courseTitle}</h3>
    </div>
  )
}

export function CourseCardList(props) {

  console.log(COURSE_DATA);

  //what I have: an array of objects

  const componentArray = COURSE_DATA.map((courseObj) => {
    const element = (
      <CourseCard 
        number={courseObj.number} 
        title={courseObj.title}
        img={courseObj.img}
      />
    )
    return element; //dont forget to return!
  })


  //want: an array of elements

  // const componentArray = [
  //   <CourseCard 
  //     number={COURSE_DATA[0].number} 
  //     title={COURSE_DATA[0].title}
  //     img={COURSE_DATA[0].img}
  //     nowTeaching={true} 
  //   />,
  //   <CourseCard 
  //     number={COURSE_DATA[1].number} 
  //     title={COURSE_DATA[1].title}
  //     img={COURSE_DATA[1].img}
  //   />,
  //   <CourseCard 
  //     number={COURSE_DATA[2].number} 
  //     title={COURSE_DATA[2].title}
  //     img={COURSE_DATA[2].img}
  //   />
  // ]

  //what does this thing (the list) look like?
  return (
    <div id="class-cards" className="row">
      {componentArray}
    </div>
  )
}
