import React, { useEffect, useState } from 'react'

const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0})
    const {x, y} = coords;

    useEffect( () => {

        console.log('Componente Montado !!!');

        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y };
            setCoords(coords);
            console.log(coords);
        }

        window.addEventListener('mousemove', mouseMove)

          return () => {
              console.log('Componente Desmontado !!!');

              window.removeEventListener('mousemove', mouseMove);
          }
    }, [])

    return (
        <div>
            <h3> Eres Genial & vas a lograr todas tus Metas.</h3>
            <p> Estas son las Coordenadas de tu pantalla X: {x} - Y: {y}</p>
        </div>
    )
}

export default Message
