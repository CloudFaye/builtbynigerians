<script lang='ts'>
	
	import { Badge, badgeVariants } from "./ui/badge";
	import Button from "./ui/button/button.svelte";


</script>


<div class="fixed p-6 h-full w-[340px] bg-white border-r-2 border-slate-100  ">

    <div class=" font-tusker text-[60px] tracking-wide  leading-[64px] font-bold mb-6">
       BUILT BY  <br> NIGERIANS
    </div>

    <div class="cat-items badge text-black flex flex-wrap gap-2">
  
       <div class=" badge-items">software</div>
       <div class="badge-items">website</div>
       <div class="badge-items">design studio</div>
       <p class='badge-items'>computers</p>
        

        </div>  


    <div class="absolute bottom-0  flex flex-row gap-4 mb-6">
       <Button style='' variant='ghost'>About</Button>
       <Button style='' variant='ghost'>Feature</Button>
       <Button style='' variant='ghost'>Twitter</Button>
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



.badge-items{
      display: flex;
      flex-wrap: wrap;
      gap: 2px;
      background-color: rgb(234, 236, 239);
      padding: 4px 12px;
      border-radius: 40px;
}
</style>

