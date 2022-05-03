// Fictional JS for Garbage collection

let name = claim(5); // Claim 5 bytes of memory for use by name
if (memoryNotAllocated(name)) {
  throw new Error("Memory not allocated!");
}

copy(name, "Sarah"); // copies "Sarah" into claimed memory referenced by name
console.log(name);   // do something with object referenced by name
release(name);       // release memory for use by others

// REal JS


let name2 = "Sarah";   // Declare a variable and set its value. The JavaScript
                      // runtime automatically allocates the memory.
console.log(name2);    // Do something with name
// when we no longer need `"Sarah"`, it becomes eligible for GC