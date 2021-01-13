
export const NameSort=(Data)=>{let [...x]= Data.sort(function(a, b) {
 
    let aFirstChar = a.FirstName.charAt(0);
    let bFirstChar = b.FirstName.charAt(0);
    if (aFirstChar > bFirstChar) {
      return 1;
    } else if (aFirstChar < bFirstChar) {
      return -1;
    } else {
      let aLastChar = a.LastName.charAt(0);
      let bLastChar = b.LastName.charAt(0);
      if (aLastChar > bLastChar) {
        return 1;
      } else if (aLastChar < bLastChar) {
        return -1;
      } else {
        return 0;
      }    
    }
  })
  console.log("hahahha")
 return x;
};

export const RateSort =(Data)=>{
 
  let [...x]=Data.sort(function (a,b){
     if((a.Rating/a.NumberOfUsers)<(b.Rating/b.NumberOfUsers))
     return 1
     else
     return -1
   
   
  })
  console.log("hahahha")
  return x;

}

export const UsedSort =(Data)=>{
 
  let [...x]=Data.sort(function (a,b){
     if(a.NumberOfUsers<b.NumberOfUsers)
     return 1
     else
     return -1
   
   
  })
  console.log("hahahha")
  return x;

}

