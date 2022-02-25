// import axios from 'axios';
import React from 'react';
import SearchBar from './SearchBar';

// unsplash 取代原本的axios
import unsplah from '../api/unsplah';
import ImageList from './imageList.js';

class App extends React.Component {
    state = { images: [] };
    // 使用API修正簡化
    onSearchSubmit = async (term) => {
        const response = await unsplah.get('/search/photos', {
                params:{ query: term },

            });
        // console.log(response.data.results);
        
        this.setState({
            images: response.data.results
        })
    };


    // 使用箭頭函式才能找到this
    // onSearchSubmit = async (term) => {
    //     const response = await axios
    //         .get("https://api.unsplash.com/search/photos", {
    //             params:{ query: term },
    //             headers: {
    //             Authorization:
    //             "Client-ID 9TRepZmy5ylbq9CuAS_DpbmrHjS9KMt5y98gGeEloY4",
    //             },
    //         });
    //     // console.log(response.data.results);
        
    //     this.setState({
    //         images: response.data.results
    //     })
    // };

    // 第二種 使用async 會找不到this
    // async onSearchSubmit(term){
    //     const response = await axios
    //         .get("https://api.unsplash.com/search/photos", {
    //             params:{ query: term },
    //             headers: {
    //             Authorization:
    //             "Client-ID 9TRepZmy5ylbq9CuAS_DpbmrHjS9KMt5y98gGeEloY4",
    //             },
    //         });
    //     // console.log(response.data.results);
        
    //     this.setState({
    //         images: response.data.results
    //     })
    // };

    // 第一種用法
    // onSearchSubmit(term){
    //     axios.get("https://api.unsplash.com/search/photos", {
    //         params:{ query: term },
    //         headers: {
    //         Authorization:
    //           "Client-ID 9TRepZmy5ylbq9CuAS_DpbmrHjS9KMt5y98gGeEloY4",
    //       },
    //     }).then((response) => {
    //         console.log(response);
    //     })
    // };


    render(){
        return(
        <div className='ui container' style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            Found: { this.state.images.length } images
            <ImageList images={this.state.images}/>
        </div>
        )
    };
};

export default App;

