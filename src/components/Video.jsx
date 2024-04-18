import React from 'react';
import YouTube from 'react-youtube';

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: '',
      startSeconds: 0,
    };
  }

  componentDidMount() {
    const { url } = this.props;
    const { videoId, startSeconds } = this.getVideoIdAndStartTime(url);
    this.setState({ videoId, startSeconds });
  }

  getVideoIdAndStartTime(url) {
    // Regular expression to extract video ID and start time from URL
    const regex = /[?&]v=([^?&]+).*[?&]t=(\d+)/;
    const match = url.match(regex);
    if (match && match[1] && match[2]) {
      const videoId = match[1];
      const startSeconds = parseInt(match[2], 10);
      return { videoId, startSeconds };
    } else {
      console.error('Invalid YouTube URL');
      return { videoId: '', startSeconds: 0 };
    }
  }

  render() {
    const { videoId, startSeconds } = this.state;

    if (!videoId) {
      return <div>Invalid YouTube URL</div>;
    }

    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        start: startSeconds,
      },
    };

    return <YouTube videoId={videoId} opts={opts} />;
  }
}

export default Video;
