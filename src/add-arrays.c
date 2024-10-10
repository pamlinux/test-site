#define WASM_EXPORT __attribute__((visibility("default")))

WASM_EXPORT void addArraysInt32 (int *array1, int* array2, int* result, int length)
{
    for (int i = 0; i < length; ++i) {
        result[i] = array1[i] + array2[i];
    }
}