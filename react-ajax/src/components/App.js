import React, { useState, useEffect } from 'react';

//example GitHub repo data
const EXAMPLE_DATA = [
  { full_name: "(example) react", html_url: "https://github.com/facebook/react" },
  { full_name: "(example) react-bootstrap", html_url: "https://github.com/react-bootstrap/react-bootstrap" },    
  { full_name: "(example) react-router", html_url: "https://github.com/remix-run/react-router" },
];


function App(props) {
  const [stateData, setStateData] = useState([]);
  //control form
  console.log("state data", stateData);

  const [queryInput, setQueryInput] = useState('');

  useEffect(function() {
    console.log("running effect hook");
    //what code do you want to run only once 

    fetch('data.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      //all your work
      setStateData(data);
    })
  }, [])


  const handleChange = (event) => {
    setQueryInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    //do something with form input!

    const URL = "https://api.github.com/search/repositories?q="+queryInput+"&sort=stars";
    fetch(URL)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        //all your work
        setStateData(data.items);
      })
  }


  //render the data
  const dataElemArray = stateData.map((repo) => {
    return <li key={repo.html_url}><a href={repo.html_url}>{repo.full_name}</a></li>
  })

  console.log("rendering content");

  return (
    <div className="container">
      <header><h1>AJAX Demo</h1></header> 

      <form method="GET" action="https://api.github.com/search/repositories" onSubmit={handleSubmit}>
        <input type="text" className="form-control mb-2" 
          name="q"
          placeholder="Search Github for..."
          value={queryInput} onChange={handleChange}
        />
        <input type="hidden" name="sort" value="stars" />
        <button type="submit" className="btn btn-primary">Search!</button>
      </form>

      <div className="mt-4">
        <h2>Results</h2>
        {/* results go here */}
        {dataElemArray}
      </div>
    </div>
  )
}

export default App;