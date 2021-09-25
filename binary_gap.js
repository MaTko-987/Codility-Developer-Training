
let gap;
function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (N === parseInt(N, 10) && N>=1 && N<=2147483647){

        /*

        1) parseInt(string, radix/base) - function parses/raščlanuje a string argument and returns an integer of the specified radix (the base in mathematical numeral systems
        
        Radix - The decimal number system that we use every day has 10 digits {0,1,2,3,4,5,6,7,8,9} and so the radix is 10 (also called Base 10). 
        Binary digits can only be 0 or 1, so the radix is 2 (or Base 2).
        https://www.mathsisfun.com/definitions/radix.html

        2) The number 2,147,483,647 is among the most important numbers in computer science (perhaps even its most important number). It corresponds to a data type more completely known as a 32-bit signed integer

        */

        gap = 0;



        //turn it to binary
        const binary = N.toString(2)

        /* 
        
        
        1).toString() - number to string in binary

        The toString() method in Javascript is used with a number and converts the number to a string. It is used to return a string representing the specified Number object.
        Parameters Used: This method accepts a single optional parameter base. This parameter specifies the base in which the integer is represented in the string. 
        It is an integer between 2 and 36 which is used to specify the base for representing numeric values.

        https://www.geeksforgeeks.org/javascript-tostring-function/ --> check out for other bases (2,8,16,32, no base returns the same number...)
        */



        //turn it into an array
        let NArray = binary.split(''); //The split() method splits a string into an array of substrings, and returns the array. exmpl: How,are,you,doing,today?
        
        findGap(NArray);
    }
    return gap;
    
}



function evalGap(distance){
    if (distance > gap){
        gap = distance;
    }
}

function findGap(binaryArray) {
    if (binaryArray.indexOf('1') == -1){ //.indexOf() - method returns the position of the first occurrence of a specified value in a string
        return gap
    } 

    else {
        index1 = binaryArray.indexOf('1');
        evalGap(index1)

        binaryArray = binaryArray.slice(index1+1); // .slice() - method method extracts parts of a string and returns the extracted parts in a new string.

        /*Use the start and end parameters to specify the part of the string you want to extract.
        
        The first character has the position 0, the second has position 1, and so on.
        
        Tip: Use a negative number to select from the end of the string. */

        
        index2 = binaryArray.indexOf('1')

        if (index2 !== -1) {

            evalGap(index2)
            binaryArray = binaryArray.slice(index2+1);
            findGap(binaryArray)
        } else {
            if (gap === 0) {
                gap = 0
            }
        }
    }
}