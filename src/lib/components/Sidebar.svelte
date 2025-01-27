<script lang='ts'>
	
	import { Badge, badgeVariants } from "./ui/badge";
	import Button from "./ui/button/button.svelte";
   export let searchTerm: string


</script>


<div class="fixed nav p-6 h-full w-[300px] bg-white border-r-2 border-slate-100  ">

    <div class=" font-tusker text-[40px] tracking-wide  leading-[48px] font-bold mb-6">
       BUILT BY  <br> NIGERIANS
    </div>

    <input
    type="text"
    placeholder="Search listings..."
    bind:value={searchTerm}
    class="search-input"
  />
  
    <p class='mb-4 uppercase text-[12px] font-semibold '> Categories </p>
    <div class="cat-items badge text-black flex flex-wrap gap-2">

     
       <div class=" badge-items">software</div>
       <div class="badge-items">website</div>
       <div class="badge-items">design studio</div>
       <p class='badge-items'>computers</p>
        

        </div>  


    <div class="absolute bottom-0  flex flex-row mb-6">
       <Button style='' variant='ghost'>About</Button>
       <Button style='' variant='ghost'>Feature</Button>
       <Button style='' variant='ghost'>Twitter</Button>
    </div>

</div>


<style lang="postcss">
@media (min-width: 768px) {

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
   
  }







.badge-items{
      display: flex;
      flex-wrap: wrap;
      gap: 2px;
      background-color: rgb(255, 255, 255);
      padding: 4px 12px;
      border-radius: 40px;
      font-size: 12px;
      font-weight: 500;
      
}

.nav{
   visibility: hidden;
}

@media (min-width: 768px) {
  .nav {
   visibility: visible;
  }
}

.search-input {
    margin-bottom: 20px;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    border: 1.5px solid rgb(167, 167, 167);
    border-radius: 12px;
  }

</style>

