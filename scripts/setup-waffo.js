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

const { WaffoPancake } = require('@waffo/pancake-ts');
const client = new WaffoPancake({
  merchantId: process.env.WAFFO_MERCHANT_ID,
  privateKey: process.env.WAFFO_PRIVATE_KEY,
});

const storeId = process.env.WAFFO_STORE_ID;

async function main() {
  console.log('🔄 Connecting to Waffo Pancake...');

  // 1. List all stores to confirm connection
  const storesResult = await client.graphql.query({
    query: 'query { stores { id name status } }'
  });
  const stores = storesResult.data?.stores ?? [];
  console.log(`✅ Connected! Found ${stores.length} store(s).`);

  // 2. List existing products for the store
  console.log('\n📦 Checking existing products...');
  const productsResult = await client.graphql.query({
    query: `query { onetimeProducts(storeId: "${storeId}") { id name status prices { currency amount } } }`
  });
  const products = productsResult.data?.onetimeProducts ?? [];
  console.log(`Found ${products.length} product(s):`);
  products.forEach(p => console.log(`  - ${p.id}: ${p.name} (${p.status})`));

  if (products.length > 0) {
    // Use existing product
    const existing = products[0];
    console.log(`\n✅ Using existing product: ${existing.id}`);
    await saveProductId(existing.id);
  } else {
    // Create new product
    console.log('\n📦 Creating product "X-Maker Pro License Key" ($9.99)...');
    const { product } = await client.onetimeProducts.create({
      storeId,
      name: "X-Maker Pro License Key",
      description: "Audience Growth & Time-Saving Engine for X (Lifetime Access)",
      prices: {
        USD: { amount: "9.99", taxIncluded: true, taxCategory: "software" },
      },
      successUrl: "https://x-maker-web.vercel.app/",
      metadata: { sku: "X-MAKER-PRO-LIFETIME" }
    });
    console.log(`🎉 Product created! ID: ${product.id}`);

    console.log('🚀 Publishing product...');
    await client.onetimeProducts.publish({ id: product.id });
    console.log('✅ Product published.');

    await saveProductId(product.id);
  }
}

async function saveProductId(productId) {
  let envContent = fs.readFileSync(dotenvPath, 'utf-8');
  if (envContent.includes('NEXT_PUBLIC_WAFFO_PRODUCT_ID')) {
    // Update existing
    envContent = envContent.replace(
      /NEXT_PUBLIC_WAFFO_PRODUCT_ID=.*/,
      `NEXT_PUBLIC_WAFFO_PRODUCT_ID="${productId}"`
    );
  } else {
    envContent += `\nNEXT_PUBLIC_WAFFO_PRODUCT_ID="${productId}"\n`;
  }
  fs.writeFileSync(dotenvPath, envContent, 'utf-8');
  console.log(`💾 Saved NEXT_PUBLIC_WAFFO_PRODUCT_ID="${productId}" to .env.local`);
  console.log('\n✨ Setup complete! Summary:');
  console.log(`   WAFFO_MERCHANT_ID = ${process.env.WAFFO_MERCHANT_ID}`);
  console.log(`   WAFFO_STORE_ID    = ${process.env.WAFFO_STORE_ID}`);
  console.log(`   NEXT_PUBLIC_WAFFO_PRODUCT_ID = ${productId}`);
}

main().catch(e => {
  console.error('❌ Error:', e.message);
  process.exit(1);
});
