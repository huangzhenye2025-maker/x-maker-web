const fs = require('fs');
const path = require('path');

const dotenvPath = path.resolve('.env.local');
const envConfig = fs.readFileSync(dotenvPath, 'utf-8');
for (const line of envConfig.split('\n')) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) continue;
  const parts = trimmed.split('=');
  if (parts.length >= 2) {
    const key = parts[0].trim();
    let value = parts.slice(1).join('=').trim();
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.substring(1, value.length - 1);
    }
    value = value.replace(/\\n/g, '\n');
    process.env[key] = value;
  }
}

const { WaffoPancake } = require('@waffo/pancake-ts');
const client = new WaffoPancake({
  merchantId: process.env.WAFFO_MERCHANT_ID,
  privateKey: process.env.WAFFO_PRIVATE_KEY
});

async function main() {
  const r = await client.graphql.query({ query: 'query { stores { id name status } }' });
  console.log('📦 All stores:', JSON.stringify(r.data, null, 2));
}
main().catch(e => console.error('Error:', e.message));
