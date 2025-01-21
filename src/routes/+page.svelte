<script lang="ts">
	import Product from "$lib/components/Product.svelte";
	import Sidebar from "$lib/components/Sidebar.svelte";


</script>


<div class="main-wrapper flex relative ">
    
<Sidebar />
<div class="w-full badge grid grid-cols-4 gap-4 ml-[360px] px-[200px] pt-[64px]  ">
  
   <div class="">
    <Product />
   </div>
   <div class="">
    <Product />
   </div>
   <div class="">
    <Product />
   </div>
   <div class="">
    <Product />
   </div>
   <div class="">
    <Product />
   </div>
   <div class="">
    <Product />
   </div>
   <div class="">
    <Product />
   </div>
   <div class="">
    <Product />
   </div>
   <div class="">
    <Product />
   </div>
   <div class="">
    <Product />
   </div>
   <div class="">
    <Product />
   </div>
   <div class="">
    <Product />
   </div>
   <div class="">
    <Product />
   </div>

    
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

