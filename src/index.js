// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix){
        return []
    }
    
    if (matrix.length === 0){
        return []
    }

    let reverse = false
    return matrix.reduce(function (flat, toFlatten) {
        reverse = !reverse
        return flat.concat(reverse ? toFlatten.reverse() : toFlatten)

    })
}


function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }


  function Bubble_Sort(a)
{
    let swapp;
    let n = a.length-1;
    let x=a;
    do {
        swapp = false;
        for (let i=0; i < n; i++)
        {
            if (x[i] > x[i+1])
            {
               let temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x;
}
