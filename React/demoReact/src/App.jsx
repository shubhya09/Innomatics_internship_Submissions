// import React  from 'react'
// import CompA from './Components/PropDrilling/CompA'
// // import FormData from './Components/FunctionComponent/FormData'
// // import ClassDemo from './ClassComponent/ClassDemo'
// // import QuoteGenerator from './ClassComponent/QuoteGenerator'
// // import { DemoFunction } from './Components/FunctionComponent/DemoFunction'
// // import {QuoteGenerator} from './Components/FunctionComponent/QuoteGenerator'
// // import ArrayDemo from './Components/FunctionComponent/ArrayDemo'
// // import PropsDemo from './Components/FunctionComponent/PropsDemo'


// function App() {
  
// let name = 'Asabeneh'

//   return (
//     <>
//       {/* <ClassDemo /> */}
//       {/* <QuoteGenerator />
//        */}

//        {/* <DemoFunction /> */}

//        {/* <QuoteGenerator /> */}

//        {/* <ArrayDemo /> */}

//        {/* <FormData /> */}

//        {/* <PropsDemo name={name} manager_name={"Bai"}/> */}
//        <CompA name="Peter Parker"/>
//     </>
//   )
// }

// export default App

import React, { createContext } from 'react'
import CompA from './Components/PropDrilling/CompA'

let details = createContext();

function App() {
 let fName = 'Peter'
 let lName = 'Parker'
  return (
<>

<details.Provider value={[fName, lName]}>
<CompA />
</details.Provider>

</>
  )
}

export{details}
export default App
