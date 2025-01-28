const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

let items = [];

// Create
app.post('/api/items', (req, res) => {
    const item = { id: Date.now(), ...req.body };
    items.push(item);
    res.status(201).json(item);
});

// Read
app.get('/api/items', (req, res) => {
    res.status(200).json(items);
});

// Update
app.put('/api/items/:id', (req, res) => {
    const { id } = req.params;
    const index = items.findIndex(item => item.id === parseInt(id));
    if (index !== -1) {
        items[index] = { ...items[index], ...req.body };
        return res.status(200).json(items[index]);
    }
    res.status(404).json({ message: 'Item not found' });
});

// Delete
app.delete('/api/items/:id', (req, res) => {
    const { id } = req.params;
    items = items.filter(item => item.id !== parseInt(id));
    res.status(200).json({ message: 'Item deleted successfully' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
