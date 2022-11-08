import React from 'react';

export function Header(props) {
    //just a function
    const schoolName = "iSchool";
  
    //what the HTML looks like
    return (
      <header className="text-light py-3">
        <div className="container">
          <h1>Joel Ross</h1>
          <p>{schoolName}</p>
          <p>
            <a className="btn btn-success d-none d-md-inline d-lg-none" href="http://getbootstrap.com/">Built with Bootstrap</a>
          </p>
        </div>
      </header>
    )
  }
  