function solution(A, K) {
    

     for (let i = 0; i < K; i++) {

    /* 
    for(statement1, statement2, statement3){}

    Statement1 -> let i = 0 (sets a variable before the loop starts)
    Statement2 -> defines the condition for the loop to run (i must be less than K)
    Statement3 -> increases a value (i++) each time the code block in the loop has been executed.
    */


      A.unshift(A.pop());  
      
      /*

      .unshift() - method adds new items to the beginning of an array, and returns the new length. Overwrites the original array. 
      
      .pop() - method removes the last element of an array. Returns the element it removes. Changes the length of the array.

      */
  }

  return A;
}


console.log(solution([3,8,9,7,6], 1));
console.log(solution([3,8,9,7,6], 2));
console.log(solution([3,8,9,7,6], 3));

