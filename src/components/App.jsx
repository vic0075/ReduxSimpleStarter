import React, {Component} from 'react';
import SearchBar from './SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './ViedoList';
import VideoDetail from './VideoDetails';

const API_KEY = 'AIzaSyBnLeSSJs7nSZVZWB89KjC_W-y2P3wmmaE';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: "cl final 2018"}, (videos) => {
            this.setState({videos: videos, selectedVideo: videos[0]}); //eq. to this.setState({videos:videos})
        });

    }

    render() {
        return (
            <div>
                <div>
                    <SearchBar/>
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                        videos={this.state.videos}
                    />
                </div>
            </div>
        );
    }
}