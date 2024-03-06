export const ggID = (): () => number => {
	let id = 0;
	return (): number => {
		return id++;
	};
}

export const timeout = (ms: number): Promise<void> => {
	return new Promise((res) => setTimeout(res, ms));
}

export const noop: () => void = () => {};