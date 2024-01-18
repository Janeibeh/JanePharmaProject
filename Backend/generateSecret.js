import crypto from 'crypto';

const secretKey = crypto.randomBytes(256).toString('hex');
console.log(secretKey);
