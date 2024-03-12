// !!!!Important received as array Or object destructure

// export default function Todo({task}){
//     return (
//         <li>Task : {task}</li>
//     )
// }




// here we have seen the use of conditional rendering option-1
// export default function Todo({task,isDone}){
//    if(isDone === true)
//    {
//     return <li> Finished : {task}</li>
//    }

//    else{
//     return <li> Work On : {task}</li>
//    }
// }


// here we have seen the use of conditional rendering option-2
// export default function Todo({task,isDone}){
//     if(isDone === true)
//    {
//     return <li> Finished : {task}</li>
//    }
//    return <li> Work On : {task}</li>
// }



// here we have seen the use of conditional rendering option-3(ternary operator) JS material
// export default function Todo({task,isDone}){
//     return (
//         <li>{isDone ? "Finished" :"Work On"} : {task}</li>
//     )
// }



// here we have seen the use of conditional rendering option-4 (&& operator)
// export default function Todo({task,isDone}){
//     return (
//         <li> {task}: {isDone && 'Done'}</li>
//     )
// }


// here we have seen the use of conditional rendering option-5 (|| operator)
// export default function Todo({task,isDone}){
//     return (
//         <li> {task}: {isDone || 'Do it'}</li>
//     )
// }



// here we have seen the use of conditional rendering option-6
export default function Todo({task,isDone}){

    let listItem;
    if(isDone === true)
   {
    listItem= <li> Finished : {task}</li>
   }
   else
   listItem= <li> Work On : {task}</li>

   return listItem
}