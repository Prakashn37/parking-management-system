// const parkingLotDetails = JSON.parse(localStorage.getItem('parkingLotDetails'));
// export const addCar = (registration, color) => {
//     let i = 0;
//     for (i = 0; i < parkingLotDetails['totalSlots']; i++) {
//         if (parkingLotDetails['slotDetails'][i]['free'] === true) {
//             parkingLotDetails['slotDetails'][i]['free'] = false;
//             parkingLotDetails['slotDetails'][i]['registration'] = registration;
//             parkingLotDetails['slotDetails'][i]['color'] = color;
//             parkingLotDetails['occupiedSlots'] = parkingLotDetails['occupiedSlots'] - 0 + 1;
//             localStorage.setItem('parkingLotDetails', localStorage.getItem('parkingLotDetails'));
//             break;
//         }
//     }
//     if (i == parkingLotDetails['totalSlots']) {
//         alert('no slots');
//     }
// };

// export const removeCar = (slot) => {
//     parkingLotDetails.slotDetails[slot]['free'] = true;
//     parkingLotDetails.slotDetails[slot]['registration'] = '';
//     parkingLotDetails.slotDetails[slot]['color'] = '';
// };

// export const length = () => {
//     return parkingLotDetails['totalSlots'];
// }

// export const details = () => {
//     return parkingLotDetails;
// }

// export const slotDetails = () => {
//     return parkingLotDetails['slotDetails'];
// }
