import React, { Component } from 'react';
import { createGIF } from 'gifshot';
import { videoBase64 } from '../helpers/video';

class HomeContainer extends Component {

  componentDidMount() {
    //const { history } = this.props;
    //history.push('/login');
  }

  handleImageChange = event => {
    const file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = (event) => {
      const content = fileReader.result;
      
      let videoHeight = 0;
      let videoWidth = 0;
      let videoLength = 0;
      let video = document.createElement('video');
      video.preload = 'metadata';
      video.onloadedmetadata = () => {
        videoHeight = video.videoHeight;
        videoWidth = video.videoWidth;
        videoLength = parseInt(video.duration) + 1;
        console.log(videoLength / 80)
        createGIF({
          video: [
            content
          ],
          gifWidth: 508,
          gifHeight: 270,
          interval: videoLength / 80,
          numFrames: 80,//videoLength * 2,
          frameDuration: 5,
          sampleInterval: 10
        }, (obj) => {
          if (!obj.error) {
            var image = obj.image,
              animatedImage = document.getElementById('animatedGIF');
            animatedImage.src = image;
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
          <input type='file' name='image' onChange={this.handleImageChange} />
        </div>
      </div>
    );
  }
}

export default HomeContainer;