interface ISong{
    id: number
    title: string
    artist: string
    image?: string
    audio?: string
}

const formatNumber = (id: number) => {
    return `0${id}`.slice(-2);
};

const SongListItem = ({ id, title, artist}: ISong) => {
    return (
        <li className="songlist__item">
            <span className="songlist__id">{ formatNumber(id) }</span>
            <h3 className="songlist__title">{ title }</h3>
            <span className="songlist__artist">{ artist }</span>
        </li>
    );
};

export default SongListItem;
