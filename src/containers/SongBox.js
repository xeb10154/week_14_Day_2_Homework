import React, {Component} from 'react';
import SongList from '../components/SongList';

class SongBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      songs: {},
      currentSong: null
    };

    //TODO: bind functions here

  }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(data => this.setState({songs: data}))
  }

  render(){
    return (
      <div>
      <h3>Song Box</h3>
        <SongList
          data={this.state.songs}
          />
      </div>
    );
  }
}

export default SongBox;
