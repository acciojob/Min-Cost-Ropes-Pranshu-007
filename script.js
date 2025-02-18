function mincost(arr)
{ 
//write your code here
// return the min cost
	if (arr.length <= 1) return 0;

  arr.sort((a, b) => a - b);
  let totalCost = 0;

  while (arr.length > 1) {
    const [first, second] = arr.splice(0, 2);
    const cost = first + second;
    totalCost += cost;
    console.log(totalCost)

    arr.push(cost);
    arr.sort((a, b) => a - b);
  }
  return totalCost;
  
}

module.exports=mincost;
