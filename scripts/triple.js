WebAssembly.instantiateStreaming(fetch("../wasm/triple2.wasm"))
 .then(({ instance }) => {
   // invoke the exported function
  const memory = instance.exports.memory;
  const pyth = instance.exports.pyth;

   console.log(pyth);
   console.log(memory);

   const upper = 100;
   let offset = 0
   const array = new Int32Array(memory.buffer, offset, upper)
 
    let nbTrpl;

    // Call the function.
    nbTrpl = instance.exports.pyth(
        array.byteOffset,
        upper);
  
  // Show the results.
  console.log(`[${array}]`)

 })
