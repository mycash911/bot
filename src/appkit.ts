import { createAppKit } from '@reown/appkit';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { bsc, mainnet } from '@reown/appkit/networks';

const projectId = 'ae0f6b930b1b9c6df3d82e88f78dec0b';
export const networks = [bsc, mainnet];

const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks,
});

const metadata = {
  name: 'BNB dApp',
  description: 'dApp on BSC',
  url: typeof window !== 'undefined' ? window.location.origin : 'https://localhost',
  icons: ['https://bscscan.com/images/svg/brands/bnb.svg'],
};

export const appKit = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks,
  defaultNetwork: bsc,
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



if (typeof window !== 'undefined') {
  // @ts-expect-error
  window.appKit = appKit;
  // @ts-expect-error
  window.bscNetwork = bsc;
}



