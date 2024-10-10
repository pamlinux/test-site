#define WASM_EXPORT __attribute__((visibility("default")))

WASM_EXPORT char* greet() {
 return "hello world";
}