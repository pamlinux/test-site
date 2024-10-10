const memory = new WebAssembly.Memory({ initial: 10, maximum: 100 });
WebAssembly.instantiateStreaming(fetch("../wasm/add-arrays.wasm", {
    env: { memory: memory }}))
 .then(( { instance }) => {
   // invoke the exported function
   addArraysInt32 = instance.exports.addArraysInt32
   const length = 5;
   let offset = 0
   const array1 = new Int32Array(memory.buffer, offset, length)
   array1.set([1, 2, 3, 4, 5])
 
   offset += length * Int32Array.BYTES_PER_ELEMENT
   const array2 = new Int32Array(memory.buffer, offset, length)
   array2.set([6, 7, 8, 9, 10])
 
   offset += length * Int32Array.BYTES_PER_ELEMENT
   const result = new Int32Array(memory.buffer, offset, length)
 
    // Call the function.
    instance.exports.addArraysInt32(
        array1.byteOffset,
        array2.byteOffset,
        result.byteOffset,
        length);
  
  // Show the results.
  console.log(`[${array1.join(", ")}] + [${array2.join(", ")}] = [${result.join(", ")}]`)

  // document.getElementById("container").textContent = str;
});
