const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
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
    confirmName() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('Submitted successfully');
    },
  }
});

app.mount('#events');
