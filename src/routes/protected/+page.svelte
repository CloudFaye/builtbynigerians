<script lang='ts'>



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


<div class="  px-[600px] py-[600px] flex flex-row items-center justify-center bg-slate-400 ">
  {#if isAuthenticated}
  <form  method="POST">
    <input class='border border-black' type="text" name="name" placeholder="enter name">
    <input class='border border-black' name='url' placeholder="website url" type="text">
    <select class='border border-black' name="category">
      <option value="framework">Framework</option>
      <option value="software">Software</option>
      <option value="mobile app">Mobile app</option>
      <option value="web app">Web app</option>
      <option value="payments">Payments</option>
      <option value="font foundry">Font foundry</option>
      <option value="luxury wears">Luxury wears</option>
    </select>
    <input name='details' type="text" class='border border-black' placeholder="enter details">
    <button class='p-2 bg-black text-white' type="submit">submit</button>
  </form>
{:else}
  <input name="password" type="text" bind:value={password} placeholder="Enter password">
  <button on:click={authenticate}>Submit</button>
{/if}

</div>
