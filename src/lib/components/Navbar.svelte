<script lang='ts'>
	import type { Snippet } from "svelte";

    type Nav = {
        children: Snippet
    }
let { children }: Nav = $props();
</script>

<nav class=" gap-3 pt-4  flex items-center justify-center text-white px-4 ">
{@render children()}
</nav>