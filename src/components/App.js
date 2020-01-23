import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 5fd3bc0b804427caaac4b69f200c8df907453877a82180abb9775249dc4ed1fc'
      }
    });
  }

  render () {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit} /></div>);
  }
}

export default App;
