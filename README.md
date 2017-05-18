# ftslorgbr.github.io
Parte estática do Site do FTSL - Fórum de Tecnologia em Software Livre (http://ftsl.org.br)

Colabore com código do site, enviando correções, reportando erros (issues), testando a responsividade e desempenho em diferentes dispositivos.

# Para executar localmente

O site foi feito usando o [Jekyll](https://jekyllrb.com), que é um gerador de sites estáticos.

* "gem install jekyll bundler" para instalar o jekyll, [mais informações](https://jekyllrb.com/docs/installation);
* dentro da pasta que contém o código do site (por exemplo ftslorgbr.github.io) execute o comando 'bundle install' para baixar as gems utilizadas no projeto;
* depois "bundle exec jekyll serve" para executar o jekyll (gerar e servir localmente o site) 
* acesse http://localhost:4000

# Executando localmente com docker ([fonte](https://github.com/jekyll/docker/wiki/Usage:-Running))
* navegue para o diretorio local do repositorio, por exemplo "cd ftslorgbr.github.io"
```sh
docker run --rm --label=jekyll --volume=$(pwd):/srv/jekyll \
  -it -p 127.0.0.1:4000:4000 jekyll/jekyll jekyll serve
```
* Se receber a mensagem "jekyll 3.4.3 | Error:  Permission denied @ dir_s_mkdir - /srv/jekyll/_site", crie a pasta _site

# OPCIONAL: instalar ruby 2.3.4 no debian 8 e Ubuntu 16.04
Se preferir  instalar uma versão mais atualizada do ruby (por erro de permissão nas gems na versão que veio instalada), pode usar o seguinte endereço como base:

https://www.digitalocean.com/community/tutorials/how-to-install-ruby-on-rails-with-rbenv-on-debian-8
