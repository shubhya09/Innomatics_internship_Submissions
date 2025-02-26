// import React from 'react'

// export const DemoFunction = () => {

//     let a = 9;
//     let fName = "John";
//     let arr = [11, 22, 33, 44, 55];

//   return (
//     <>

//     <h1>Function Component</h1>
//     <p>{a}</p>
//     <p>{fName}</p>
//     {
//     arr?.map((numbers, index) => (
//         <li key={index} style={{ listStyleType: 'none' }}>{numbers}</li>
//     ))
// }

//     </>
//   )
// }




import React from 'react'

const DemoFunction = () => {

    const [count, setCount] = React.useState(0);
    const changeCount = () => {
        console.log("count Function");
        setCount(count + 1);
    }

    return (
        <>

            <h1>Counter Application</h1>
            <p>{count}</p>

            <button onClick={() => changeCount()}>Counter</button>

        </>
    )
}

export { DemoFunction };