import React, {Component} from 'react';
import VideoListItem from "./VideoListItem";

export default class VideoList extends Component {
    render() {
        const {videos, onVideoSelect} = this.props;
        console.log(onVideoSelect);
        const videoItems = videos.map(video => {
            return (
                <VideoListItem
                    onVideoSelect={onVideoSelect}
                    key={video.etag}
                    video={video}
                />
            )
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