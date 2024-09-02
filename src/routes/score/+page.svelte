<script>
    import { parseHTML } from 'linkedom'
    // let currentUrl="https://www.cloudskillsboost.google/public_profiles/0dd83d3b-965e-42fa-a7c5-74e2c2849ddd";
    let currentUrl="https://jsonplaceholder.typicode.com/posts/1";
    let documentx;
    let counter=0;
    async function  clicked(){
  
        const response = await fetch(currentUrl)
        const domText = await response.text()
        console.log(domText)
        documentx = parseHTML(domText)
        documentx = documentx;



    }
</script>

    <input class="input" title="Input (text)" type="text" placeholder="input text" bind:value={currentUrl}/>
    <button on:click={clicked}>Submit</button>

{#if documentx}<p>{documentx}</p>

{:else}hha

{/if}
