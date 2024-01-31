const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const postdata = [
    { name: "Devraj Patil", squad: "S47", project: "Cringia Hub" },
    { name: "Shaksham", squad: "S44", project: "Cringia" },
    { name: "nayan", squad: "S44", project: "Cringia" },
];

app.get('/ping', (req, res) => {
    res.json(postdata);
});

app.post('/ping', (req, res) => {
    const body = req.body;
    postdata.push(body);
    res.json(postdata);
});

app.put('/ping/:index', (req, res) => {
    const index = req.params.index;
    const body = req.body;

    if (index >= 0 && index < postdata.length) {
        postdata[index] = { ...postdata[index], ...body };
        res.json(postdata);
    } else {
        res.status(404).json({ error: 'Index out of bounds' });
    }
});

app.delete('/ping/:index', (req, res) => {
    const index = req.params.index;

    if (index >= 0 && index < postdata.length) {
        postdata.splice(index, 1);
        res.json(postdata); 
    } else {
        res.status(404).json({ error: 'Index out of bounds' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
