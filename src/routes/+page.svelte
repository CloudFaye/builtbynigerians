<script lang="ts">
export let data: PageData
import Sidebar from "$lib/components/Sidebar.svelte";
import type { PageData , Actions} from "./$types";
import { Button } from "$lib/components/ui/button";
import Mail from "lucide-svelte/icons/mail";
import { onMount } from 'svelte';

const listings = data.allListings;
let searchTerm = '';
let filteredListings = data.allListings;



//function to filter listings based on search term 
$: filteredListings = searchTerm
  ? data.allListings.filter( listing => 
    listing.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  : data.allListings;

  const images = [
    'src/lib/images/hero-image-1.jpg',
    'src/lib/images/hero-image-2.jpg',
    'src/lib/images/hero-image-3.gif',
    'src/lib/images/hero-image-4.jpg'

  ];

let mouseX = 0;
let mouseY = 0;
let scrollY = 0;

// function to handle mouse movement 
function handleMouseMove(event: { clientX: number; clientY: number; }){
  mouseX = event.clientX;
  mouseY = event.clientY;
  updateCardPositions();
  
}

 



// function to update card positions based on mouse movement

function updateCardPositions(){
  const cards = document.querySelectorAll('.cards');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardX = rect.left + rect.width / 2;
    const cardY = rect.top + rect.height / 2;
    const deltaX = (mouseX - cardX) * 0.02;
    const deltaY = (mouseY - cardY) * 0.02;
    


      // Calculate new position based on scroll
      const scrollOffset = scrollY * 0.1; // Adjust multiplier for scroll effect
      const newX = deltaX + scrollOffset;
      const newY = deltaY + scrollOffset;

      // Apply new position
      (card as HTMLElement).style.transform = `translate(${newX}px, ${newY}px)`;
    });
  }

    // Add event listeners on mount
    onMount(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });

 



</script>

<div class="main-wrapper min-h-[500vh] flex p-10 pt-40 flex-col items-center justify-start relative ">
    
<h1 class=" w-[50%] text-[64px] 
text-white
tracking-tighter 
text-balance leading-[72px] text-center mb-4 ">250+ Directories to submit your designs to</h1>
<p class='text-lg 
text-white
 font-medium mb-3'>Explore the best directories to showcase your designs. </p>
<div class="flex mt-2 flex-row gap-2">
  <Button class='h-[48px]' variant='secondary'>Get this list</Button>
<Button class='h-[48px]' >
  <Mail class="mr-2 size-4" />Submit for me</Button>
</div>
 


<!--  <div class="cards border-5 absolute left-14 border-wh bg-gray-100 rounded-lg w-[170px] h-[200px] ">
  <img class="object-cover w-full h-full" src={images[0]} alt="">
</div>
<div class="cards border-5 absolute right-14 border-white bg-gray-100 rounded-lg w-[170px] h-[200px] ">
  <img class="object-cover w-full h-full" src={images[1]} alt="">
</div>
<div class="cards border-5 absolute top-[500px] right-[264px]  border-white bg-gray-100 rounded-lg w-[170px] h-[200px]  ">
  <img class="object-cover w-full h-full" src={images[2]} alt="">
</div>
<div class="cards border-5 absolute top-[450px] left-[364px]  border-white bg-gray-100 rounded-lg w-[170px] h-[200px]  ">
  <img class="object-cover w-full h-full" src={images[3]} alt="">
</div> -->

<div class="mt-[400px] w-full ">
  <div class=" flex flex-col items-center justify-center ">
    <h1 class=' w-[45%] gap-6 text-[52px] tracking-tight text-balance text-center leading-[64px] text-white  '> So you've completed that amazing design, or project
      , How to show it off? Like a true designer ? <br>
      <span>
        <p class=' text-[24px] mt-6 leading-[32px] text-balance tracking-tight text-white'>
          Very often, we as web artisans fatigued very fast when it comes to posting your works on social media and where it matters
        </p>
      </span>
    </h1>
    <select class='w-fit' name="" id="">
      <option value="val 1">1</option>
    </select>
    <!-- option component-->
  </div>
  <div class="man badge align-top mt-20 ">
  
   {#each filteredListings as listing}
      
       
          <a href={`/${listing.id}`} class=" block bg-[#ffffff06] p-8 hover:bg-[#ffffff13] rounded-[16px] ">
            
             <img class=' rounded-[18px] image bg-gray-900 ' src={listing.image} alt=""> 
              
              
                <div class="h-fit text-white short">
                  <h1 class='mb-2 text-xl '>{listing.name}</h1>
                  <p>{listing.url}</p>
                  
              </div>
         
          </a>

        
      
       {/each}
  
      
  </div>
  
</div>












</div> 





<style lang="postcss">


@media (min-width: 768px){
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


.cards {
  background-color: #e3e3e3;
  padding: 10px;
  border-radius: 14px;
  transition: transform 6s cubic-bezier(0, 0, 0.2, 1);
}

img {
  border-radius: 8px;
  width: 100%;
  object-fit: cover;
  
  
}

.man{
 
  
 
  width: 100%;
  color: white;
  gap: 72px;
  padding: 0px 272px;
  
  column-count: 3;
  place-items: start;
 
  
  

}

.image {
  height: 100%;
  margin-bottom: 16px;
}

 .short {
grid-row: span 1;
margin: 12px 0px;
border-radius: 8px;
 }


 a {
  margin-bottom: 72px;
  width: 100%;
 }

</style>

