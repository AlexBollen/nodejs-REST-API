const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Alex",
        "website": "alexweb.com"
    };
    res.json(data);
});

module.exports = router;