const fs = require('fs');
const path = require('path');

// 1. Load environment variables from .env.local
const dotenvPath = path.resolve(__dirname, '../.env.local');
if (fs.existsSync(dotenvPath)) {
  console.log('📖 Loading environment variables from .env.local...');
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
      process.env[key] = value;
    }
  }
}

const merchantId = process.env.WAFFO_MERCHANT_ID;
const storeId = process.env.WAFFO_STORE_ID;
const privateKey = process.env.WAFFO_PRIVATE_KEY;

if (!merchantId || !privateKey) {
  console.error('❌ Error: WAFFO_MERCHANT_ID or WAFFO_PRIVATE_KEY is missing in .env.local.');
  console.error('Please configure your private key first in your .env.local file.');
  process.exit(1);
}

// 2. Initialize Waffo Pancake SDK
const { WaffoPancake } = require('@waffo/pancake-ts');

const client = new WaffoPancake({
  merchantId,
  privateKey,
});

async function main() {
  try {
    console.log('🔄 Connecting to Waffo Pancake...');
    
    // Check if store exists or verify API keys
    const result = await client.graphql.query({
      query: `query { stores { id name status } }`
    });
    
    const stores = result.data?.stores ?? [];
    console.log(`✅ Authentication successful. Found ${stores.length} store(s).`);
    
    const targetStore = stores.find(s => s.id === storeId);
    if (!targetStore) {
      console.error(`❌ Target store ${storeId} not found under this merchant account.`);
      process.exit(1);
    }
    console.log(`🏬 Target Store: ${targetStore.name} (${targetStore.id})`);
    
    // 3. Create the product "X-Maker Pro License Key" ($9.99 USD)
    console.log('📦 Creating product "X-Maker Pro License Key" ($9.99)...');
    const { product } = await client.onetimeProducts.create({
      storeId,
      name: "X-Maker Pro License Key",
      description: "Audience Growth & Time-Saving Engine for X (Lifetime Access)",
      prices: {
        USD: { amount: "9.99", taxIncluded: true, taxCategory: "software" },
      },
      successUrl: "https://x-maker-web.vercel.app/", // Dynamic default
      metadata: { sku: "X-MAKER-PRO-LIFETIME" }
    });
    
    console.log(`🎉 Product created successfully! ID: ${product.id}`);
    
    // 4. Publish product to live production if using live keys, otherwise publish in test
    console.log('🚀 Publishing product...');
    await client.onetimeProducts.publish({ id: product.id });
    console.log('✅ Product published successfully.');
    
    // 5. Append Product ID to .env.local
    let envContent = fs.readFileSync(dotenvPath, 'utf-8');
    if (!envContent.includes('NEXT_PUBLIC_WAFFO_PRODUCT_ID')) {
      envContent += `\nNEXT_PUBLIC_WAFFO_PRODUCT_ID="${product.id}"\n`;
      fs.writeFileSync(dotenvPath, envContent, 'utf-8');
      console.log(`💾 Saved NEXT_PUBLIC_WAFFO_PRODUCT_ID="${product.id}" to .env.local`);
    } else {
      console.log(`ℹ️ NEXT_PUBLIC_WAFFO_PRODUCT_ID already exists in .env.local`);
    }
    
    console.log('✨ Setup complete!');
  } catch (error) {
    console.error('❌ Error during setup:', error);
    process.exit(1);
  }
}

main();
