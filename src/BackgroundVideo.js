import React, {Component} from 'react';
import MainVid from './MainVid.mp4';

class BackgroundVideo extends Component {

    render () {
        return (
            <div>
          <video className="BackgroundMain" src="./MainVid.mp4" type="video/mp4" autoPlay></video>
            </div>
        )
    }
};

export default BackgroundVideo;