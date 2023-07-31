const express = require('express');
const colors = require('colors');
const cors = require('cors');
const helmet = require('helmet');
const { nanoid } = require('nanoid');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

const uri = "mongodb://ip:port/db";
mongoose.connect(uri);

const schema = new mongoose.Schema({
	id: { type: String, required: true },
	unitFrom: { type: String, required: true },
	numFrom: { type: Number, required: true },
	unitTo: { type: String, required: true },
	numTo: { type: Number, required: true },
});

const Save = mongoose.model('Saves', schema);

app.get('/saves', async (req, res) => {
    const saves = await Save.find({});
    res.json(saves);
});

app.post('/saves', async (req, res) => {
	const save = new Save({
		id: nanoid(),
		numFrom: req.body.numFrom,
		unitFrom: req.body.unitFrom,
		unitTo: req.body.unitTo,
		numTo: req.body.numTo
	});
	await save.save();
    res.json(save);
});

app.delete('/saves/:id', async (req, res) => {
	const id = req.params.id;
	await Save.deleteOne({ id });
    const saves = await Save.find({});
    res.json(saves);
});

const port = 7000;

app.listen(port, console.log(`Server running on port ${port}`.green.bold));
