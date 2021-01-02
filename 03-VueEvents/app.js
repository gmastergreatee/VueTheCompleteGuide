const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    add(num = 1) {
      this.counter += num;
    },
    reduce(num = 1) {
      this.counter -= num;
    },
    setName(e) {
      this.name = e.target.value;
    },
    
    submitForm() {
      alert('Submitted successfully');
    },
    resetInput() {
      this.name = '';
    },
  },
  computed:{
    fullName() {
      return this.name ? this.name + ' Surname' : '';
    },
  }
});

app.mount('#events');
