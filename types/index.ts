export interface Song {
    id: number,
    title: string
    artist: string
    album: Album
    image: string
    audio: string
}

export interface Album {
  id?: number
  image: string
  width: number
  height: number
}
