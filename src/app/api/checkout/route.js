import { NextResponse } from 'next/server';
import { WaffoPancake } from '@waffo/pancake-ts';

export async function POST(request) {
  const merchantId = process.env.WAFFO_MERCHANT_ID;
  const privateKey = process.env.WAFFO_PRIVATE_KEY;
  const productId = process.env.NEXT_PUBLIC_WAFFO_PRODUCT_ID;

  if (!merchantId || !privateKey) {
    console.error('❌ Waffo Merchant ID or Private Key is missing in server environment variables.');
    return NextResponse.json(
      { error: 'Server configuration error: Merchant credentials not set. Please check .env.local' },
      { status: 500 }
    );
  }

  if (!productId) {
    console.error('❌ Waffo Product ID (NEXT_PUBLIC_WAFFO_PRODUCT_ID) is missing.');
    return NextResponse.json(
      { error: 'Server configuration error: Product not created or configured. Run npm run setup first.' },
      { status: 500 }
    );
  }

  try {
    // Initialize Waffo Pancake client
    const client = new WaffoPancake({
      merchantId,
      privateKey,
    });

    const requestUrl = new URL(request.url);
    const origin = requestUrl.origin;
    const successUrl = `${origin}/?purchase_success=true`;

    console.log(`Creating Waffo Pancake checkout session for product ${productId}...`);
    const session = await client.checkout.createSession({
      productId,
      productType: 'onetime',
      currency: 'USD',
      successUrl,
      darkMode: true, // Matching X-Maker's dark mode design
    });

    console.log('✅ Checkout session created successfully:', session.sessionId);
    return NextResponse.json({ checkoutUrl: session.checkoutUrl });
  } catch (error) {
    console.error('❌ Error creating checkout session:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
