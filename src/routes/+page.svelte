<script>
	import { TableOfContents, tocCrawler } from '@skeletonlabs/skeleton';
	import { FileDropzone } from '@skeletonlabs/skeleton';
	import { data } from '$lib/static/data/line';

	import { Line } from 'svelte-chartjs';

	import 'chart.js/auto';
</script>

<div class="justify-center mb-3">
	<TableOfContents>
		<h1>Title</h1>
	</TableOfContents>
</div>
<div use:tocCrawler={{ mode: 'generate' }} class="padding-inherit">
	<h2>Heading 2</h2>
	<blockquote class="blockquote">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis magna vitae arcu finibus,
		in tincidunt orci pretium. Cras in libero ultrices, sagittis lacus id, rhoncus neque. Nam ornare
		lectus sit amet pharetra pellentesque. Proin lacinia mauris in pretium porttitor. Morbi congue
		auctor odio, ac volutpat erat semper sit amet. Duis mollis elit ipsum, non ultrices nulla tempus
		at. Nunc sagittis nulla id quam efficitur, vel tristique est viverra. Praesent consectetur erat
		facilisis laoreet ultrices. Quisque eu dolor ipsum. Curabitur quis nunc sit amet ex finibus
		vulputate in a diam. Suspendisse placerat orci justo, id ultricies ligula luctus vitae. Vivamus
		hendrerit quam elit, eu tristique orci semper id. Praesent pretium sem lectus, ut convallis
		felis vulputate rhoncus. Morbi sit amet libero in sapien convallis efficitur eu eu leo.
		Suspendisse quis augue in nunc luctus fringilla. Nunc in justo finibus, posuere neque ut,
		placerat neque. Etiam elit tellus, bibendum in felis non, aliquet feugiat orci. Proin euismod
		metus a ante venenatis lobortis. Cras malesuada est eu lacinia tincidunt.
	</blockquote>

	<h2>Heading 2.1</h2>
	<blockquote class="blockquote">
		Integer vel nisi convallis, porta sem in, condimentum turpis. Aenean mollis commodo tortor et
		molestie. Fusce sed purus eget tortor malesuada fringilla. Curabitur placerat venenatis justo
		nec faucibus. Sed aliquet felis non viverra rutrum. Phasellus nibh felis, ullamcorper tristique
		nunc vel, luctus porttitor dolor. Proin arcu elit, blandit et ultrices nec, iaculis eu diam. Ut
		a velit sollicitudin, commodo massa id, commodo est. Fusce quis eros augue. Sed ut risus id nibh
		feugiat facilisis. Duis sem magna, molestie sit amet tincidunt sed, tempor eu nisi. Nulla auctor
		egestas orci a tincidunt. Maecenas gravida urna sed ipsum ultricies pharetra. Morbi nec erat vel
		erat egestas porta a nec nunc. Nam commodo tincidunt lacus et blandit. In maximus hendrerit
		erat, id bibendum mauris varius eget. Quisque eu leo odio. Mauris sit amet lacinia neque, et
		posuere urna. Morbi sit amet sem placerat, euismod lorem sed, dictum augue. Morbi commodo,
		mauris ac pellentesque commodo, mi elit laoreet libero, pellentesque efficitur erat orci id est.
	</blockquote>

	<h3>Heading 3.0</h3>
	<p>Some Text</p>
</div>

<div class="placeholder animate-pulse">
	<FileDropzone name="files" class="h-full" data-toc-ignore />
</div>

<!-- <section class="grid grid-cols-4 gap-3">
	{#each Array.from({ length: 20 }) as _, i}
		<div class="grid gap-4">
			<div>
				<img src="https://picsum.photos/id/{i}/400/600" class="h-auto max-w-full rounded-lg" />
			</div>
		</div>
	{/each}
</section> -->

<!-- <Line {data} options={{ responsive: true }} /> -->
