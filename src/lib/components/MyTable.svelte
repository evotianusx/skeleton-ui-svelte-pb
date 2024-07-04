<script lang="ts">
	import { DataHandler } from '@vincjo/datatables';
	const data = [
		{ id: 1, first_name: 'Tobie', last_name: 'Vint', email: 'tvint0@fotki.com' },
		{ id: 2, first_name: 'Zacharias', last_name: 'Cerman', email: 'zcerman1@sciencedirect.com' },
		{ id: 3, first_name: 'Gérianna', last_name: 'Bunn', email: 'gbunn2@foxnews.com' },
		{ id: 4, first_name: 'Bee', last_name: 'Saurin', email: 'bsaurin3@live.com' },
		{ id: 5, first_name: 'Méyère', last_name: 'Granulette', email: 'mgranul4@yellowbook.com' }
		// ...
	];

	const handler = new DataHandler(data, { rowsPerPage: 3 });
	const distinct = handler.createCalculation('last_name').distinct();
	const rows = handler.getRows();
</script>

<div class="table-container space-y-4">
	<table class="table table-hover table-compact table-auto w-full">
		<thead>
			<tr>
				<td>First name</td>
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
	<ul>
		{#each distinct as item}
			{@const { value, count } = item}
			<li>{value} has {count} occurrences</li>
		{/each}
	</ul>
</div>
