<template>
  	<div>
	   	<h3>About</h3>
	   	<div class="card">
	      <div class="card-header">
	        Details
	      </div>
        <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
      </div>
  </div>
</template>

<script>
import db from '@/db'
export default {
  name: 'About',
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
