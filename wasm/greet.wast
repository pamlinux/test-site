(module
 (type $none_=>_none (func))
 (type $none_=>_i32 (func (result i32)))
 (import "env" "memory" (memory $mimport$0 1))
 (import "env" "__memory_base" (global $gimport$0 i32))
 (data (global.get $gimport$0) "hello world\00")
 (export "__wasm_call_ctors" (func $0))
 (export "__wasm_apply_data_relocs" (func $0))
 (export "greet" (func $1))
 (func $0
  (nop)
 )
 (func $1 (result i32)
  (global.get $gimport$0)
 )
 ;; dylink section
 ;;   memorysize: 12
 ;;   memoryalignment: 0
 ;;   tablesize: 0
 ;;   tablealignment: 0
)

