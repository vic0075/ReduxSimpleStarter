import React, {Component} from 'react';

export default class VideoDetails extends Component {
    render() {
        if (!this.props.video) {
            return (
                <div>
                    Loading....
                </div>
            )
        }

        const videoId = this.props.video.id.videoId;
        const url = `https://youtube.com/embed/${videoId}`;

        return (
            <div className="video-detail col-md8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-tem" src={url}>
                    </iframe>
                </div>

                <div className="details">
                    <div>
                        {this.props.video.snippet.title}
                    </div>
                    <div>
                        {this.props.video.snippet.description}
                    </div>
                </div>
            </div>
        );
    }
}