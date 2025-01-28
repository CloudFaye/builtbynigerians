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

<div class="main-wrapper min-h-[500vh] flex p-4 pt-16 flex-col items-center justify-start relative ">
    
<h1 class='header' >250+ Directories to submit your designs to</h1>
<p class='paras'>Explore the best directories to showcase your designs. </p>
<div class="button-group">
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
  <div class=" mb-[100px] px-[10%] flex flex-col items-center justify-center ">
    <h1 class=' text-left text-5xl w-full gap-6 leading-[56px]  tracking-tight text-balance  text-white  '> So you've completed that amazing design, or project
      , How to show it off? Like a true designer ? <br>
      <span>
        <p class=' text-5xl text-balance leading-[56px] mt-6  text-gray-500'>
          Very often, we as web artisans fatigued very fast when it comes to posting your works on social media and where it matters
        </p>
      </span>
    </h1>
    <!-- option component-->
  </div>
  <div class="man align-top badge ">

   {#each filteredListings as listing}


          <a href={`/${listing.id}`} class=" block bg-[#ffffff10] p-8 hover:bg-[#ffffff16] rounded-[16px] ">

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
  gap: 24px;
  padding: 0px 8px;

  column-count: 1;
  place-items: start;

}


@media (min-width: 500px) {
  .man {
    column-count: 2;
    place-items: start;  /* 2 columns from 500px */
  }
}

@media (min-width: 800px) {
  .man {
    column-count: 3; 
    place-items: start; /* 3 columns from 800px */
  }
}

@media ( min-width: 1200px) {
  .man {
    column-count: 4; 
    place-items: start;
    padding: 0px 24px; /* 3 columns from 800px */
  }
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
  margin-bottom: 40px;
  width: 100%;
 }

 .header {
text-wrap: balance;
font-size: 48px;
color: white;
text-align: center;
line-height: 56px;
margin-bottom: 12px ;
font-weight: 700;

 }

 @media (min-width: 500px) and (max-width: 800px)  {
  .header {
    font-size: 56px;
    line-height: 64px;
    font-weight: 700;
  }
}


@media (min-width: 850px){
  .header {
    font-size: 72px;
    line-height: 80px;
    font-weight: 700;
  }
}


.paras {
  font-size: 18px;
  color: white;
  text-align: center;
  font-weight: 400;
  margin-bottom: 12px;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 12px;
  flex-direction: column;
}

@media (min-width: 500px) and (max-width: 3000px) {
  .button-group {
    flex-direction: row;
    display: flex;
    gap: 24px;
    margin-top: 24px;
  }
}
</style>



 