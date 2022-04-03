import axios from 'axios'
import React, { MouseEvent, useEffect, useState } from 'react'

type Props = {}// inferência de tipo, identificando
// que o props vai ser um objeto

interface RoomModel {
  name: string;
}

export const Room: React.FC = (props: Props) => {
  const [rooms, setRooms] = useState<RoomModel[]>([]);

  useEffect (() => {
    axios.get('url')
      .then(res => console.log(res))
      .catch(err => {
        setRooms([{name: 'sala1'},{name: 'sala2'}])
        console.log('aqui')
      });
  }, [])
  
  function clicou(event: MouseEvent): void {
    console.log(event)
  }

  console.log(rooms);
  return (
    <div>
      <h1>Salas</h1>
      <ul>
        {
          rooms?.map((room, idx) => (
            <button onClick={clicou} key={idx}>{room.name}</button>
          ))
        }
      </ul>
    </div>
  )
}