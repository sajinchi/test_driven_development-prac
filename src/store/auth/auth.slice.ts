import { StoreStatusEnum } from "@/src/commons/StoreStatusEnum";
import { parseJwt } from "@/src/utils/jwt";
import { ILoginResponse, LoginService } from "@/src/services/auth/authlogin.service";
import { ITokenInfo } from "@/src/types/auth/ITokenInfo";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ILoginFormData } from "@/src/types/auth/ILoginFormData";

interface AuthStoreState {
  status: StoreStatusEnum;
  message: string;
  accessToken: string;
  refreshToken: string;
  accessExpiresIn: number;
  refreshExpiresIn: number;
  userId: string;
}
const initialState: AuthStoreState = {
  status: StoreStatusEnum.IDLE,
  message: "",
  accessToken: "",
  refreshToken: "",
  accessExpiresIn: 0,
  refreshExpiresIn: 0,
  userId: "",
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }: ILoginFormData, thunkApi) => {
    const res: ILoginResponse = await LoginService(username, password);
    if (res.status != 200) {
      return thunkApi.rejectWithValue(res.message);
    }
    const accesstokenstr = parseJwt(res.data!.access);
    const refreshtokenstr = parseJwt(res.data!.refresh);
    const tokenInfo: ITokenInfo = {
        accessToken: res.data!.access,
        refreshToken: res.data!.refresh,
        accessExpiresIn: accesstokenstr.exp,
        refreshExpiresIn: refreshtokenstr.exp,
        userId: accesstokenstr.user_id,
        message: res.message,
    };
    return tokenInfo;
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, ( state, action ) => {
      state.status = StoreStatusEnum.SUCCESS;
      state.message = action.payload.message;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.accessExpiresIn = action.payload.accessExpiresIn;
      state.refreshExpiresIn = action.payload.refreshExpiresIn;
      state.userId = action.payload.userId;
    }),
      builder.addCase(login.pending, ( state ) => {
        state.status = StoreStatusEnum.LOADING;
        state.message = "Pending"
      }),
      builder.addCase(login.rejected, ( state ) => {
        state.status = StoreStatusEnum.ERROR;
        state.message = "Error";
      });
  },
});

export default AuthSlice.reducer;
