import axios from 'axios';
import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term){
<<<<<<< HEAD
        // console.log(term);
        axios.get('https://api.unsplash.com/search/photos',{

=======
        axios.get("https://api.unsplash.com/search/photos", {
            params:{ query: term },
            headers: {
            Authorization:
              "Client-ID 9TRepZmy5ylbq9CuAS_DpbmrHjS9KMt5y98gGeEloY4",
          },
>>>>>>> ed6f791178b4b52935d8a478232efe36539067f0
        });
    };

    render(){
        return(
        <div className='ui container' style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
        </div>
        )
    };
};

export default App;

