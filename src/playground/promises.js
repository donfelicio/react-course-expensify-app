const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("Mistakes were made");
	}, 1500);
});

promise
	.then(data => {
		console.log(data);
	})
	.catch(e => {
		console.log(e);
	});
