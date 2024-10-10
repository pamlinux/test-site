(module
 (type $none_=>_none (func))
 (type $f32_i32_=>_f32 (func (param f32 i32) (result f32)))
 (export "__wasm_call_ctors" (func $0))
 (export "__wasm_apply_data_relocs" (func $0))
 (export "power" (func $1))
 (func $0
  (nop)
 )
 (func $1 (param $0 f32) (param $1 i32) (result f32)
  (local $2 f32)
  (local $3 i32)
  (local $4 i32)
  (if
   (i32.lt_s
    (local.get $1)
    (i32.const 2)
   )
   (return
    (local.get $0)
   )
  )
  (local.set $4
   (i32.and
    (local.tee $3
     (i32.sub
      (local.get $1)
      (i32.const 1)
     )
    )
    (i32.const 7)
   )
  )
  (local.set $2
   (local.get $0)
  )
  (if
   (i32.ge_u
    (i32.sub
     (local.get $1)
     (i32.const 2)
    )
    (i32.const 7)
   )
   (block
    (local.set $3
     (i32.and
      (local.get $3)
      (i32.const -8)
     )
    )
    (local.set $1
     (i32.const 0)
    )
    (loop $label$3
     (local.set $2
      (f32.mul
       (f32.mul
        (f32.mul
         (f32.mul
          (f32.mul
           (f32.mul
            (f32.mul
             (f32.mul
              (local.get $2)
              (local.get $0)
             )
             (local.get $0)
            )
            (local.get $0)
           )
           (local.get $0)
          )
          (local.get $0)
         )
         (local.get $0)
        )
        (local.get $0)
       )
       (local.get $0)
      )
     )
     (br_if $label$3
      (i32.ne
       (local.tee $1
        (i32.add
         (local.get $1)
         (i32.const 8)
        )
       )
       (local.get $3)
      )
     )
    )
   )
  )
  (if
   (local.get $4)
   (block
    (local.set $1
     (i32.const 0)
    )
    (loop $label$5
     (local.set $2
      (f32.mul
       (local.get $2)
       (local.get $0)
      )
     )
     (br_if $label$5
      (i32.ne
       (local.tee $1
        (i32.add
         (local.get $1)
         (i32.const 1)
        )
       )
       (local.get $4)
      )
     )
    )
   )
  )
  (local.get $2)
 )
 ;; dylink section
 ;;   memorysize: 0
 ;;   memoryalignment: 0
 ;;   tablesize: 0
 ;;   tablealignment: 0
)

