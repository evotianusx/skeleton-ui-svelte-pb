<script lang="ts">
	import { DataHandler ,Th,Pagination,RowCount,Search} from '@vincjo/datatables';
	import data from '$lib/static/data/data';
	const handler = new DataHandler(data, { rowsPerPage: 20 });
	const rows = handler.getRows();
</script>

<div class="table-container space-y-4">
	<header><Search {handler} /></header>
	<table class="table table-hover table-compact table-auto w-full">
		<thead>
			<tr>
				<Th {handler} orderBy="first_name">First name</Th>
				<td>Last name</td>
				<td>Email</td>
			</tr>
		</thead>
		<tbody>
			{#each $rows as row}
				<tr>
					<td>{row.first_name}</td>
					<td>{row.last_name}</td>
					<td>{row.email}</td>
				</tr>
			{/each}
		</tbody>
	</table>
	<footer class='container'><RowCount {handler}/><Pagination {handler}  /></footer>
	
</div>
