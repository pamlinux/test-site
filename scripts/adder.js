WebAssembly.instantiateStreaming(fetch("../wasm/adder.wasm"))
 .then(({ instance }) => {
   // invoke the exported function
   const result = instance.exports.adder(47, 31);
   document.getElementById("container").textContent = result;
});
