import React from 'react';
import SongListItem from '../SongListItem/SongListItem';
import { Song } from '../../../types';

interface ISongList {
    songs: Song[]
}

const SongList: React.FC<ISongList> = ({ songs }) => {
    const listItems = songs.map((song) => {
        const { id } = song;
        return <SongListItem key={id} { ...song } />;
    });

    return (
        <>
            <ul className="songlist">
                { listItems }
            </ul>
        </>
    );
};

export default SongList;
