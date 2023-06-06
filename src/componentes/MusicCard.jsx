import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';

import audioFile1 from '../assets/BadGuy.mp3';
import audioFile2 from '../assets/LostCause.mp3';
import audioFile3 from '../assets/Bellyache.mp3';
import audioFile4 from '../assets/TV.mp3';



export default function MediaControlCard({children}) {
    const theme = useTheme();
    const audioRef = React.useRef(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [playlist, setPlaylist] = React.useState([
        { title: 'Bad Guy', artist: 'Billie Eilish', audio: audioFile1, image: './src/assets/portada1.jpeg' },
        { title: 'Lost Cause', artist: 'Billie Eilish', audio: audioFile2, image: './src/assets/portada2.jpeg' },
        { title: 'Bellyache', artist: 'Billie Eilish', audio: audioFile3, image: './src/assets/portada3.jpeg' },
        { title: 'TV', artist: 'Billie Eilish', audio: audioFile4, image: './src/assets/portada4.jpeg' },
    ]);

    const handlePlayPause = () => {
        const newIsPlaying = !isPlaying;
        setIsPlaying(newIsPlaying);

        if (newIsPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    };

    const handlePrevious = () => {
        const previousIndex = (currentIndex - 1 + playlist.length) % playlist.length;
        setCurrentIndex(previousIndex);
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % playlist.length;
        setCurrentIndex(nextIndex);
    };

    React.useEffect(() => {
        // Actualizar la fuente de audio cuando cambie el índice de reproducción
        audioRef.current.src = playlist[currentIndex].audio;
        if (isPlaying) {
            audioRef.current.play();
        }
    }, [currentIndex]);

    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {playlist[currentIndex].title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {playlist[currentIndex].artist}
                        {children}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="previous" onClick={handlePrevious}>
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause" onClick={handlePlayPause}>
                        {isPlaying ? (
                            <PauseIcon sx={{ height: 38, width: 38 }} />
                        ) : (
                            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        )}
                    </IconButton>
                    <IconButton aria-label="next" onClick={handleNext}>
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </Box>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={playlist[currentIndex].image}
                alt="album cover"
            />
            <audio ref={audioRef} src={playlist[currentIndex].audio}></audio>
        </Card>
    );
}
``
