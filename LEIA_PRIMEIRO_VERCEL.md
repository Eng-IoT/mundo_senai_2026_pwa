# Mundo SENAI 2026 — publicação na Vercel

Este pacote preserva o aplicativo das seis equipes, a logo original SENAI Hub,
as imagens WebP, os roteiros de fala e o rodapé Mundo SENAI 2026.
A mudança está na organização dos arquivos para publicação.

## Por que a tela pode mostrar 404

A imagem enviada mostra NOT_FOUND, mas não identifica a URL ou o projeto.
O pacote anterior continha app/index.html. Publicar todo aquele pacote como raiz,
sem selecionar app como pasta do site, pode deixar o endereço inicial sem index.html.
Também é necessário verificar se a URL corresponde ao deploy ativo.
Neste pacote, index.html e vercel.json já estão na raiz do ZIP.

## Publicar este pacote pelo GitHub

1. Extraia este ZIP no computador.
2. Na pasta extraída, confira que index.html está AO LADO de vercel.json e da pasta assets.
3. No repositório conectado ao projeto Vercel, coloque esses arquivos e a pasta assets
   na pasta escolhida como raiz do projeto. Não envie apenas o ZIP como um arquivo
   para o repositório: o conteúdo precisa estar extraído. Evite uma pasta adicional
   entre a raiz escolhida e index.html.
4. Faça o commit dos arquivos. Não apague outros projetos ou diretórios do repositório.
5. Na Vercel, abra o projeto correto e entre em Settings > Build and Deployment
   (o nome da seção pode variar conforme a interface).
6. Confira os valores abaixo e salve. Se houver um diretório raiz antigo, ajuste-o
   para a pasta que contém os arquivos deste pacote.
7. Abra Deployments e aguarde o deploy do novo commit ou faça Redeploy.
   Confira que o deploy utiliza esse commit e termina como Ready.
8. Abra a URL do deploy recém-concluído. Só depois confira o domínio principal.

## Valores de configuração

| Campo | Valor para este pacote |
|---|---|
| Framework Preset | Other |
| Root Directory | Raiz do repositório, caso index.html esteja na raiz; ou a subpasta exata que contém index.html e vercel.json |
| Build Command | Sem comando; vazio |
| Install Command | Sem comando; vazio |
| Output Directory | . (um ponto) |

O vercel.json incluído define framework nulo (Other), comandos vazios e saída na raiz.
Ele precisa estar dentro da Root Directory selecionada. Nenhuma configuração pode
corrigir a escolha de uma pasta raiz que não contenha os arquivos do aplicativo.
Não é necessário instalar Next.js, React ou executar npm run build.

## Se quiser utilizar o pacote anterior

Se o conteúdo anterior foi extraído na raiz do repositório como app/index.html,
a alternativa é apontar Root Directory para app, com Framework Other, sem build
e Output Directory igual a . . Esta alternativa se aplica à estrutura anterior;
no novo pacote não existe a pasta app.

## Conferir imagens e instalação PWA

- Verifique se a página inicial apresenta a logo e as fotografias.
- Verifique as seis equipes e as abas Estudar, Fala, Demonstração e Perguntas.
- Abra os caminhos /manifest.webmanifest e /sw.js no mesmo domínio: devem retornar
  os arquivos correspondentes, sem o 404 da Vercel e sem HTML de página de erro.
- O aplicativo usa rotas com #, por exemplo #/equipe/1/estudar. Não precisa de uma
  regra que transforme todos os endereços em index.html; isso pode ocultar arquivos
  de imagens ou de PWA ausentes.
- Para instalar, acesse em HTTPS. Primeiro abra online e aguarde a mensagem
  Disponível para uso offline. A instalação depende do navegador do aparelho.
- Depois de instalar, teste sem conexão antes do evento.
- Checklist e anotações ficam no navegador. Exporte os registros antes de limpar
  dados do site ou trocar de aparelho. O guia não conecta nem comanda o CLP.

## Limite desta correção

A estrutura deste ZIP e os arquivos PWA foram conferidos localmente.
Sem a URL do projeto não foi possível confirmar nem modificar o deploy mostrado
na imagem. Se o erro continuar, envie a URL do site para conferir o projeto correto,
o diretório publicado e o deploy ativo.

## Documentação oficial consultada em 31/10/2026

- https://vercel.com/kb/guide/how-to-debug-404-errors
- https://vercel.com/docs/project-configuration/vercel-json
- https://vercel.com/docs/errors/not_found
