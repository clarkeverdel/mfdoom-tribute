import SongListItem from '../SongListItem/SongListItem'

interface Songs {
    songs?: {
        title: string
        artist: string
        image: string
        audio: string
    }
}

const SongList = ({ songs }: Songs) => {
    
    const listItems = songs.map(song => {
        const { id } = song
        return <SongListItem key={id} { ...song } />
    })

    return (
        <> 
            <ul className="songlist">
                { listItems }
            </ul>
        </>
    )
}

export default SongList