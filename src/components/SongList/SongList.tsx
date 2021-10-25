import React, { useState, SetStateAction } from 'react';
import SongListItem from '../SongListItem/SongListItem';
import { InView } from 'react-intersection-observer';
import { Song } from '../../../types';
import dynamic from 'next/dynamic';

interface ISongList {
    songs: Song[]
}

const DynamicAlbums = dynamic(() => import('../SongListAlbums/SongListAlbums'), {ssr: false});

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

    const albums = songs.map(({id, album}) => ({ ...album, id }));

    return (
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
        <div className="songlist" ref={ref}>
            <ul>
                { listItems }
            </ul>

            { inView && <DynamicAlbums albums={ albums } active={activeSong} mouseX={ mouseX } mouseY={ mouseY } /> }
        </div>
        )}
      </InView>
    );
};

export default SongList;
