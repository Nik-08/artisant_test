import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { client } from '../api';

const initialState: AppState['product'] = {
  loading: false,
  items: [],
  error: null,
  filter: 'all',
};

export const fetchData = createAsyncThunk(
  'product/fetch_data',
  async (_, { rejectWithValue }) => {
    try {
      const response = await client.get<
        ApiResponse<{
          products: Product[];
        }>
      >('/api/products');

      return response.data.data.products;
    } catch (e) {
      return rejectWithValue(String(e));
    }
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<ProductFilter>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const actions = {
  ...productSlice.actions,
  fetchData,
};
