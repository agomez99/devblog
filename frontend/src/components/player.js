import React from "react";
import Playlist from 'react-mp3-player';


export default function Player() {

    const tracks = [{ img: 'https://icon-library.net/images/music-icon-transparent/music-icon-transparent-11.jpg', name: 'MP3', desc: 'Description 1', src: 'https://firebasestorage.googleapis.com/v0/b/audiodb-3d94a.appspot.com/o/Nujabes%20-%20Hikari%20(Instrumental).mp3?alt=media&token=eee39bc5-8978-4177-8557-2f7f3670594c' },
    { img: 'https://icon-library.net/images/music-icon-transparent/music-icon-transparent-11.jpg', name: 'MP3 #2', desc: 'Description 2', src: 'Audio2.mp3' }]

    const playlistOverideStylingOpts = {
        offset: {
            left: 300
        },
        breakpoint: {
            maxWidth: 768
        }
    };
    return (
        <div >
            <Playlist tracks={tracks} opts={playlistOverideStylingOpts} />

        </div>
    );

}