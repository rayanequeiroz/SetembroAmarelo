<template>

<v-expansion-panels
    focusable>
    <v-expansion-panel
    v-for="(item,i) in items"
      :key="i">
      <v-expansion-panel-header>{{item.nome}}</v-expansion-panel-header>
      <v-expansion-panel-content>
        {{item.sobre}}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

</template>

<script>
export default {
    name: 'Infos',

    data(){
      return {
          items: [
              {nome: 'Depressão 😞', sobre: 'A depressão é caracterizada pela perda ou diminuição de interesse e prazer pela vida, gerando angústia e prostração, algumas vezes sem um motivo evidente. Esse transtorno psiquiátrico atinge pessoas de qualquer idade — embora seja mais frequente entre mulheres — e exige avaliação e tratamento com um profissional. O desânimo sem fim é fruto de desequilíbrios na bioquímica cerebral, como a diminuição na oferta de neurotransmissores como a serotonina, ligada à sensação de bem-estar. '},
              {nome: 'Ansiedade 😰', sobre: 'Ansiedade é um sentimento ligado à preocupação, nervosismo e medo intenso. Apesar de ser uma reação natural do corpo, a ansiedade pode virar um distúrbio quando passa a atrapalhar nosso dia a dia. De fato, os transtornos de ansiedade são mais comuns do que se imagina.'},
              {nome: 'Esquizofrenia 🥴', sobre: 'A esquizofrenia é o principal transtorno psicótico, caracterizado como uma síndrome que provoca distúrbios da linguagem, pensamento, percepção, atividade social, afeto e vontade.'},
              {nome: 'Transtornos Alimentares 🍗', sobre: 'A anorexia nervosa é um dos transtornos alimentares mais comuns e se caracteriza pela perda de peso intencional, provocada pela recusa à alimentação, distorção da própria imagem e medo de engordar. Já a bulimia que também é relativamente frequente, consiste em comer grandes quantidades de comida e, em seguida, tentar eliminar as calorias de formas prejudiciais, como pela indução do vômito, uso de laxantes, exercício físico muito intenso ou jejum prolongado.'},
              {nome: 'Transtorno bipolar 🤯', sobre: 'O transtorno bipolar é a doença psiquiátrica que provoca oscilações imprevisíveis no humor, variando entre depressão, que consiste em tristeza e desânimo, e mania, impulsividade e característica excessivamente extrovertida.'},
              {nome:'Somatização 😖', sobre: 'A somatização é um transtorno em que a pessoa apresenta múltiplas queixas físicas, referentes a diversos órgãos do corpo, mas que não são explicadas por nenhuma alteração clínica. Geralmente, são pessoas que constantemente vão ao médico com muitas queixas, e na avaliação médica, exame físico e realização de exames, nada é detectado.'},
              {nome:'Transtorno obsessivo-compulsivo 🧐', sobre: 'Também conhecido com o TOC, este transtorno provoca pensamentos obsessivos e compulsivos que prejudicam a atividade diária da pessoa, como exagero em limpeza, obsessão por lavar as mãos, necessidade de simetria ou impulsividade por acumular objetos, por exemplo.'},
              {nome:'Estresse pós traumático 😡', sobre: 'O estresse pós traumático é a ansiedade que surge após ser exposto a alguma situação traumática, como um assalto, uma ameaça de morte ou perda de um ente querido, por exemplo. Geralmente, a pessoa afetada revive persistentemente o ocorrido com recordações ou sonhos, e apresenta intensa ansiedade e sofrimento psicológico.'},
              {nome:'Fobia social 😶', sobre: 'Para pessoas com fobia social (também chamada transtorno de ansiedade social), atuar em público causa uma ansiedade intensa. Isso acontece em situações cotidianas que envolvem interação social, pois quem tem esse tipo de fobia tende a temer julgamento, critica ou alguma possibilidade de ser ridicularizado.'},
              {nome:'TAG (Transtorno de ansiedade generalizada) 😬', sobre: 'A TAG é diferente dos sentimentos normais de ansiedade. Sua principal característica é uma preocupação intensa e persistente sobre situações normais e cotidianas. Quem tem este tipo de transtorno pode se preocupar incontrolavelmente com algo, várias vezes ao dia, mesmo que não haja motivo real para isso.'}
          ]
      }
    }
}
</script>

<style>

</style>