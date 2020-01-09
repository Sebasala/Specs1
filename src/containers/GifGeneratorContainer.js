import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { createGIF } from 'gifshot';
import {
  GIF_MAX_HEIGHT,
  GIF_FRAMES,
  GIF_FRAME_DURATION,
  GIF_SAMPLE_INTERVAL
} from '../constants/constants';
import { reziseDimensions } from '../helpers/utils';
import { setLoaderVisibility, setLoaderProgress } from '../actions';

class GifGeneratorContainer extends Component {

  componentDidMount() {
    
  }

  handleImageChange = event => {
    const { setLoaderVisibility, setLoaderProgress } = this.props;
    setLoaderVisibility(true);
    const file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = (event) => {
      const content = fileReader.result;
      let video = document.createElement('video');
      video.preload = 'metadata';
      video.onloadedmetadata = () => {
        let { height: videoHeight, width: videoWidth } = reziseDimensions(video.videoHeight, video.videoWidth, GIF_MAX_HEIGHT);
        let videoLength = parseInt(video.duration) + 1;
        createGIF({
          video: [
            content
          ],
          gifHeight: videoHeight,
          gifWidth: videoWidth,
          interval: videoLength / GIF_FRAMES,
          numFrames: GIF_FRAMES,
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
            const image = obj.image;
            let animatedImage = document.getElementById('animatedGIF');
            animatedImage.src = image;
            let gifLink = document.getElementById('gifLink');
            gifLink.href = image;
            setLoaderVisibility(false);
          }
        });
      }
      video.src = content;
    };
    fileReader.readAsDataURL(file);
  }

  render() {
    return (
      <div>
        <h1>Home Specs</h1>
        <div id='preview'>
          <img id='animatedGIF' alt='gif'/>
          <a id='gifLink' download='gif.gif'>Descargar</a>
          <input type='file' name='image' onChange={this.handleImageChange} />
        </div>
      </div>
    );
  }
}

GifGeneratorContainer.propTypes = {
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = { setLoaderVisibility, setLoaderProgress };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GifGeneratorContainer));