<template lang="html">

  <section class="src-components-condificado">
    <h1>Final Sasha Berkowsky</h1>
    <hr/>
    <input 
      type="text" 
      name="nombre"
      id="nombre" 
      required
      autocomplete="off"
      v-model="text"
    >
    <hr/>
    <p v-if='textLength>0'>Cantidad: {{textLength}}</p>
    <p>Codificado: {{text | codificado}}</p>
    <p>Todo Minuscula: {{text | minuscula}}</p>
    <p>Todo Mayuscula: {{text | mayuscula}}</p>
    <p>Mayus-Min intercalado: {{text | intercaladoA}}</p>
    <p>Min-Mayus intercalado: {{text | intercaladoB}}</p>
   
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-condificado',
    props: [],
    mounted () {

    },
    data () {
      return {
        text:''
      }
    },
    methods: {

    },
    computed: {
      textLength(){
        return this.text.length
      }
    }
}


</script>

<style scoped lang="css">
.src-components-condificado {
}
</style>
