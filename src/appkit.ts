// src/appkit.ts
import { createAppKit } from '@reown/appkit';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { bsc,mainnet } from '@reown/appkit/networks';

// 1. Your Reown project ID
const projectId = 'ae0f6b930b1b9c6df3d82e88f78dec0b' ;

// 2. Networks (BSC only)
export const networks = [mainnet, bsc];
// 3. Adapter
const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks,
});

// 4. Metadata
const metadata = {
  name: 'BNB',
  description: '  dApp on BSC',
  url: 'https://.com',
  icons: ['https://.com/icon.png'],
};

export const appKit = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [mainnet, bsc], // Must match the exported array
  defaultNetwork: bsc,      // Forces the prompt to switch to BSC
  metadata,
  hideBranding: true,
  featuredWalletIds: [
    '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0',
    'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
  ],
  features: {
    socials: [],
    email: false,
    analytics: false,
  },
});

// 🔹 Make it accessible to plain JS (your old functions)
if (typeof window !== 'undefined') {
  // @ts-expect-error
  window.appKit = appKit;
}
