<script>
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	export const ssr = false;

	import { onMount } from 'svelte';
	import { autoModeWatcher } from '@skeletonlabs/skeleton';

	onMount(() => {
		autoModeWatcher();
	});
	import { LightSwitch } from '@skeletonlabs/skeleton';
	let headerx;
</script>

<!-- App Shell -->
<AppShell regionPage="scroll-smooth">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase" >Skeleton</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn btn-sm variant-ghost-surface" href="/" rel="noreferrer"> Home </a>
				<a class="btn btn-sm variant-ghost-surface" href="/table" rel="noreferrer"> Table </a>
		
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<!-- <slot/> -->
	<div class="m-3 p-3" bind:this={headerx} ><slot /></div>
	<button
		type="button"
		class="btn-icon variant-filled fixed bottom-3 right-14 text-blue-500"
		on:click={(e) => {
			headerx.scrollIntoView();
		}}>⬆️</button
	>
</AppShell>
