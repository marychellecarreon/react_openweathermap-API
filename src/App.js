import React from 'react';
import './App.css';
import xhr from 'xhr';

class App extends React.Component {
  fetchData = (evt) => {
    evt.preventDefault();
    console.log('fetch data!');
  };

  render() {
    return (
      <div>
        <h1>Weather</h1>
        <form onSubmit={this.fetchData}>
          <label>I want to know the weather for 
              <input placeholder={"City, Country"} type="text" />
          </label>
        </form>
      </div>
    );
  }
}
 
export default App;