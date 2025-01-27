<script lang='ts'>
import type { PageData } from './$types';
export let data: PageData;
import Mansory from '$lib/components/Mansory.svelte';
</script>


<main class=" mx-auto py-4 flex  items-center bg-[#ebeef1] ">
    {#if data.listing}
   
        <div class="w-full">
        <h1 class='text-4xl mb-6 text-semibold'>Download {data.listing.name} vector (SVG) logo</h1>
        <div class="group">
          <div class=" w-fit h-fit p-10 rounded-[20px] bg-white  ">
            <img class='w-full ' src={data.listing.image} alt="">
            <h1>{data.listing.name}</h1>

            </div>
          <div class="p-10 w-fit h-fit rounded-[20px] bg-white  ">
           
            <h1>{data.listing.category}</h1>
          </div>
          <div class="p-10 w-fit h-it rounded-[20px] bg-white  ">
            
            <h1>{data.listing.details}</h1>
          </div>
          
          <div class=" w-fit h-fit rounded-[20px] bg-white  ">1</div>
          <div class=" w-fit h-fit rounded-[20px] bg-white  ">1</div>
          <div class=" w-fit h-fit rounded-[20px] bg-white  ">1</div>
        </div>
        <div class=" my-5 ">
          The company
        </div>
        </div>
        
       
    



     
    {/if}
</main>



<style>
    img{

        image-rendering: optimizeQuality;
        object-fit: contain;
        height: 100px;
        padding: 24px;
 }


 .group{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: masonry;
  gap: 1rem;
 }
</style>
