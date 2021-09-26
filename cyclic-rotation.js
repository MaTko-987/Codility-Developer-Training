function solution(A, K) {
    

     for (let i = 0; i < K; i++) {
      A.unshift(A.pop());
  }

  return A;
}


console.log(solution([3,8,9,7,6], 1));
console.log(solution([3,8,9,7,6], 2));
console.log(solution([3,8,9,7,6], 3));

