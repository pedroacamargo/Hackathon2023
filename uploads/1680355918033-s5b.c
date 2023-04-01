#include <stdio.h>
#include <string.h>

int main() {
    int A; 
    int N; 
    int codigo; 
    int C; 
    int P; 

    if(scanf("%d", &A) != 1) return 1;
    if(scanf("%d", &N) != 1) return 1;

    int matriz[24][100];
    memset(matriz, 0, sizeof(matriz));

    for(int i = 0; i < N; i++) {
        if(scanf("%d %d %d", &codigo, &C, &P) != 3) return 1;
        for(int j = C; j <= P; j++) {
            matriz[j][codigo-1] = 1;
        }
    }

    for(int h = 0; h < 24; h++) {
        int ag_pr = 0;
        int final[100];
        for(int a = 0; a < A; a++) {
            if(matriz[h][a] == 1) {
                final[ag_pr] = a+1;
                ag_pr++;
            }
        }
        if(ag_pr > 1) {
            printf("%d", h);
            int f = 0;
            while(f < ag_pr) {
                printf(" %d", final[f]);
                f++;
            }
            printf("\n");
        }
    }

    return 0;
}
