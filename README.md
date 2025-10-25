# Padrões de Projeto GoFs

Este repositório contém o material e as implementações desenvolvidas pelo grupo durante a disciplina de **Desenho de Software**, com foco no estudo e aplicação dos **Padrões de Projeto GoF (Gang of Four)**.  
O objetivo do trabalho é compreender como esses padrões contribuem para o **desenvolvimento de sistemas mais organizados, flexíveis e reutilizáveis**, aplicando boas práticas de arquitetura e engenharia de software.

---

## 📘 Estrutura do Projeto

O conteúdo foi dividido em três módulos principais, de acordo com a classificação clássica dos padrões GoF:

### 🔹 3.1. Padrões de Projeto GoFs Criacionais
Exploram maneiras de **criar objetos de forma controlada e flexível**, abstraindo o processo de instanciação e promovendo o desacoplamento entre a criação e o uso dos objetos.  
Esses padrões ajudam a manter o código limpo e extensível, evitando dependências rígidas em classes concretas.

### 🔹 3.2. Padrões de Projeto GoFs Estruturais
Focam na **organização e composição de classes e objetos**, buscando formar estruturas maiores sem comprometer a simplicidade.  
Esses padrões permitem integrar componentes, adicionar funcionalidades e construir arquiteturas modulares e de fácil manutenção.

### 🔹 3.3. Padrões de Projeto GoFs Comportamentais
Tratam da **interação entre objetos** e da forma como a comunicação é estabelecida dentro do sistema.  
Esses padrões ajudam a reduzir o acoplamento e a definir fluxos de comportamento dinâmicos e extensíveis.

---

## 🧠 Objetivo Geral

O projeto teve como propósito principal **aprofundar o entendimento sobre os Padrões de Projeto GoF** e **aplicá-los na prática**, analisando como cada categoria contribui para a melhoria do design de software.  
Com isso, foi possível desenvolver uma visão mais crítica sobre a importância da arquitetura e das boas práticas na construção de sistemas robustos e escaláveis.

---

## ⚙️ Tecnologias Utilizadas

- **Linguagem:** TypeScript
- **Ambiente de Desenvolvimento:** Node.js  
- **Ferramentas:** Visual Studio Code, GitHub Pages  
- **Controle de Versão:** Git  

---

## Tecnologia (Documentação)

A geração do site estático é realizada utilizando o [docsify](https://docsify.js.org/).

```shell
"Docsify generates your documentation website on the fly. Unlike GitBook, it does not generate static html files. Instead, it smartly loads and parses your Markdown files and displays them as a website. To start using it, all you need to do is create an index.html and deploy it on GitHub Pages."
```

### Instalando o docsify

Execute o comando:

```shell
npm i docsify-cli -g
```

### Executando localmente

Para iniciar o site localmente, utilize o comando:

```shell
docsify serve ./docs
```
