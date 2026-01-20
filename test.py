import sys

# Leitura do valor de entrada
valor = float(sys.stdin.read())

# Convertemos para centavos para evitar erros de precisão com floats
# Adicionamos 0.5 antes de converter para int para garantir o arredondamento correto
centavos = int(valor * 100 + 0.5)

# Listas de notas e moedas (em centavos)
notas = [10000, 5000, 2000, 1000, 500, 200]
moedas = [100, 50, 25, 10, 5, 1]

print("NOTAS:")
for nota in notas:
    quantidade = centavos // nota
    print(f"{quantidade} nota(s) de R$ {nota/100:.2f}")
    centavos %= nota

print("MOEDAS:")
for moeda in moedas:
    quantidade = centavos // moeda
    print(f"{quantidade} moeda(s) de R$ {moeda/100:.2f}")
    centavos %= moeda