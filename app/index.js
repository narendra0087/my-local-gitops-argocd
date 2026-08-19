const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
const APP_COMMIT = process.env.APP_COMMIT || 'local-dev';
const APP_VERSION = process.env.APP_VERSION || 'dev';

app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Fresh GitOps Pipeline</title>

    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: Arial, Helvetica, sans-serif;
            min-height: 100vh;
            background: linear-gradient(135deg, #0f172a, #1e293b);
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .container {
            width: 100%;
            max-width: 850px;
        }

        .card {
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 24px;
            padding: 45px;
            backdrop-filter: blur(12px);
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
        }

        .badge {
            display: inline-block;
            background: rgba(34, 197, 94, 0.15);
            color: #4ade80;
            border: 1px solid rgba(74, 222, 128, 0.3);
            padding: 8px 16px;
            border-radius: 50px;
            font-size: 14px;
            margin-bottom: 20px;
        }

        h1 {
            font-size: 42px;
            margin-bottom: 12px;
        }

        .subtitle {
            color: #cbd5e1;
            font-size: 18px;
            line-height: 1.6;
            margin-bottom: 35px;
        }

        .status {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 30px;
            color: #86efac;
            font-weight: bold;
        }

        .dot {
            width: 12px;
            height: 12px;
            background: #22c55e;
            border-radius: 50%;
            box-shadow: 0 0 15px #22c55e;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
        }

        .info {
            background: rgba(15, 23, 42, 0.7);
            border-radius: 14px;
            padding: 20px;
            border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .label {
            color: #94a3b8;
            font-size: 13px;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .value {
            font-size: 17px;
            font-weight: bold;
            word-break: break-word;
        }

        .commit {
            font-family: monospace;
            color: #60a5fa;
        }

        .version {
            color: #c084fc;
        }

        .footer {
            margin-top: 35px;
            text-align: center;
            color: #64748b;
            font-size: 13px;
        }

        @media (max-width: 600px) {
            .card {
                padding: 30px 20px;
            }

            h1 {
                font-size: 30px;
            }

            .grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>

<body>

    <div class="container">

        <div class="card">

            <div class="badge">
                🚀 GitOps Application
            </div>

            <h1>Fresh GitOps Pipeline</h1>

            <p class="subtitle">
                Hello Narendra Kumar narendra00087@gmail.com!!! Your application is running successfully
                on your local Kubernetes cluster.
            </p>

            <div class="status">
                <span class="dot"></span>
                Application is Healthy
            </div>

            <div class="grid">

                <div class="info">
                    <div class="label">Application Version</div>
                    <div class="value version">v${APP_VERSION}</div>
                </div>

                <div class="info">
                    <div class="label">Git Commit</div>
                    <div class="value commit">${APP_COMMIT}</div>
                </div>

                <div class="info">
                    <div class="label">Environment</div>
                    <div class="value">Local Kubernetes</div>
                </div>

                <div class="info">
                    <div class="label">Cluster</div>
                    <div class="value">sre-labs-kind</div>
                </div>

                <div class="info">
                    <div class="label">Deployment</div>
                    <div class="value">ArgoCD GitOps</div>
                </div>

                <div class="info">
                    <div class="label">Platform</div>
                    <div class="value">Kubernetes</div>
                </div>

                <div class="info">
                    <div class="label">Application</div>
                    <div class="value">Node.js + Express</div>
                </div>

                <div class="info">
                    <div class="label">Server Time</div>
                    <div class="value">${new Date().toLocaleString()}</div>
                </div>

            </div>

            <div class="footer">
                Built for SRE / DevOps learning • Powered by Kubernetes & ArgoCD
            </div>

        </div>

    </div>

</body>
</html>
    `);
});

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'UP',
        application: 'local-node-app',
        version: APP_VERSION,
        commit: APP_COMMIT,
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Application is executing successfully on port ${PORT}`);
});