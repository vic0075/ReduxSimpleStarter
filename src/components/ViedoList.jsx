import React, {Component} from 'react';
import VideoListItem from "./VideoListItem";

export default class VideoList extends Component {
    render() {
        const videoItems = this.props.videos.map(video => {
            return <VideoListItem key={video.etag} video={video}/>
        });
        return (
            <div>
                <ul className="col-md4 list-group">
                    {videoItems}
                </ul>
            </div>
        )
    }
}