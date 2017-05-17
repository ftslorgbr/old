# ftslorgbr.github.io
Parte estática do Site do FTSL - Fórum de Tecnologia em Software Livre (http://ftsl.org.br)

Colabore com código do site, enviando correções, reportando erros (issues).

# Para executar localmente
* instale o jekyll (https://jekyllrb.com/docs/installation) com "gem install jekyll bundler"
* navegue para o diretorio local do repositorio, por exemplo "cd ftslorgbr.github.io"
* baixe as gems utilizadas no projeto com 'bundle install'
* execute o jekyll com "bundle exec jekyll serve"
* acesse http://localhost:4000

# Executando localmente com docker ([fonte](https://github.com/jekyll/docker/wiki/Usage:-Running))
  docker run --rm --label=jekyll --volume=$(pwd):/srv/jekyll \
  -it -p 127.0.0.1:4000:4000 jekyll/jekyll jekyll serve

# No meu debian 8 e Ubuntu 16.04 preferi (pois deu erro de permissão nas gems) instalar uma versao mais atualizada do ruby e usei o seguinte endereço como base:
https://www.digitalocean.com/community/tutorials/how-to-install-ruby-on-rails-with-rbenv-on-debian-8
