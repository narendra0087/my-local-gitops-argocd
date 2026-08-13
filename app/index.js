const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        status: "success",
        message: "Hello Narendra! Fresh application is running successfully on your local cluster!",
        cluster: "sre-labs-kind",
        engine: "ArgoCD GitOps Pipeline",
        timestamp: new Date()
    });
});

app.listen(PORT, () => {
    console.log(`Application is executing successfully on port ${PORT}`);
});

