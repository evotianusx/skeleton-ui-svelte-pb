<script lang="ts">
	import type { PageData } from './$types';
	import { popup } from '@skeletonlabs/skeleton';

	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';
	export let data: PageData;
	let points = data.data;
	function getRandomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
</script>

<div class="w-full mx-auto">
	<Timeline
		position="alternate"
		style={'border: solid 1px #dbdbdb; padding: 50px 0; border-radius: 2%;'}
	>
		{#each points as option, index}
			<TimelineItem>
				<TimelineOppositeContent slot="opposite-content">
					<p>{option.hire_date_dt?.slice(0, 11)}</p>
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot style={'background-color: #7CD5E2;'} />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent on:mouseover={() => console.log(option)}>
					{#if option.resign_date_dt}
						<h3 style={'color:' +'red'}>{option.name} ➡️ {option.resign_date_dt.slice(0,10)}</h3>
					{:else}
						<div>
							<h4 style={'color:white'}>{option.name}</h4>
						</div>
					{/if}
				</TimelineContent>
			</TimelineItem>
		{/each}
	</Timeline>
</div>
