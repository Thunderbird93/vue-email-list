const { createApp } = Vue;

createApp({
    data(){
        return{
            title: 'Benvenuto Ajax',
            numero: ''
        }
    },

    methods:{
        getApi(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(risultato => {
                console.log('Fine chiamata axios', risultato.data);
                this.numero=risultato.data.response
            })
            .catch(erore => {
                thisa.title = errore.code
                console.log(errore.code);
            })
        }
    },

    mounted(){
        this.getApi();
        console.log('Log Axios');
    }
}).mount("#app");