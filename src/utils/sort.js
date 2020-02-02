
export const naturalSort = (arr) => {
  /* Sorts alphanumeric array. Function courtesy of: https://stackoverflow.com/a/4373238/10951815
  
  Eg.
  input = [1,5,"ahsldk",10,55,3,2,7,8,1,2,75,"abc","huds"]
  output = [1, 1, 2, 2, 3, 5, 7, 8, 10, 55, 75, "abc", "ahsldk", "huds"]
  
  */
  arr.sort(function(a,b){
    var a1=typeof a, b1=typeof b;
    return a1<b1 ? -1 : a1>b1 ? 1 : a<b ? -1 : a>b ? 1 : 0;
  });
  return arr
}


