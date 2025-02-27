import React from 'react';

const PropsDemo = (props, tagline="The company that cares!") => {
  return (
    <>
      <h1>Props Demo</h1>
      <p>{props.name}</p>
      <p>{props.manager_name}</p>
      <p>The Company's Tagline is {tagline}</p>
    </>
  );
};

// Define defaultProps before export
// PropsDemo.defaultProps = {
//   tagline: 'The Company that Cares',
// };

export default PropsDemo;


// import React from 'react'

// const PropsDemo = ({name, manager_name}) => {
//   return (
//     <>
//     <h1>Props demo in react using destructuring</h1>
//     <p>{name}</p>
//     <p>{manager_name}</p>
//     </>
//   )
// }

// export default PropsDemo