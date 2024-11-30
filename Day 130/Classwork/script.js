// 1) შექმენით კომპონენტი რომელიც არგუმენტად მიიღებს სახელების სიას,
//  და თვქენ ul თეგში უნდა დაარენდეროთ
//   თითოეული მნიშვნელობისთი ერთი li თეგი

import React from 'react';
import ReactDOM from 'react-dom';
import NameList from './NameList';

const names = ['Mari', 'Nika', 'Dato'];

ReactDOM.render(<NameList names={names} />, document.getElementById('root'));



// import React from 'react';

// function NameList({ names }) {
//   return (
//     <ul>
//       {names.map((name, index) => (
//         <li key={index}>{name}</li>
//       ))}
//     </ul>
//   );
// }

// export default NameList;