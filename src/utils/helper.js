

const findIndexById = (arr,id) => {
  for(let i=0;i<arr.length;i++){
    if(id===arr[i].id){
        return i;
        
    }
  }
  return -1;
}

export default findIndexById;
