<script lang="ts">
	import { page } from '$app/stores';
	import Nav from '$lib/components/Navbar.svelte'
	import { cn } from '$lib/utils';
	import '../app.css';
	let { children } = $props();

	let pathname = $derived ($page.url.pathname) 

</script>

<main class=" bg-gray-950">
	<Nav>
		{@render navLink({href: '/', text: 'Home'})}
		{@render navLink({href: '/recipes', text: 'Recipes'})}
		{@render navLink({href: '/listings', text: 'Listings'})}
		
		<!--Github button-->
	</Nav>

	{#snippet navLink({href, text}:{href: string, text: string})}
	<a class={cn
	('p-4 capitalize hover:border-t-1 focus-visible:bg-black focus-visible:text-secondary-foreground', 
		pathname === href && ' border-b-4 border-gray-500 text-white'
	)} {href}>{text}</a>
    {/snippet}

	{@render children()}
	
</main>



