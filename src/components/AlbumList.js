import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

//import 'isomorphic-fetch';
//import axios from 'axios';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    //axios.get('http://rallycoding.herokuapp.com/api/music_albums')
    //.then(response => console.log(response));
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
   .then(response => response.json())
   .then(data => this.setState({ albums: data }));
    //  console.log(responseData);
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
