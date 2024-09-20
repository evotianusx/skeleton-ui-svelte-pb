<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	let tabSet: number = 0;
</script>

<TabGroup class="flex flex-col justify-center items-center">
	<Tab bind:group={tabSet} name="tab1" value={0}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>(label 1)</span>
	</Tab>
	<Tab bind:group={tabSet} name="tab2" value={1}>(label 2)</Tab>
	<Tab bind:group={tabSet} name="tab3" value={2}>(label 3)</Tab>
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
			<div class="card bg-primary-200">Ha</div>
		{:else if tabSet === 1}
			(tab panel 2 contents)
		{:else if tabSet === 2}
			(tab panel 3 contents)
		{/if}
	</svelte:fragment>
</TabGroup>
