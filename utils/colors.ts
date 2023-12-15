export const colorNames = [
	"one",
	"two",
	"three",
	"four",
	"five",
	"six",
	"seven",
	"eight",
	"nine",
] as const;

export type ColorName = (typeof colorNames)[number];
