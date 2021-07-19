import React, { useState, SetStateAction } from 'react';
import SongListItem from '../SongListItem/SongListItem';
import SongListAlbums from '../SongListAlbums/SongListAlbums';
import { Song } from '../../../types';

interface ISongList {
    songs: Song[]
}

const SongList: React.FC<ISongList> = ({ songs }) => {
    const [activeSong, setActiveSong] = useState<SetStateAction<boolean | number>>(false);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    const listItems = songs.map((song) => {
        const { id } = song;
        return <SongListItem
                  key={id} { ...song }
                  active={activeSong === id}
                  setActive={ setActiveSong }
                  onMouseLeave={() => setActiveSong(false)}
                  setMouseX={ setMouseX }
                  setMouseY={ setMouseY }
                />;
    });

    const images = songs.map(song => ({ image: song.image, id: song.id }) );

    return (
        <div className="songlist">
            <ul>
                { listItems }
            </ul>
            <SongListAlbums albums={ images } active={activeSong} mouseX={ mouseX } mouseY={ mouseY } />
        </div>
    );
};

export default SongList;
