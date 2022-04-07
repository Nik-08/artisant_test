declare module '*.scss';

declare module '*.png' {
  export default '' as string;
}

type Nullable<T> = T | null;

interface ApiResponse<T> {
  status: 'success';
  data: T;
}

interface AssetSource {
  original: string;
  compressed?: string;
}

interface User {
  user_id: number;
  display_name: string;
  public_address: string;
  custom_url: string;
  image: AssetSource;
}

interface JsonNFTData {
  name: string;
  image: string;
  attributes: {
    value: string;
    triat_type: string;
  }[];
  description: string;
  external_url: string;
}

interface Product {
  product_id: number;
  name: string;
  description: string;
  quantity: number;
  initial_price: number;
  type: string;
  avatar: AssetSource;
  other_file?: AssetSource;
  additional_photos: AssetSource[];
  created_by: User;
  json_nft_data: JsonNFTData;
  json_nft_link: string;
  tx_status: 'success';
  created_at: string;
  updated_at: string;
  quantity_nfts_created: number;
  quantity_available: number;
  on_main_page: boolean;
  is_wearable: boolean;
  latest_price: string;
}

type ProductFilter = 'all' | 'available';

interface ProductState {
  filter: ProductFilter;
  items: Product[];
  loading: boolean;
  error: Nullable<string>;
}

interface AppState {
  product: ProductState;
}
