import { configService } from '@/services/config/config.service';
import { ref } from 'vue';

/**
 * TYPES
 */
export enum Network {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  POLYGON = 137,
  ARBITRUM = 42161
}

/**
 * STATE
 */
const DEFAULT_NETWORK_ID =
  process.env.VUE_APP_NETWORK != null
    ? (Number(process.env.VUE_APP_NETWORK) as Network)
    : Network.MAINNET;

export const networkId = ref<Network>(DEFAULT_NETWORK_ID);

export const isMainnet = configService.network.chainId === Network.MAINNET;
export const isPolygon = configService.network.chainId === Network.POLYGON;
export const isArbitrum = configService.network.chainId === Network.ARBITRUM;

/**
 * METHODS
 */
export function setNetworkId(id: Network) {
  networkId.value = id;
}

export default function useNetwork() {
  return {
    setNetworkId,
    networkId
  };
}
