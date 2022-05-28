<template>
    <v-menu
     v-model="datepicker"
    :close-on-content-click="false"
    transition="scale-transition"
    max-width="290px"
    min-width="auto"
    >
        <template v-slot:activator="{ on, attrs }">
            <input
            v-model="computedDateFormatted"
            v-bind="attrs"
            v-on="on"
            class="space-x-3 card-box bg-white font-bold card-text px-3 ml-4 w-fit h-9 my-3.5"
            >
        </template>
        <v-date-picker
            v-model="date"
            no-title
            @input="datepicker = false"
            class="h-80">
            <v-divider class="bottom-12"></v-divider>
            <div class=" flex grid grid-cols-2 justify-start">
            <div>
                <v-btn class="bottom-8 w-full px-16" color="black" text @click.native="date='';datepicker=''">Clear</v-btn>
            </div>
            <div>
                <v-btn class="bottom-8 w-full" color="black" text @click="datepicker=''">Close</v-btn>
            </div>
            </div>
        </v-date-picker>
    </v-menu>
</template>

<style scoped>
.card-box{
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}
.card-text{
  color: #142E46;
  font-size: 14px;
  align-items: center;
  letter-spacing: 1.5px;
  line-height: 16px;   
}
</style>

<script>
/* eslint-disable */  
  export default {
    data: vm => ({
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
      datepicker: false,
      result:'',
    }),

    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },

    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
        this.getDate()
      },
    },

    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
      },

      getDate(){
         this.$router.push({
         name: "IndexArticleCategory",
         params: { id: this.date },
         });
      },
      
    },
  }
</script>
