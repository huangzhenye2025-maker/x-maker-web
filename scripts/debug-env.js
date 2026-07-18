const fs = require('fs');
const path = require('path');

// Parse .env.local properly
const dotenvPath = path.resolve('.env.local');
const envConfig = fs.readFileSync(dotenvPath, 'utf-8');
for (const line of envConfig.split('\n')) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) continue;
  const eqIdx = trimmed.indexOf('=');
  if (eqIdx < 0) continue;
  const key = trimmed.substring(0, eqIdx).trim();
  let value = trimmed.substring(eqIdx + 1).trim();
  if (value.startsWith('"') && value.endsWith('"')) {
    value = value.slice(1, -1);
  }
  value = value.replace(/\\n/g, '\n');
  process.env[key] = value;
}

// Debug: print what we got
console.log('MERCHANT_ID:', process.env.WAFFO_MERCHANT_ID);
console.log('STORE_ID:', process.env.WAFFO_STORE_ID);
console.log('KEY starts with:', process.env.WAFFO_PRIVATE_KEY?.substring(0, 40));
console.log('KEY ends with:', process.env.WAFFO_PRIVATE_KEY?.slice(-30));
