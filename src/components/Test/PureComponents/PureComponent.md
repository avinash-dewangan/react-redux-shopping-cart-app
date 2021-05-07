# Regular Component

A regular component does not implement the shouldComponentUpdate method. it always returns true by default

# Pure Component

A pure component on the other hand implemnets shouldComponentUpdate with a shallow props and state comparison

## Shallow comparison (SC)

Primitive Types
a SC b return true if a and b is same type and same value
example

string 'avinash' SC string 'avinash is true

complex types

var a = [1,2,3]
var b = [1,2,3]
var c = a

if(a===b) //false
if(a===c) // true becuase that is pointed of same object
