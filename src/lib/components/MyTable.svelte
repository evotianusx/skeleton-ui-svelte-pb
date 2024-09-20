<script lang="ts">
	import { DataHandler, Th, Pagination, RowCount, Search } from '@vincjo/datatables';
	export let data;
	const handler = new DataHandler(data, { rowsPerPage: 20 });
	const rows = handler.getRows();
	const fields = Object.keys(data[0]);
	// console.log(data[0]);
</script>

<div class=" space-y-4 mt-4">
	<header><Search {handler} class="input" type="text" /></header>
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
