<script lang="ts">


	import Product from "$lib/components/Product.svelte";
import Sidebar from "$lib/components/Sidebar.svelte";
	import type { PageData , Actions} from "./$types";
	
  
   //exports form data 
  export let data: PageData

  


  const listings = data.allListings
  console.log(listings);

  



</script>

<div class="main-wrapper flex relative ">
    
<Sidebar />
<div class="w-full badge grid grid-cols-2 gap-4 px-[20px] pt-[52px] md:grid-cols-4 md:ml-[360px] md:px-[40px] md:pt-[64px]  ">

   
  <!-- <form method="POST" >
   <input class='border border-black' type="text" name="name" placeholder="enter name" >
   <select class='border border-black' name="category" >
    <option value="framework">Framework</option>
    <option value="software">Software</option>
    <option value="mobile app">Mobile app</option>
    <option value="web app">Web app</option>
    <option value="payments">Payments</option>
   </select>
   <input name='details' type="text" class='border border-black' placeholder="enter details">
   <button class='p-2 bg-black text-white' type="submit">submit</button>
  </form> -->
  

  {#each listings as listing}

  <div class="flex rounded-[18px] flex-col items-start p-4 w-full h-fit border-4 border-double border-slate-200 hover:border-slate-400 ">
    <img class='w-[32px] h-[32px] ' src={listing.image} alt=""> <br>
    <p class='mb-2'>{listing.name}</p> 
    <p class='mb-4'>Category :{listing.category}</p> 
    {listing.details}
    
    

    </div>

    
 
   
  {/each}
</div>
</div>


<style lang="postcss">
    .badge {
       visibility: hidden;
   }

   .badge > * {
       visibility: visible;
   }

   .badge > * { transition: linear 500ms  ; }

  .badge:hover > * { opacity: 0.4;  }

  .badge > *:hover { opacity: 1;  transition-delay: 0ms, 0ms;}

.badge{ 
  cursor: pointer;
}




</style>

