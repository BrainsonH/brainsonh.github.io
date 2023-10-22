const output = document.querySelector('.output');
const url =  'https://docs.google.com/spreadsheets/d/';
const ssid = '15sm98g9PVAinEJagGu_0MyXGlXYszUNB1zRH-e6z9zc';
const query1 = '/gviz/tq?';

const endpoint1 = '${url}${ssid}${query1}';
output.textContent = endpoint1;

fetch(endpoint1)
.then(res => res.text())
.then(data =>{
	const temp = data.substr(47).slice(0,-2);
	const json = JSON.parse(temp);
	const rows = json.table.rows;
	rows.forEach((row)=>{
		const div = document.createElement('div');
		const temp1 = row.c;
		temp1.forEach((cell)=>{
			const box = document.createElement('div');
			box.textContent = cell.v;
			box.classList.add('box');
			div.append(box);
		})
	})
})
