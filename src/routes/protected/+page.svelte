<script lang='ts'>
    import * as Card from "$lib/components/ui/card/index.js";



let password = '';
let isAuthenticated = false;

function authenticate(){
    if (password === 'seun'){
    isAuthenticated = true;
    } else {
        alert('Incorrect password');
    }
};

</script>


<div class=" h-screen  flex flex-row items-center justify-center bg-slate-400 ">

  <Card.Root class="w-[500px]">
    <Card.Header>
     <Card.Title>
      {#if isAuthenticated}
      <h1>Welcome Seun</h1>
      {:else}
      <h1>Enter password</h1>
      {/if}
     </Card.Title>
     <Card.Description>
      {#if isAuthenticated}
      <p>Gotta populate the db somehow amigo </p>
      {:else}
      <p>You need to be authenticated to add a listing</p>
      {/if}
     </Card.Description>
    </Card.Header>
    <Card.Content>
      {#if isAuthenticated}
    <form class=' flex flex-col w-full' method="POST">
      <input class='border border-gray-400 p-4 rounded-[8px] mb-4 w-full  '  type="text" name="name" placeholder="enter name">
      <input class='border border-gray-400 p-4 rounded-[8px] mb-4 w-full  '  name='url' placeholder="website url" type="text">
      <select class='border border-gray-400 p-4 rounded-[8px] mb-4 w-full  '  name="category">
        <option value="framework">Framework</option>
        <option value="software">Software</option>
        <option value="mobile app">Mobile app</option>
        <option value="web app">Web app</option>
        <option value="payments">Payments</option>
        <option value="font foundry">Font foundry</option>
        <option value="luxury wears">Luxury wears</option>
      </select>
      <input name='details' type="text" class='border border-gray-400 p-4 rounded-[8px] mb-4 w-full  '  placeholder="enter details">
      <button class='p-2 bg-black text-white' type="submit">submit</button>
    </form>
  {:else}
    <input class='border border-gray-400 p-4 rounded-[8px] mb-4 w-full  ' name="password" type="text" bind:value={password} placeholder="Enter password"> <br>
    <button class='bg-black text-white p-4 rounded-[8px] w-full' on:click={authenticate}>Submit</button>
  {/if}
    </Card.Content>
   </Card.Root>

</div>

  

