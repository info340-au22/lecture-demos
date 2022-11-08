import React from 'react';

export function Header(props){
    const school = "University of Washington iSchool";
  
    //can do for loops, if statements, call other functions
  
    //what does a Header look like?
    return (
      <header className="text-light py-3">
        <div className="container">
          <h1>Joel Ross</h1>
          <p>{school}</p>
          <p>
            <a className="btn btn-success d-none d-md-inline d-lg-none" href="http://getbootstrap.com/">Built with Bootstrap</a>
          </p>
        </div>
      </header>
    )
  }
  