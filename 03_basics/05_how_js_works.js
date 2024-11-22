//! Javascript Execution Context

/*
    Inside the JS code :

    Global Execution Context is created and where it is created, it is referred by this keyword which in browser will give window object and in nodejs it gives {} (blank) object

    So Global EC is created inside the this variable

    Two types of Context
    Global Execution Context | Function/Functional Execution Context | Eval Execution Context

    2 phases are created inside global execution context

    -> Memory creation/creation phase and Execution phase

    1) Global Execution (Global Environment) 
        - This is allocated in this variable

    2.1) Memory Phase // All the variable information are kept inside this phase (First Cycle)

    val1 -> undefined
    val2 -> undefined
    addNum -> definition (all the code inside the func)
    result1 -> undefined
    result2 -> undefined

    2.2) Execution Phase
    val1 -> 10
    val2 -> 5
    addNum -> New variable environment + Execution thread is created (Function EC)
    result1 -> 15
    result2 -> 

    3.1) Memory phase (addNum)
    num1 -> undefined
    num2 -> undefined
    total -> undefined
    
    3.2) Execution phase (addNum)
    num1 -> 10
    num2 -> 5
    total -> 15

    the total is returned to the GEC
    This Execution context of addNum is deleted and removed from the callstack (a stack data structure which stores the execution contexts and follow LIFO)

    4.1) Memory phase (addNum)
    num1 -> undefined
    num2 -> undefined
    total -> undefined

    4.2) Execution phase (addNum)
    num1 -> 10
    num2 -> 2
    total -> 12
    the total is returned to the GEC and removed from the callstack as well.

    Once every line of the code is executed, the GEC is also removed from the call stack as well.

*/

let val1 = 10;
let val2 = 5;

function addNum(num1, num2){
    let total = num1 + num2;
    return total
}

let result1 = addNum(val1,val2);
let result2 = addNum(10,2);