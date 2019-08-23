<template>
  	<div>
	   	<h3>Pricing Details</h3>
	   	<div class="card">
	      <div class="card-header">
	        See Pricing Below
	      </div>
          <div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card-group">
  <div class="card">
    <img class="card-img-top" src="//placehold.it/1000x18000" width="100" height="180" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="//placehold.it/1000x18000" width="100" height="180" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="//placehold.it/1000x18000" width="100" height="180" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
		</div>
    </div>
</template>

<script>
import db from '@/db'
export default {
  name: 'Pricing',
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

</style>
