// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import './Visualizer.css';

// const Visualizer = () => {
//   const reduxArray = useSelector(state => state.array.entities);

//   useEffect(() => {
//     const arrayBars = document.querySelectorAll('.array-bar');
//     arrayBars.forEach((bar, index) => {
//       bar.style.transition = 'height 0.3s';
//       bar.style.transitionDelay = `${index * 0.03}s`;
//     });
//   }, [reduxArray]);

//   return (
//     <div className="array-container">
//       {reduxArray.map((value, i) => (
//         <div
//           key={i}
//           className="array-bar"
//           style={{
//             height: `${value * 4}px`,
//           }}
//         >
//           {value}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default React.memo(Visualizer);

// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import './Visualizer.css';

// function Visualizer() {
//   const reduxArray = useSelector(state => state.array.entities);
//   const [barValues, setBarValues] = useState([]);

//   useEffect(() => {
//     // Map giá trị và vị trí vào mảng barValues
//     const updatedBarValues = reduxArray.map((value, index) => ({
//       value,
//       position: index,
//     }));
//     setBarValues(updatedBarValues);
//   }, [reduxArray]);

//   return (
//     <div className="array-container">
//       {barValues.map(({ value, position }) => (
//         <div
//           key={position}
//           className="array-bar"
//           style={{
//             height: `${value * 4}px`,
//           }}
//         >
//           <div className="bar-value">{value}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default React.memo(Visualizer);

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Visualizer.css';

function Visualizer() {
  const reduxArray = useSelector(state => state.array.entities);
  const [barValues, setBarValues] = useState([]);

  useEffect(() => {
    const updatedBarValues = reduxArray.map((value, index) => ({
      value,
      position: index,
    }));
    setBarValues(updatedBarValues);
  }, [reduxArray]);

  return (
    <div className="array-container">
      {barValues.map(({ value, position }) => (
        <div
          key={position}
          className="array-bar"
          style={{
            height: `${value * 4}px`,
            left: `${position * 20}px`,
          }}
        >
          <div className="bar-value">{value}</div>
        </div>
      ))}
    </div>
  );
}

export default React.memo(Visualizer);




