import React from 'react'
import style from '../../styles/components/Footer.module.css'
import { BsSpotify } from 'react-icons/bs'
import { useTheme } from './context/ThemeContext'
import { useFetch } from '../../libs/UseFetch'
import useSWR from "swr";
const colors = [
  /* white */ '255, 255, 255',
  /* red */ '229, 57, 53',
  /* orange */ '251, 140, 0',
  /* yellow */ '253, 216, 53',
  /* green */ '67, 160, 71',
  /* blue */ '30, 136, 229',
  /* indigo */ '57, 73, 171',
  /* violet */ '156, 39, 176',
]
const fetcher = (url) => fetch(url).then((res) => res.json());

function Footer() {
  const Online = ({ song }) => <li className={`${style["li"]} ${style["active"]}`}>
    <div className='icon-box' ><BsSpotify /></div>
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "flex" }}>
        <Equalizer /> <p className={`${style["text"]} ${style["song"]}`}>{song.title}</p>
      </div>
      <p className={`${style["text"]}`}>{song.artist}</p>
    </div></li>
  const offline = <li className={`${style["li"]}`}> <div className='icon-box' ><BsSpotify /></div><div> <p className={`${style["text"]} ${style["song"]}`}>Not Playing</p>
    <p className={`${style["text"]} ${style["artists"]}`}>Spotify</p></div></li>
  const { currentTheme, setCurrentTheme } = useTheme()
  const { data, error } = useSWR("/api/spotify/now-playing", fetcher,)
  return (
    <ul className={style["container"]} >
      {error ? <p>{error}</p> : !data ? offline : !data.isPlaying ? offline : <Online song={data} />}
      {
        colors.map((color) => (
          <li key={color} style={{ background: `rgb(${color})` }} className={`${style["li"]} ${color === currentTheme ? style["active"] : ""}`} onClick={(e) => { setCurrentTheme(color) }}></li>

        ))
      }
    </ul >
  )
}
const Equalizer = () => (<div className={style["recent-track__icon"]}>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>)

export default Footer





// import { useFetch } from 'usehooks-ts'

// const url = `http://jsonplaceholder.typicode.com/posts`

// interface Post {
//   userId: number
//   id: number
//   title: string
//   body: string
// }

// export default function Component() {

//   if (error) return <p>There is an error.</p>
//   if (!data) return <p>Loading...</p>
//   return <p>{data[0].title}</p>
// }