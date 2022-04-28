import React, { useState, useRef, useEffect } from 'react';
import {
    BiPlayCircle,
    BiPauseCircle,
    BiSkipPreviousCircle,
    BiSkipNextCircle
} from 'react-icons/bi'

export default function Player({
    currentSong,
    currentIndex,
    nextSong,
    prevSong
}) {
    const [isPlaying, setIsplaying] = useState(false);
    const audioRef = useRef(null);
    const togglePlay = () => {
        setIsplaying(!isPlaying)
    }

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        }
        else {
            audioRef.current.pause();
        }
    }, [isPlaying, currentIndex])

    return (
        <div>
            <audio
                ref={audioRef}
                //id='audio-element'
                src={currentSong.music}
            >
            </audio>
            <div className='player-card'> 
                <h2 className='activeSong-name'>{currentSong.name}</h2>
                <h4 className='activeArtist-name'>{currentSong.creator}</h4>
                <div className='control-icon'>
                    <BiSkipPreviousCircle
                        color='white'
                        className='icons'
                        size={50}
                        onClick={prevSong}
                    />

                    {isPlaying ? (
                        <BiPauseCircle
                            color='#ff5722'
                            className='icons'
                            size={70}
                            onClick={togglePlay}
                        />
                    ) : (
                        <BiPlayCircle
                            color='#ff5722'
                            size={70}
                            className='icons'
                            onClick={togglePlay}
                        />
                    )}
                    <BiSkipNextCircle
                        color='white'
                        size={50}
                        className='icons'
                        onClick={nextSong}
                    />
                </div>
            </div>
        </div>
    )
}