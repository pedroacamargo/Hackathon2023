#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char nome_funcionario[21];
    int numero_faltas;
} DadosFuncionario;

int main() {
    int quantidade_dias, contador, indice;
    DadosFuncionario funcionarios[40];
    int total_funcionarios = 0;

    if(scanf("%d", &quantidade_dias) != 1) return 1;
    getchar();

    for (contador = 0; contador < quantidade_dias; contador++) {
        char linha_funcionarios[1000];
        if(fgets(linha_funcionarios, sizeof(linha_funcionarios), stdin) == NULL) return 1;

        char *nome = strtok(linha_funcionarios, " \n");

        while (nome) {
            int funcionario_encontrado = 0;
            for (indice = 0; indice < total_funcionarios; indice++) {
                if (strcmp(funcionarios[indice].nome_funcionario, nome) == 0) {
                    funcionarios[indice].numero_faltas--;
                    funcionario_encontrado = 1;
                    break;
                }
            }

            if (!funcionario_encontrado) {
                strcpy(funcionarios[total_funcionarios].nome_funcionario, nome);
                funcionarios[total_funcionarios].numero_faltas = quantidade_dias - 1;
                total_funcionarios++;
            }

            nome = strtok(NULL, " \n");
        }
    }

    int faltas_maximas = -1;
    int indice_funcionario_faltas_maximas = -1;

    for (contador = 0; contador < total_funcionarios; contador++) {
        if (funcionarios[contador].numero_faltas > faltas_maximas) {
            faltas_maximas = funcionarios[contador].numero_faltas;
            indice_funcionario_faltas_maximas = contador;
        }
    }

    printf("%s\n", funcionarios[indice_funcionario_faltas_maximas].nome_funcionario);

    return 0;
}
