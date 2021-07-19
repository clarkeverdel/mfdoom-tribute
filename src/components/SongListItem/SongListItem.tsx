import React, { Dispatch, SetStateAction } from "react";
import { Song } from '../../../types';

interface ISong extends Song{
    active?: number | boolean,
    setActive: Dispatch<SetStateAction<boolean | number>>,
    setMouseX: Dispatch<SetStateAction<number>>,
    setMouseY: Dispatch<SetStateAction<number>>,
    onMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void
}

const formatNumber = (id: number) => {
    return `0${id}`.slice(-2);
};

const SongListItem = ({ id, title, artist, active, setActive, setMouseX, setMouseY }: ISong) => {

  const onItemMove = (e: React.MouseEvent) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

    return (
        <li className={`songlist__item ${active ? "songlist__item--active" : ""}`} onMouseOver={ () => setActive(id) } onMouseMove={(e) => onItemMove(e)} onMouseLeave={ () => setActive(false) }>
            <span className="songlist__id">{ formatNumber(id) }</span>
            <h3 className="songlist__title">{ title }</h3>
            <span className="songlist__artist">{ artist }</span>
        </li>
    );
};

export default SongListItem;
