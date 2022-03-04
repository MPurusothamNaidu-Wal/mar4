import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 17.4534,
      lng: 78.3703
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '80vh', width: '80%' , margin : 'auto' }}>
        <GoogleMapReact
          bootstrapURLKeys={{key: "AIzaSyBQYSA9oJAQv7HOVTFnmqxPP_8ZM7hGZMI"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={17.4534}
            lng={78.3703}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;