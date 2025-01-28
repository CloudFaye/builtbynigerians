<script lang="ts">

    import type { PageData } from './$types';
    import { Info } from 'lucide-svelte';

</script>


<div class="text-white w-full h-screen flex flex-col items-center justify-start">
    <h1 class="header">
        Design Cheat Sheet for crazy good UIs
    </h1>
    <p class='paras'>Check out the <strong>Cheat Sheet</strong> 
        to get a quick rundown of how most UI patters are designed </p>



        <h1 class="header">
           Featured Recipes 🔥🥞
         </h1>
             
    <div class="recipe-cards">
        <article class=' '>
             <div class=" bg-black rounded-[400px] w-[40px] h-[40px]  flex items-center justify-center ">
                <Info class=' stroke-black fill-white' />
             </div>
            

            <img src="/favicon.png" alt="">
            <h2>UI Cheats</h2>
        </article>

        <article>
            <img src="/favicon.png" alt="">
            <h2>UX Cheats</h2>
        </article>

        <article>
            <img src="/favicon.png" alt="">
            <h2>Web layouts</h2>
        </article>

        <article>
            <img src="/favicon.png" alt="">
            <h2>Tools to 10x your workflows</h2>
        </article>
    </div>

    <h1 class="header">
       Tips and Hacks
    </h1>
        
</div>



<style lang='postcss'>
    .header{
        font-size: 3rem;
        font-weight: 700;
        margin: 100px 100px 0px ;
    }
    .paras{
        font-size: 1.5rem;
        font-weight: 400;
    }


    .recipe-cards {
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: start;
        margin: 40px 0px;
        gap: 40px;

    }

    article {
        padding: 40px;
        width: 100%;
        border-radius: 12px;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        margin-bottom: 40px;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        color: black;
        text-align: center;
    }

</style>