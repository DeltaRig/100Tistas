Equipe 100Tistas, composta por Arthur Luz, Daniela Rigoli, Júlia Godoy, Louise Dornelles, Manoella Azevedo e Waldyr Schneider

# Como tornar a Internet um lugar mais saudável?
## Trilha: Saúde mental

## Motivação

Os transtornos mentais caracterizam-se como um dos principais fatores responsáveis pelo aumento da morbimortalidade em nível global, principalmente devido à natureza crônica e incapacitante da depressão e outros transtornos mentais comuns (1). O número total de pessoas convivendo com depressão, que corresponde a um dos transtornos mentais mais comuns, aumentou 18,4% de 2005 a 2015 (2).

Já foi verificado que as redes sociais virtuais podem gerar grandes impactos na vida de qualquer pessoa, dentre eles: a ansiedade, depressão e dependência. Isso ocorre principalmente devido ao cyberbulling (3) além de ser explicado po Jaron Lanier em seu livro "Ten Arguments For Deleting Your Social Media Accounts Right Now" (4), onde ele explica que as redes sociais tem poder de influenciar no que falamos. Isso também é explicado por neurologistas, porque o ambiente no qual estamos inseridos influênciar em nossos comportamentos e o ambiente online também é capaz de servir como modulador. 

Com base nisso o grupo buscou uma forma de minimizar o impacto de palavras de odio e ofensas nas redes sociais por meio de uma extensão de navegador, 

# Objetivo
Uma extensão para o navegador Google Chrome que identifica palavras ofensivas e toma uma ação com a etimologia da palavra com o objetivo de desconstruir a palavra e minimizar o impacto negativo.

# Solução
A solução foi elaborada seguindo o seguinte fluxo:

[<img src="https://user-images.githubusercontent.com/41764692/170822415-c9c8b8e8-6ed6-427c-801e-dc55d941588d.png" width="400"/> ](https://user-images.githubusercontent.com/41764692/170822415-c9c8b8e8-6ed6-427c-801e-dc55d941588d.png)

### Perspective API
Essa API, desenvolvida pelo grupo, tem como objetivo identificar palavras de odio dentro de um texto. Esta hospedada em:

> http://ec2-34-220-79-2.us-west-2.compute.amazonaws.com:5000/


### API de dicionário português
Essa API nesse projeto é responsável por receber uma palavra e retornar sua etimologia e significado. A API feita por [Thiago Nelsi](https://github.com/ThiagoNelsi/dicio-api) que recebe uma palavra e retorna as informações de um site de dicionário português. Colocamos aqui no repositório e hospedamos:

> http://ec2-34-220-79-2.us-west-2.compute.amazonaws.com:3333/

Sendo necessário para obter as informações da API a seguinte solicitação:

> http://ec2-34-220-79-2.us-west-2.compute.amazonaws.com:3333/v2/<PALAVRA>
  
Um exemplo de entrada é:
  
> http://ec2-34-220-79-2.us-west-2.compute.amazonaws.com:3333/v2/maldito
  
Que tem como output:

```
[{"partOfSpeech":"adjetivo","meanings":["Que foi alvo de maldição, que foi amaldiçoado; condenado, amaldiçoado.","Muito desagradável; muito mau; perverso: tempo maldito; negócio maldito.","Que carrega a infelicidade consigo; funesto, infeliz.","[Artes] Que sofreu condenação da sociedade; cujo valor artístico não foi reconhecido.","[Literatura] Diz-se dos poetas cujas obras foram rejeitadas: poetas malditos."],"etymology":""},{"partOfSpeech":"substantivo masculino","meanings":["Pessoa amaldiçoada, condenada: Ide, malditos, para o fogo eterno!","[Literatura] Poeta rejeitado, desprezado."],"etymology":""},{"partOfSpeech":"expressão","meanings":["[Popular] O maldito. O demônio."],"etymology":"Etimologia (origem da palavra maldito). Do latim maledictus, a, um “amaldiçoado, condenado”."}]    
```

### Referências
1. Vigo D, Thornicroft G, Atun R. Estimating the true global burden of mental illness. The Lancet Psychiatry 2016;3(2):171-8
2. Vos T, Allen C, Arora M, Barber RM, Brown A, Carter A, et al. Global, regional, and national incidence, prevalence, and years lived with disability for 310 diseases and injuries, 1990-2015: a systematic analysis for the Global Burden of Disease Study 2015. Lancet 2016;388(10053):1545–602. 
3. Souza K., Ximenes Carneiro da Cunha M. [IMPACTOS DO USO DAS REDES SOCIAIS VIRTUAIS NA SAÚDE MENTAL DOS
ADOLESCENTES: UMA REVISÃO SISTEMÁTICA DA LITERATURA](https://educacaoepsicologia.emnuvens.com.br/edupsi/article/view/156) 2019.
4. Jaron Lanier, Ten Arguments For Deleting Your Social Media Accounts Right Now
- Perinia J., Delanogarea E., Souza S. [Transtornos Mentais Comuns e aspectos psicossociais em universitários do sul do Brasil](http://repositorio.furg.br/handle/1/7872)
