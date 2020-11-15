var app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vue and build amazing apps!',
            vueLink: 'https://vuejs.org/',
        };
    },
    methods: {
        outputGoal() {
            let randonNumber = Math.random();
            if (randonNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        },
    },
});

app.mount('#user-goal');
