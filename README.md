<h1 align="center"> TecHass Store </h1

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)



# Loja de Peças de Computador Gamer

Bem-vindo à TecHass Store, o seu destino para comprar as melhores peças usadas de hardware para jogos! Ela existe desde Janeiro de 2023, porém agora pretende iniciar um projeto próprio oficial

## Descrição do Projeto

Esse projeto consiste em um site de e-commerce onde os usuários podem comprar uma ampla variedade de produtos de hardware de alta qualidade voltados para gamers, sendo elas usadas e semi-novas para permitir um preço mais acessível. Nossa plataforma permite que os usuários naveguem por uma seleção exclusiva de produtos, façam pedidos e adicionem itens ao carrinho de compras. Os produtos são cuidadosamente selecionados e postados exclusivamente pela loja.

## Tabela de Conteúdo

- [Instalação](#instalação)
- [Uso](#documento-de-casos-de-uso---tecHass-store)
- [Requisitos](#)
- [Regras de Negócio](#)
- [Funcionalidades](#funcionalidades)
- [Contato](#contato)

## Instalação

Para usar a nossa plataforma, não é necessário instalação local. Basta acessar o site que estará totalmente disponível na conclusão desse projeto. Nosso protótipo pode ser visto em [www.techass.com.br] em seu navegador, seja desktop ou mobile!

# Documento de Casos de Uso - TecHass Store

## Introdução

  Este documento descreve os principais casos de uso da TecHass Store, um projeto de e-commerce voltado para a venda de hardware de jogos.

### Ator Primário

- **Usuário Registrado:** Um usuário que se registrou na plataforma para acessar funcionalidades avançadas, como fazer pedidos, adicionar produtos ao carrinho, salvar informações pessoais e histórico de compras.

### Ator Secundário

- **Administrador da Loja:** O administrador da loja é responsável por postar produtos na plataforma, gerenciar pedidos e monitorar a atividade dos usuários conforme os termos e condições.

## Casos de Uso

### Realizar Compra de um Produto

**Descrição:** O usuário registrado deseja comprar produtos da loja.

**Pré-condições:** O usuário deve estar autenticado (logado) na plataforma.

**Fluxo Básico:**

1. O usuário acessa o site.
2. O usuário navega pelos produtos da loja.
3. O usuário seleciona um ou mais produtos.
4. O usuário adiciona os produtos ao carrinho de compras.
5. O usuário vai para o checkout.
6. O usuário insere as informações de envio e pagamento do produto.
7. O usuário confirma a compra.

**Fluxo Alternativo:**

- Se o usuário desejar adicionar mais produtos após o passo 4, ele pode retornar à página de navegação e repetir o processo.

**Pós-condições:** Os produtos são comprados, o pedido é registrado, o estoque é atualizado e o produto enviado ao comprador.

### Postar Produto (Administrador)

**Descrição:** O administrador da loja deseja postar um novo produto na plataforma.

**Pré-condições:** O administrador deve estar autenticado na plataforma como administrador.

**Fluxo Básico:**

1. O administrador acessa a página de gerenciamento de produtos.
2. O administrador seleciona a opção de "Adicionar um Novo Produto".
3. O administrador preenche as informações do produto, como nome, tipo, descrição, preço, quantidade e disponibilidade (sujeito a adição de mais informações durante o desenvolvimento do projeto).
4. O administrador faz upload de imagens do produto (mínimo de 4 imagens).
5. O administrador publica o produto.

**Pós-condições:** O novo produto é adicionado ao catálogo da loja e fica disponível para os usuários.

### Visualizar Histórico de Pedidos

**Descrição:** O usuário registrado deseja visualizar seu histórico de pedidos anteriores.

**Pré-condições:** O usuário deve estar autenticado na plataforma.

**Fluxo Básico:**

1. O usuário acessa a página de histórico de pedidos.
2. O usuário visualiza a lista de pedidos anteriores.

**Fluxo Alternativo:**

- O usuário pode selecionar um pedido específico para obter detalhes adicionais.

**Pós-condições:** O usuário visualiza seu histórico de pedidos.


### Devolver um produto comprado

**Descrição:** O usuário registrado deseja fazer uma devolução do produto (dentro do prazo de 7 dias segundo a política da empresa)

**Pré-condições:** O usuário deve estar autenticado na plataforma.

**Fluxo Básico:**

1. O usuário acessa a página de contatos.
2. O usuário abre um ticket preenchendo conforme o formulário.
3. Um Email é enviado com a análise do ticket aberto em questão

**Pós-condições:** O pedido é atendido e o usuário tem o dinheiro estornado (se estiver no prazo de devolução).

## Considerações Finais

Este documento de casos de uso fornece uma visão geral das principais funcionalidades do sistema. À medida que o projeto progride, esse documento será atualizado com o passar da criaçao de casos de usos mais detalhados e a elaboração de diagramas de sequência para representar a interação entre os atores e o sistema de forma mais precisa.

# Requisitos (Em andamento...)
## - Funcionais
## - Não Funcionais

# Regras de Negócio (Em andamento...)

# Funcionalidades

- Navegação intuitiva e amigável.
- Cadastro de usuário para salvar informações pessoais e histórico de pedidos.
- Adição de produtos ao carrinho de compras.
- Checkout seguro com opções de pagamento.


## Contato

Se você tiver alguma dúvida, sugestão ou quiser entrar em contato conosco, sinta-se à vontade para nos enviar um e-mail em [contato@lojadepecasgamer.com](mailto:josue.hass@gmail.com).

Agradecemos por escolher a Loja de Peças de Computador Gamer para suas necessidades de hardware para jogos!
