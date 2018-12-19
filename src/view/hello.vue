 <template>
   <div class="hello_text">{{message}}</div>
 </template>

 <script>
   export default {
     data () {
       return {
         message: 'Hello World!'
       }
     },
     mounted () {
       console.log(this.$store)
     }
   }
 </script>