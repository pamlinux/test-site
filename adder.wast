(module
 (type $none_=>_none (func))
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (export "__wasm_call_ctors" (func $0))
 (export "__wasm_apply_data_relocs" (func $0))
 (export "adder" (func $1))
 (func $0
  (nop)
 )
 (func $1 (param $0 i32) (param $1 i32) (result i32)
  (i32.add
   (local.get $0)
   (local.get $1)
  )
 )
 ;; dylink section
 ;;   memorysize: 0
 ;;   memoryalignment: 0
 ;;   tablesize: 0
 ;;   tablealignment: 0
)

