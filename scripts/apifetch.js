// console.log("fetch method");
// fetch("https://jsonplaceholder.typicode.com/users").then((respo)=>{return respo.json()}).then((respo)=>{console.log(respo)}).catch((erro)=>{console.log(erro)});
// console.log("fetch method");
// fetch(" http://localhost:3001/empDetails").then((respo)=>{return respo.json()}).then((respo)=>{console.log(respo)}).catch((erro)=>{console.log(erro)});
// ************
//  * end points
//  * all the users:
// http://localhost:3001/empDetails - all data
// // specific useR:
// http://localhost:3001/empDetails/id
// http://localhost:3001/empDetails?prop=value
// create: (POST)
// http://localhost:3001/empDetails
// update:(PATCH)
// http://localhost:3001/empDetails/id - user to be updated
// { dataprop : valueprop}
// delete:
// http://localhost:3001/empDetails/id 
//  * ********** */
// function getAll(){
//     fetch("http://localhost:3001/empDetails").then((res)=>{return res.json()}).then((res)=>console.log(res)).catch((Err)=>console.log(Err))
// }
// getAll()


// function postData(){
//     let url="http://localhost:3001/empDetails"
//     const data={
//         email:"karry@gmail.com"
//     }
//     fetch(url,{
//         method:'POST',
//         body:JSON.stringify(data),
//         headers:{
//             'Content-Type':'application/json'
//         }
//     }).then((res)=>{return res.json()}).then((serverres)=>console.log(serverres)).catch((err)=>console.log(err))
// }
// function postData(){
//     let url="http://localhost:3001/empDetails";
//     const data ={
//         id:3,
//         fname:"harry",
//         email:"harry@gmail.com"
//     }
//     fetch(url,{
//         method:'POST',
//         body:JSON.stringify(data),
//         headers:{
//             'Content-Type':'application/json'
//         }
//     }).then((res)=>{return res.json()}).then((serverres)=>{console.log(serverres)}).catch((error)=>console.log(error));
// }
// postData();

// function patchReq(){
//     const url="http://localhost:3001/empDetails/2"
//     const data={
//         fname: "Karry",
//     }
//     fetch(url,{
//         method:'PATCH',
//         body:JSON.stringify(data),
//         headers:{
//             'Content-Type':'application/json'
//         }
//     }).then((res)=>{return res.json()}).then((serverres)=>console.log(serverres)).catch((err)=>console.log(err))
// }
// patchReq();
// function patchReq(){
//     let url="http://localhost:3001/empDetails/0";
//     const data ={
//         email:"peternew@gmail.com"
//     }
//     fetch(url,{
//         method:'PATCH',
//         body:JSON.stringify(data),
//         headers:{
//             'Content-Type':'application/json'
//         }
//     }).then((res)=>{return res.json()}).then((serverres)=>console.log(serverres)).catch((error)=>console.log(error));
// }
// patchReq();
// function putReq(){
//     let url="http://localhost:3001/empDetails/0";
//     const data ={
//         email:"peternew@gmail.com"
//     }
//     fetch(url,{
//         method:'PUT',
//         body:JSON.stringify(data),
//         headers:{
//             'Content-Type':'application/json'
//         }
//     }).then((res)=>{return res.json()}).then((serverres)=>console.log(serverres)).catch((error)=>console.log(error));
// }
// putReq();
// // function putReq(){
// //     const url="http://localhost:3001/empDetails/2"
// //     const data={
// //         fname: "Karry",
// //         email:"karry@gmail.com"
// //     }
// //     fetch(url,{
// //         method:'PUT',
// //         body:JSON.stringify(data),
// //         headers:{
// //             'Content-Type':'application/json'
// //         }
// //     }).then((res)=>{return res.json()}).then((serverres)=>console.log(serverres)).catch((err)=>console.log(err))
// // }

// function deleteReq(){
//      fetch("http://localhost:3001/empDetails/2",{
//          method:'DELETE'
//     }).then((res)=>{return res.json()}).then((res)=>console.log(res)).catch((Err)=>console.log(Err))
// }
// function deleteReq(){
//          fetch("http://localhost:3001/empDetails/2",{
//              method:'DELETE'
//         }).then((res)=>{return res.json()}).then((res)=>console.log(res)).catch((Err)=>console.log(Err));
//     }
// deleteReq();