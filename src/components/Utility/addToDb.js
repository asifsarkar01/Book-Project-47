// import { JSON } from "react-router-dom";

// const getStoredReadList = () => {
//     const storedListStr = localStorage.getItem('read-list')
//     if(storedListStr){
//         const storedList = JSON.parse(storedListStr)
//         return storedList;
//     }else{
//         return []
//     }

// }

// const addToStoredReadList = (id) => {
//     const storedList = getStoredReadList();
//     if(storedList.includes(id)){
//         console.log(id,'already exist in read list')
//     }
// else{
//     storedList.push(id)
//     const storedListStr = JSON.Stringify(storedList);
//     localStorage.getItem('read-list', storedListStr);
// }
// }

// export {addToStoredReadList}