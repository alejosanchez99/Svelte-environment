import { env } from '$env/dynamic/public';
import type { PageLoad } from '../$types';

export const load: PageLoad = () => {
	return {
		publicSecret: env.PUBLIC_KEY
	};
};
