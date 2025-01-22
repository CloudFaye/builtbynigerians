<script lang="ts">

	import Product from "$lib/components/Product.svelte";
	import Sidebar from "$lib/components/Sidebar.svelte";
	import type { PageData , Actions} from "./$types";
	
  

  export let data: PageData
  


  const listings = data.listings
  console.log(listings);


</script>

<div class="main-wrapper flex relative ">
    
<Sidebar />
<div class="w-full badge grid grid-cols-4 gap-4 ml-[360px] px-[40px] pt-[64px]  ">

   
  <form method="POST" >
   <input class='border border-black' type="text" name="name" placeholder="enter name" >
   <select class='border border-black' name="category" >
    <option value="framework">Framework</option>
    <option value="software">Software</option>
   </select>
   <input name='details' type="text" class='border border-black' placeholder="enter details">
   <button class='p-2 bg-black text-white' type="submit">submit</button>
  </form>
  

  {#each listings as listing}
  <div class="">
    <h1>{listing.name}</h1>
    <h1>{listing.category}</h1>
    <h1>{listing.image}</h1>
    <h1>{listing.created}</h1>
    <h1>{listing.details}</h1>
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

