import * as React from 'react';
import { roomsRef } from '../firebase';
import { useState, useEffect } from 'react';

const RoomPage = ({roomName}) => {

  const [rooms, setRooms] = useState([])

  useEffect(() => {
    roomsRef
      .on('value', (snapshot) => {
        const rooms = snapshot.val();
        if (rooms === null) return;
        const entries = Object.entries(rooms); 
        const newRooms = entries.map((entry) => {
          const [key, room] = entry;
          return {key, ...room};
        });
        setRooms(newRooms);
      });
  },[]);

  return <div>{roomName}</div> 
}; 

export default RoomPage;