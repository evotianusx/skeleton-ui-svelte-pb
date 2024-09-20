<script>
	import { page } from '$app/stores';
</script>

<center class="h-full flex flex-col justify-center items-center">
	<div class="card variant-filled-error h-1/2 flex flex-col justify-center mr-4 w-1/2">
		<h1>{$page.status} {$page.error ? $page.error.message : 'FALLBACK'}</h1>
	</div>
</center>
