let buscar = [44, 6, 29, 95, 6, 7, 99, 6, 99, 7, 8, 29];

let buscarAsc = buscar.sort(function (a, b) {
	return a - b;
});

let repetidos = [];

for (let i = 0; i < buscar.length; i++) {
	for (let j = i + 1; j < buscar.length; j++) {
		if (buscar[i] === buscar[j]) {
			let count = 0;

			for (let k = 0; k < repetidos.length; k++) {
				if (repetidos[k] === buscar[i]) {
					count++;
				}
			}
			if (count == 0) {
				repetidos.push(buscar[i]);
			}
		}
	}
}

console.log(repetidos);
