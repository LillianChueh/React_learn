import React,{ useState, useEffect} from 'react';
import SearchBar from './searchBar';
// import youtube from '../apis/youtube';
import VideoList from './videoList';
import VideoDetail from './videoDetail';
import useVideos from '../hooks/useVideos';

const App = () =>{
    
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('apple')

    useEffect(() => {
        setSelectedVideo(videos[0]);
    },[videos]);

    return (
      <div className="ui container">
        <SearchBar onFormSubmit={search} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={videos}
                onVideoSelect={(video) => selectedVideo(video)}
              />
            </div>
          </div>
        </div>
      </div>
    );

};



export default App;