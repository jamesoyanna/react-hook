import React, {useState } from 'react';
 
const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'almost home', id: 1 },
        { title: 'memory gospel', id: 2 },
        {title: 'A new day', artist: 'celine Dion', id:4},
        { title: 'this wild darkness', id: 3 }
    ])
   
    const addSong = () => {
        setSongs([...songs, {title: 'New song'}])
    }

    return ( 
      <div className="song-list">
          <ul>
        {songs.map(song =>{
            return (<li key={song.id}>{song.title}{song.artist}</li>)
        })}
          </ul>
          <button onClick={addSong}>Add song</button>
      </div>

     );
}
 
export default SongList;