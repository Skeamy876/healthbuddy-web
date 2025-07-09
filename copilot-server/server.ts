import express from 'express';
import {
  CopilotRuntime,
  GoogleGenerativeAIAdapter,
  copilotRuntimeNodeHttpEndpoint,
} from '@copilotkit/runtime';

 
const app = express();

const serviceAdapter = new GoogleGenerativeAIAdapter();
 
app.use('/copilotkit', (req, res, next) => {
  (async () => {
      const runtime = new CopilotRuntime({
    remoteEndpoints: [
        { url: "http://localhost:8000/copilotkit" },
    ],
  });
 
    const handler = copilotRuntimeNodeHttpEndpoint({
      endpoint: '/copilotkit',
      runtime,
      serviceAdapter,
    });
 
    return handler(req, res);
  })().catch(next);
});
 
app.listen(4000, () => {
  console.log('Listening at http://localhost:4000/copilotkit');
});