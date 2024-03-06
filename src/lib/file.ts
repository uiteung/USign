import { Some, None, type Option } from '@sniptt/monads';

export const FileHandler = async (f: File): Promise<Option<ArrayBuffer>> => {
	if (f.size === 0) {
		return None;
	}

	const arrBuff = await f.arrayBuffer();

	return Some(arrBuff);
};
