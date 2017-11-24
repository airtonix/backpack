import micro from 'micro';

import config from './config';
import router from './router';

const PORT = config.get('port');
const HOST = config.get('host');
const server = micro(router);
server.listen(PORT, HOST)
console.log(`Server listening on ${HOST}:${PORT}`);
