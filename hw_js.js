let n=Number(prompt('Введите число'));

function prime_num(n) {

  if (n===1)  {
    return false;
  }
  else if(n === 2)  {
    return true;
  } 
  else   {
    for(var x = 2; x < n; x++)  {
      if(n % x === 0) {
        return false;
      }
    }
    return true;  
  }
}

document.writeln(prime_num(n)); 

let k=Number(prompt('Введите положительное целое число'));

function multiplier_num(k) {

  for(var x = 2; x < k; x++)  {
    if(k % x === 0) {
      document.writeln(x);
    }
  }
}

document.writeln(multiplier_num(k)); 

