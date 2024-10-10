#include <math.h>
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#define WASM_EXPORT __attribute__((visibility("default")))

int gcd(int i, int j) {
    if (j == 0)
		return i;
	return gcd(j, i % j);
}

bool isPrime(int i, int j, int k) {
    int res = gcd(i,gcd(j,k));
    return res == 1;
}

int triple(int trpl[][3], int upper) {
    int k=0;
    for (int i=1; i < upper; i++) 
        for (int j=i; j < upper; j++) {
            double r;
            r = sqrt(i*i + j*j);
            if ((r - floor(r)) < 0.00001) 
                if (isPrime(i, j, (int)floor(r))) {
                    /*printf("%i, %i, %i, %i\n", k, i, j, (int)r);*/
                    trpl[k][0] = i;
                    trpl[k][1] = j;
                    trpl[k][2] = (int)r;
                    k++;
                }
        }
    return k;
}

WASM_EXPORT int pyth2(int **ptr, int upper) {
    int trpl[upper][3];
    int nbTrpl;

    nbTrpl = triple(trpl, upper);

    int *p = (int *) malloc(3 * nbTrpl * sizeof(int));
    printf("size of int : %lu\n", sizeof(int));
    for (int k=0; k < nbTrpl; k++) {
        p[3*k] = trpl[k][0];
        p[3*k + 1] = trpl[k][1];
        p[3*k + 2] = trpl[k][2];
    }

    *ptr = p; 
    return nbTrpl;

}

WASM_EXPORT int pyth(int retTrpl[], int upper) {

    int trpl[upper][3];
    int nbTrpl;
    nbTrpl = triple(trpl, upper);
    for (int k=0; k < nbTrpl; k++) {
        retTrpl[3*k] = trpl[k][0];
        retTrpl[3*k + 1] = trpl[k][1];
        retTrpl[3*k + 2] = trpl[k][2];
    }

    return nbTrpl;
}

int main() {
    int *p;
    int nbTrpl;
    int upper = 100;
    nbTrpl = pyth2(&p, upper);

    for (int k=0; k < nbTrpl; k++) {
         printf("%i, %i, %i, %i\n", k + 1, p[3*k], p[3*k + 1], p[3*k + 2]);
    }

    free(p);

    int trpl[upper*3];
    nbTrpl = pyth(trpl, upper);

    for (int k=0; k < nbTrpl; k++) {
         printf("%i, %i, %i, %i\n", k + 1, trpl[3*k], trpl[3*k + 1], trpl[3*k + 2]);
    }
  
}
