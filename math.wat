(module
    ;; The string after the $ symbol specifies the name of the function.
    ;; Given a number compute its square.
    ;; Input
    ;;  param i32
    ;;
    ;; Output
    ;;  result i32
    (func $square (param i32) (result i32)
        local.get 0 ;; pull the input value and push it to the stack
        local.get 0 ;; square function needs the same number twice
        i32.mul ;; mul operation expects two numbers from the stack
        ;; Evaluation of arithmetic expressions using a stack
        ;;
        ;; (2 * 2)
        ;; would be written as
        ;;
        ;; 2 2 *
        ;; and evaluated like this
        ;;
        ;; Contents of the stack                    Program being evaluated
        ;;
        ;;  [ ]                             |               2 2 *
        ;;  [2]                             |               2 *
        ;;  [2, 2]                          |               *
        ;;  [4]                             |
        ;;
        ;; The return value will be the final content of the stack after the execution.
    )
    ;; export the previous function so javascript can run it.
    (export "square" (func $square))
)