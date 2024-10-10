WebAssembly.instantiateStreaming(fetch("../wasm/power.wasm"))
 .then(({ instance }) => {
   // invoke the exported function
   const result = instance.exports.power(2, 10);
   document.getElementById("container").textContent = result;
});
