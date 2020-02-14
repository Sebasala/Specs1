import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
//import { withRouter } from 'react-router-dom';
import { createGIF } from 'gifshot';
import {
  GIF_MAX_WIDTH,
  GIF_FRAMES,
  GIF_FRAME_DURATION,
  GIF_SAMPLE_INTERVAL
} from '../constants/constants';
import { reziseDimensions } from '../helpers/utils';
import { setLoaderVisibility, setLoaderProgress, setGifData } from '../actions';
import { getGifData } from '../selectors/gif';
import GifSidebarComponent from '../components/gif/GifSidebarComponent';
import GifVideoComponent from '../components/gif/GifVideoComponent';
import GifHomeComponent from '../components/gif/GifHomeComponent';

class GifGeneratorContainer extends Component {

  componentDidMount() {
    const { setGifData } = this.props;
    setGifData(undefined);
  }

  handleVideoChange = event => {
    const { setLoaderVisibility, setLoaderProgress, setGifData } = this.props;
    setLoaderVisibility(true);
    const file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = (event) => {
      const content = fileReader.result;
      let video = document.createElement('video');
      video.preload = 'metadata';
      video.style.display = "none";
      video.onloadedmetadata = () => {
        let { width: videoWidth, height: videoHeight } = reziseDimensions(video.videoWidth, video.videoHeight, GIF_MAX_WIDTH);
        let videoLength = parseInt(video.duration) + 1;

        setTimeout(() => {
          document.body.removeChild(video);
        }, 1000);
        createGIF({
          video: [
            content
          ],
          gifWidth: videoWidth,
          gifHeight: videoHeight,
          interval: 1,
          numFrames: videoLength,
          frameDuration: GIF_FRAME_DURATION,
          sampleInterval: GIF_SAMPLE_INTERVAL,
          progressCallback: (captureProgress) => {
            setLoaderProgress((captureProgress * 100).toFixed(1));
          },
          completeCallback: () => {
            setLoaderProgress(undefined);
          },
        }, (obj) => {
          if (!obj.error) {
            const gif = obj.image;
            let videoGif = document.querySelector('video');
            document.body.removeChild(videoGif);
            setGifData(gif);
            setLoaderVisibility(false);
          }
        });
      }
      video.src = content;
      document.body.appendChild(video);
    };
    fileReader.readAsDataURL(file);
  }

  handleGifDownload = event => {
    const animatedImage = document.getElementById('animatedGIF');
    const a = document.createElement('a');
    a.href = animatedImage.src;
    a.download = `gif.gif`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
    }, 1000);
  }

  handleBack = () => {
    this.props.history.goBack();
  }

  handleVideoClick = () => {
    this.props.history.push('/gif/video');
  }

  handleImagesClick = () => {
    this.props.history.push('/gif/images');
  }

  render() {
    const { gifData } = this.props;
    return (
      <div className='crear'>
        {/*<GifGeneratorComponent gifData={gifData} onVideoChange={this.handleVideoChange}
          onGifDownload={this.handleGifDownload} onBack={this.handleBack}
          onVideoClick={this.handleVideoClick} onImagesClick={this.handleImagesClick}
        />*/}
        <Switch>
          <Route exact path={'/gif/video'} render={() => <GifVideoComponent onVideoChange={this.handleVideoChange} onBack={this.handleBack} />} />
          <Route exact path={'/gif'} render={() => <GifHomeComponent onBack={this.handleBack} onVideoClick={this.handleVideoClick} onImagesClick={this.handleImagesClick} />} />
        </Switch>

        <GifSidebarComponent gifData={gifData} onGifDownload={this.handleGifDownload} />
      </div>
    );
  }
}

GifGeneratorContainer.propTypes = {
};

const mapStateToProps = state => ({
  gifData: getGifData(state)
});

const mapDispatchToProps = { setLoaderVisibility, setLoaderProgress, setGifData };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GifGeneratorContainer));