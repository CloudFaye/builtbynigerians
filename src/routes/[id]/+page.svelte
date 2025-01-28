<script lang='ts'>
import type { PageData } from './$types';
export let data: PageData & { competitorListings: Array<{ name: string }> };
import * as Tabs from "$lib/components/ui/tabs/index.js";
</script>


<main class=" mx-auto py-4 flex flex-col items-center bg-[#ebeef1] ">
    {#if data.listing}
   
        <div class="w-full flex flex-col items-center justify-center ">
        <h1 class='text-[100px] mb-6 text-semibold'>{data.listing.name}</h1>
        </div>


        <div class="flex flex-row items-start justify-between w-full px-[25%] gap-10">
          <div class=" w-[1200px] h-fit p-10 rounded-[20px] bg-white items-center justify-center flex flex-col   ">
            <img class='w-full ' src={data.listing.image} alt="">
            <h1>{data.listing.url}</h1>
          </div>
       
          <div class="w-[1200px] p-6  rounded-[20px] flex items-center justify-center bg-white">
            <Tabs.Root value="account" class="w-full flex flex-col items-center justify-start    ">
              <Tabs.List class=' w-full items-start justify-center flex flex-row h-[80px] '>
                <Tabs.Trigger class='flex h-full' value="ranking">Ranking</Tabs.Trigger>
                <Tabs.Trigger class='flex h-full' value="traffic info">Traffic info</Tabs.Trigger>
                <Tabs.Trigger class='flex h-full' value="guidelines">Guidlines</Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="ranking">
                Make changes to your account here.
              </Tabs.Content>
              <Tabs.Content value="traffic info">
                Change your password here.
              </Tabs.Content>
              <Tabs.Content value="guidelines">
               Cosmos posting guides are simple and straight like but  {#if data.competitors.length > 0}
               but know you're going to be competing with the likes of 
               <strong>    {data.competitors.reduce((acc, c) => {
                  if (acc.length === 0) {
                    return [c.name];
                  } else {
                    return [...acc, c.name];
                  }
                }, [] as string[]).join(', ')}</strong>
           
           {:else}
               and you'll be one of the first listings in this category!
           {/if}
              </Tabs.Content>
            </Tabs.Root>
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
