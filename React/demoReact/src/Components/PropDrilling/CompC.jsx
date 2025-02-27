// import React from 'react'

// const CompC = (props) => {
//   return (
//     <>
//     <div>CompC</div>
//     <p>The name is {props.name}</p>
//     </>
//   )
// }

// export default CompC

// import React from 'react'

// const CompC = () => {
//   return (
//     <>
//     <div>CompC</div>
//     <p>The name is {props.name}</p>
//     </>
//   )
// }

// export default CompC

// import React from 'react'
// import { details } from '../../App'

// const CompC = () => {
//   return (
//     <>
//     <details.Consumer>
//         {
//             (getData) => {
//             return <p>The name is {getData[0]} {getData[1]}</p>
//             }
//         }   
//     </details.Consumer>
//     </>
//   )
// }

// export default CompC


import React, { useContext } from 'react'
import { details } from '../../App'

const CompC = () => {
    const data = useContext(details);
  return (
    <>
    <p>The name is {data[0]} {data[1]}</p>
    </>
  )
}

export default CompC