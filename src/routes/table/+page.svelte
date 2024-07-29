<script lang="ts">
	// @ts-nocheck

	import { DataHandler, Th, Pagination, RowCount, Search } from '@vincjo/datatables';
	import MyTable from '$lib/components/MyTable.svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	let target = 'https://jsonplaceholder.typicode.com/posts';
	let processing = true;
	let handler;
	let rows;
	let fields;
	async function click() {
		processing = true;
		let resp = await fetch(target);
		let body = await resp.json();

		handler = new DataHandler(body, { rowsPerPage: 15 });
		rows = handler.getRows();
		fields = Object.keys(body[0]);
		console.log(body[1]);
		processing = false;
	}
</script>

<div class="m-3 w-full">
	<center>
	<div class="container">
		<label class="label w-1/4 m-1">
			<span>Input</span>
			<input
				class="input"
				type="text"
				placeholder="https://jsonplaceholder.typicode.com/todos"
				bind:value={target}
			/>
		</label>
		<button type="button" class="btn variant-filled m-1" on:click={click}>PROCESS</button>

		<p>{target}</p>

		{#if !processing}
			<div class=" space-y-4 mt-6">
				<header><Search {handler} /></header>
				<table class="table table-hover table-compact table-auto w-full">
					<thead>
						<tr>
							{#each fields as f}
								<td>{f}</td>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each $rows as row}
							<tr>
								{#each fields as f}
									{#if typeof row[f] === 'boolean'}
										<td><input type="checkbox" checked={row[f]} disabled /></td>
									{:else}<td>{row[f]}</td>
									{/if}
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
				<div class="mx-auto w-full grid place-content-around">
					<div class="mx-auto m-1"><RowCount {handler} /></div>
					<div class="mx-auto"><Pagination {handler} /></div>
				</div>
			</div>
		{:else}<div class = "p-3 m-3 mx-auto " ><p class='mb-3'>Waiting on input</p><ProgressRadial value={undefined} width='w-12' /></div>
		{/if}
	</div></center>
</div>
