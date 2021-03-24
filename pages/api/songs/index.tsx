import type { NextApiRequest, NextApiResponse } from 'next'
import { songs } from '../src/data/'

type Data = {
    title: string
    artist: string
    image?: string
    audio?: string
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(songs))
}