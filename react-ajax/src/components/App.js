import React, { useState, useEffect } from 'react';

//example GitHub repo data
const EXAMPLE_DATA = [
  { full_name: "(example) react", html_url: "https://github.com/facebook/react" },
  { full_name: "(example) react-bootstrap", html_url: "https://github.com/react-bootstrap/react-bootstrap" },    
  { full_name: "(example) react-router", html_url: "https://github.com/remix-run/react-router" },
];


function App(props) {
  console.log("rendering app")
  const [stateData, setStateData] = useState([]);
  //control form
  const [queryInput, setQueryInput] = useState('');

  useEffect(function() {
    console.log("doing effect");
    //what do I want to do when the component first loads
    const URL = 'data.json';

    fetch(URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      setStateData(data);
    })

  }, [])

  const handleChange = (event) => {
    setQueryInput(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    //do something with form input!

    const URL = 'https://api.github.com/search/repositories?q='+queryInput+'&sort=stars';

    console.log("about to send")
    
    fetch(URL)
      .then(function(response) {
        //what to do when promise is fulfilled / number is called
        const jsonPromise = response.json(); //convert the body stream into json
        
        //still in the "what to do function"
        return jsonPromise; //basically becomes the "updatedPromise"  
      })
      .then(function(data) {
        console.log(data);
        //have the data
        //make sure data.items exists
        setStateData(data.items);

      })
      .catch(function(error) {
        console.log(error);
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