/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-3-15.js
 * @description Object.defineProperty - 'Attributes' is undefined  (8.10.5 step 1)
 */


function testcase() {

        var obj = {};

        try {
            Object.defineProperty(obj, "property", undefined);
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    }
runTestCase(testcase);
