interface Student {
	name: string;
	grade: number;
	isPassed: boolean;
}

let persons: Student = {
	name: 'Daewon',
	grade: 12,
	isPassed: true,
};

/* ----------------------------------------------- */

//type
type Gender = 'female' | 'male';
const gender: Gender = 'male';
