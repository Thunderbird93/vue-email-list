const { createApp } = Vue;

createApp ({
    data(){
        return {
            emailGenerated: [],
            nEmail: 10,
            isInLoading: false
        }
    },
    methods: {
        getApi(){
            this.isInLoading = true;
            this.emailGenerated = [];
            for(let i = 0; i < this.nEmail; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(email => {
                    this.emailGenerated.push(email.data.response);
                })
            }
        },
        checkEmailGenerated(){
            return this.emailGenerated.length == this.nEmail;
        }
    }
}).mount('#app')
