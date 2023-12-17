<template>
  
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <Modal :header="header" theme="sale" @close="toggleModal"/>
  </div>
  <button @click="toggleModal">Toggle modal</button>
  <br />
  <div v-if="showSuccess">
    <Modal2 :a="b" theme="success" @close="toggleModal2" />
  </div>
  <button @click="toggleModal2">Toggle Success!</button>
  <!-- <button @click="$event => { console.log('A')}">Click me</button> -->
  <!-- <input type="text" ref="name"  />
  <button @click="handleClick">Click me</button> -->

</template>

<script>
import Modal from './components/Modal.vue';
import Modal2 from './components/SecondModal.vue';

export default {
  name: 'App',
  components: { Modal, Modal2 },
  data() {
    return {
      title: 'My first Vue App title!',
      header: "Sign up for the give away!",
      showModal: false,
      secondTitle: 'Success modal!',
      b: 'This is a success modal!',
      showSuccess: false
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active')
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showSuccess = !this.showSuccess;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.active {
  background-color: teal;
}
</style>
