import React from 'react';
import SongDetail from './SongDetail'

const SongList = ({data}) => {


  const songs = data.feed
  console.log(songs)
//   ((song, index) => {
//   return(
//     <p>{song}</p>
//   )
// })

  return (
    <div>
    <h2>song List</h2>

    </div>
  )
}

export default SongList;
