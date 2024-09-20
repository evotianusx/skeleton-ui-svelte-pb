<script lang="ts">
	// @ts-nocheck
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { DataHandler, Th, Pagination, RowCount, Search } from '@vincjo/datatables';
	import MyTable from '$lib/components/MyTable.svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	let target = 'https://jsonplaceholder.typicode.com/posts';
	let processing = false;
	let firstReq = true;

	let data = [{}];
	function sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
	async function click() {
		processing = true;
		let resp = await fetch(target);

		let body = await resp.json();
		data = body;

		await sleep(5000);
		processing = false;
	}
	// $: (data = data ? data : [{}]), console.log(data);
	$: accordionToggle = firstReq | !processing;
</script>

<Accordion>
	<AccordionItem bind:open={firstReq}>
		<!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
		<svelte:fragment slot="summary"><p class="w-full text text-primary">Form</p></svelte:fragment>
		<svelte:fragment slot="content"
			><div class="w-full flex flex-col justify-center items-center">
				<div class="card variant-ghost-surface w-full lg:w-1/2 p-2">
					<label class="label p-1">
						<span>Input</span>
						<input
							class="input variant-ghost-primary"
							type="text"
							placeholder="https://jsonplaceholder.typicode.com/todos"
							bind:value={target}
						/>
					</label>
					<center
						><button
							type="button"
							class="btn variant-filled"
							on:click={() => {
								click();
								firstReq = false;
							}}>PROCESS</button
						></center
					>
				</div>
			</div></svelte:fragment
		>
	</AccordionItem>
</Accordion>
{#if processing}
	<div class="w-full flex flex-col justify-center items-center">
		<p class="mb-3">Waiting on input</p>
		<ProgressRadial value={undefined}></ProgressRadial>
	</div>
{:else if data.length > 1}
	<MyTable {data}></MyTable>
{:else}
	<h1>Nothing to see</h1>
{/if}
