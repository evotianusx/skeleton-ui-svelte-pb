<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { autoModeWatcher } from '@skeletonlabs/skeleton';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	onMount(() => {
		autoModeWatcher();
	});
	import { LightSwitch } from '@skeletonlabs/skeleton';

	import { fade } from 'svelte/transition';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	let currentTile = 0;
	export let data;
	$: pathname = data.pathname;
	let isLoading = false;
	beforeNavigate(() => (isLoading = true));
	afterNavigate(() => (isLoading = false));
	let pagesLink = ['tabs', 'table'];
	function capitalize(x: String) {
		return x.charAt(0).toUpperCase() + x.slice(1);
	}
</script>

<!-- App Shell -->
<AppShell regionPage="scroll-smooth">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Skeleton</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn btn-sm variant-ghost-surface" href="/" rel="noreferrer"> Home </a>
				<a class="btn btn-sm variant-ghost-surface" href="/table" rel="noreferrer"> Table </a>

				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<AppRail active="variant-ghost-primary " class="hidden md:block">
			<svelte:fragment slot="lead">
				<AppRailAnchor href="/" selected={$page.url.pathname === '/'}>Home</AppRailAnchor>
			</svelte:fragment>
			<!-- --- -->

			{#each pagesLink as p, i}
				<AppRailAnchor
					bind:group={currentTile}
					name={p}
					value={i + 1}
					title={p}
					selected={$page.url.pathname === '/' + p}
				>
					<svelte:fragment slot="lead"
						><a href="/{p}" target="_self">{capitalize(p)}</a></svelte:fragment
					>
				</AppRailAnchor>
			{/each}

			<!-- --- -->
			<!-- <svelte:fragment slot="trail">
				<AppRailAnchor href="/" target="_blank" title="Account">(icon)</AppRailAnchor>
			</svelte:fragment> -->
		</AppRail></svelte:fragment
	>
	<!-- Page Route Content -->
	{#if isLoading}
		<div class="flex flex-col justify-center items-center w-full h-full">
			<ProgressRadial value={undefined}></ProgressRadial>
		</div>{:else}{#key pathname}
			<div class=" h-full w-full p-1" transition:fade><slot /></div>
		{/key}
	{/if}
</AppShell>
