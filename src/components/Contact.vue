<template>
  	<div>
	   	<h3>Contact Us</h3>
	   	<div class="card">
	      <div class="card-header">
	        Details
	      </div>
        <div id="contact-card">
          <div></div><br/>
          <h4>Blockvisors Consulting</h4>
           <h4>New York, NY</h4>
            <h4>info@blockvisor.co</h4>
           <h4>+1 212 256-1485</h4>
        </div>
      </div>
  </div>
</template>

<script>
import db from '@/db'
export default {
  name: 'Contact',
  data () {
    return {

    }
  },
  beforeCreate (){
	  // db.collection('products').where(doc.id, '==' this.$route.params.id).then(querySnapshot =>{
	  //   const products = []
	  //   const productsArray = []
	  //   let i = 0
	  //   querySnapshot.forEach((doc)=>{
	  //     productsArray.push(doc.data())
	  //     productsArray[i].id = doc.id
	  //     products.push(productsArray[i])
	  //     i++
	  //   })
	  //   this.products = products
    // })
    //add price card stuff to db


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
h4{
  text-align: left;
  margin-top: 30px;
  margin-bottom: 20px;
}
#contact-card{
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 50px;
  padding-bottom: 50px;
}

</style>
