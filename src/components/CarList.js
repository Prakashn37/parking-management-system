import React from 'react';
import CarListItem from './CarListItem';


const CarList = (props) => {
  let key = 0
  return (
    <div>
      {
        props.list.map((car, index) => {
          if (car) {
            return <CarListItem
              key={key++}
              registration={car.registration}
              color={car.color}
              time={car.time}
              bookingId={car.bookingId}
              removeCar={props.removeCar}
              slotNo={index + 1}
            />
          }
          return null
        })
      }
    </div>
  )
};

export default CarList;
/*

*/