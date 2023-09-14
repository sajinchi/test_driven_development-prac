import { StoreStatusEnum } from "@/src/commons/StoreStatusEnum";
import { IUserSelfDataResponse, UserMeService } from "@/src/services/user/userGetSelf.service";
import { IUser } from "@/src/types/user/IUser";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface UserStoreState extends IUser {
  status: StoreStatusEnum;
  message: string;
}
const initialState: UserStoreState = {
    email: "",
    first_name: "",
    id: "",
    image: "",
    is_active: false,
    is_subscribed: false,
    last_name: "",
    login_method: "",
    otp_auth_url: "",
    otp_base32: "",
    otp_enabled: false,
    otp_verified: false,
    username: "",
    status: StoreStatusEnum.IDLE,
    message: ""
};

export const userGetSelf = createAsyncThunk(
  "user/get",
  async (_, thunkApi) => {
    const res: IUserSelfDataResponse = await UserMeService();
    if (res.status != 200) {
      return thunkApi.rejectWithValue(res.message);
    }
    const user: IUser = {
      email: res.data!.email,
      first_name: res.data!.first_name,
      id: res.data!.id,
      image: res.data!.image,
      is_active: res.data!.is_active,
      is_subscribed: res.data!.is_subscribed,
      last_name: res.data!.last_name,
      login_method: res.data!.login_method,
      otp_auth_url: res.data!.otp_auth_url,
      otp_base32: res.data!.otp_base32,
      otp_enabled: res.data!.otp_enabled,
      otp_verified: res.data!.otp_verified,
      username: res.data!.username,
    };
    return user;
  }
);

const UserSelf = createSlice({
  name: "userSelf",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(userGetSelf.pending,(state) => {
        state.status = StoreStatusEnum.LOADING;
        state.message = "Fetching User Data"
      }),
      builder.addCase(userGetSelf.fulfilled,(state,action)=>{
        state.status = StoreStatusEnum.SUCCESS;
        state.message = "Successful Fetching User Data";
        state.email = action.payload.email;
        state.first_name = action.payload.first_name;
        state.id = action.payload.id;
        state.image = action.payload.image;
        state.is_active = action.payload.is_active;
        state.is_subscribed = action.payload.is_subscribed;
        state.last_name = action.payload.last_name;
        state.otp_auth_url = action.payload.otp_auth_url;
        state.otp_base32 = action.payload.otp_base32;
        state.otp_enabled = action.payload.otp_enabled;
        state.otp_verified = action.payload.otp_verified;
        state.username = action.payload.username;
      }),
      builder.addCase(userGetSelf.rejected,(state)=>{
        state.status = StoreStatusEnum.ERROR;
        state.message = "Error getting User Data"
      })
  },
});

export default UserSelf.reducer;