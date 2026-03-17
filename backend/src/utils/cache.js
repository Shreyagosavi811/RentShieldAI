import NodeCache from 'node-cache';

const cache = new NodeCache({
    stdTTL: 3600, // Cache items expire after 1 hour
    checkperiod: 120,
});

export default cache;