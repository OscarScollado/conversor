const express = require('express');
const colors = require('colors');
const cors = require('cors');
const helmet = require('helmet');
const { nanoid } = require('nanoid');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

const saves = [];

app.get('/saves', (req, res) => res.send(saves));

app.post('/saves', (req, res) => {
	const save = {
		id: nanoid(),
		numFrom: req.body.numFrom,
		unitFrom: req.body.unitFrom,
		unitTo: req.body.unitTo,
		numTo: req.body.numTo
	};
	saves.push(save);
	return res.send(save);
});

app.delete('/saves/:id', (req, res) => {
	const id = req.params.id;
	const index = saves.findIndex(save => save.id === id);
	if (index > -1) {
		saves.splice(index, 1);
	}

	res.send(saves);
});

const port = 7000;

app.listen(port, console.log(`Server running on port ${port}`.green.bold));
