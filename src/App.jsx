import React, { useState, useEffect } from 'react'
import titalia from '../public/images/titaliya.jpg'
import nach from '../public/images/nach-meri-rani.jpg'
import care from '../public/images/care-ni-karda.jpg'
import burjkalifa from '../public/images/burjkalifa.jpg'
import Tango from '../public/images/ParovStelarGeorgiaGibbs-TangoDelFuego.jpg'
import TakeYou from '../public/images/JasonDerulo-TakeYouDancing.jpg'
import Ashnkko from '../public/images/Ashnikko-Daisy.jpg'
import DolySong from '../public/images/PatzGrimbard-DollySong.jpg'

import Titlan from '../public/music/Titliaan Warga.mp3'
import meri from '../public/music/Naach Meri Rani.mp3'
import karda from '../public/music/Care Ni Karda.mp3'
import khalifa from '../public/music/BurjKhalifa.mp3'
import Fuego from '../public/music/ParovStelarGeorgiaGibbs-TangoDelFuego.mp3'
import Dancing from '../public/music/JasonDerulo-TakeYouDancing.mp3'
import Daisy from '../public/music/Ashnikko-Daisy.mp3'
import Song from '../public/music/PatzGrimbard-DollySong.mp3'
import Player from './Components/Player'
const App = () => {

  const [songs] = useState([
    {
      title: "Titaliya",
      artist: "Hardy Sandhu",
      img_src: titalia,
      src: Titlan,
    },
    {
      title: "Nach Meri Rani",
      artist: "Yo Yo Honey Singh",
      img_src: nach,
      src: meri,
    },
    {
      title: "Care Ni Karda",
      artist: "Yo Yo Honey Singh",
      img_src: care,
      src: karda,
    },
    {
      title: "Burj Khalifa",
      artist: "Shashi",
      img_src: burjkalifa,
      src: khalifa,
    },
    {
      title: "Tango Del Fuego",
      artist: "Parov Stelar",
      img_src: Tango,
      src: Fuego,
    },
    {
      title: "Take You Dancing",
      artist: "Jason Derulo",
      img_src: TakeYou,
      src: Dancing,
    },
    {
      title: "Daisy",
      artist: "Ashnikko",
      img_src: Ashnkko,
      src: Daisy,
    },
    {
      title: "Dolly Song",
      artist: "Partz Grimbad",
      img_src: DolySong,
      src: Song,
    },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);


  return (
   <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  )
}

export default App
