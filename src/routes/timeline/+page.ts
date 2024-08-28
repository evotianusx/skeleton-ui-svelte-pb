import type { PageLoad } from './$types';
import {data} from '$lib/static/data/resign';
export const load = (async () => {
    return {data};
}) satisfies PageLoad;