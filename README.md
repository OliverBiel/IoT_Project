# IoT Project

Esse projeto foi criado para um trabalho da faculdade, ele mostra o funcionamento de um dispositivo IoT, no caso um interruptor inteligente.

## Funcionamento
O site faz a requisição para o site [IFTTT](https://ifttt.com/home) no qual ativa uma rotina que conecta com a Alexa e ligue/desliga o dispositivo em questão.

# Instalação
*Caso tenha o interesse de ver o funcionamento do sistema, é necessário possui algum dispositivo inteligente para o mesmo.

- No site [IFTTT](https://ifttt.com/home) basta criar uma rotina com o gatilho de Webhook com a opção "Receive a web request"
- Será solicitado um "Event Name" o qual pode ser qualquer nome que desejar.
- Após isso selecione o seu dispositivo, no meu caso é um dispositivo que utiliza o aplicativo "ewelink", logo, no IFTT pesquisei por esse nome e selecionei o meu dispositivo e selecionei para ligar a mesma.
- Feito isso basta clicar na rotina criada e clicar no icone do "Webhooks" e clicar em "Documentation" e copiar a chave secreta disponibilizada.
- Com a chave em maõs abra a pasta do projeto e crie um arquivo env.js e cole o seguinte código:
```javascript
var SECRET_KEY = "Cole aqui sua chave privada";

export var SECRET_KEY;
```
- Após salvar o arquivo vá no arquivo scripts.js e substitua a constante "eventName" pelo nome que você utilizou no IFTTT
- Repita o processo para poder utilizar a função de desligar a luz.

# Como usar
Para poder utilizar basta abrir o arquivo index.html e pronto!