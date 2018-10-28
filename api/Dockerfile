# Dockerfile api

# Nome da imagem (será baixada na primeira execução)
FROM node:10.11.0 

# variável de ambiente com o path do app dentro do container
ENV HOME:/home/api

# ponto de entrada para execução das intruções
WORKDIR $HOME 

# copia os arquivos do diretório atual para o $HOME
COPY . $HOME 

# executa comandos shell
RUN npm install

