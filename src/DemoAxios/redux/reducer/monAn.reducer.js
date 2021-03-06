import { cloneDeep } from "../../utils";
import { CAP_NHAT_DANH_SACH, CAP_NHAT_MON_AN, CHINH_SUA_MON_AN } from "../constant/monAn.constant"

let initialState = {
  danhSachMonAn: [],
  foodEdit: null,

}

export const monAnReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAP_NHAT_DANH_SACH: {
      state.danhSachMonAn = action.payload;

      return { ...state };
    }
    case CHINH_SUA_MON_AN: {
      state.foodEdit = cloneDeep(action.payload);

      return { ...state };
    }
      
    case CAP_NHAT_MON_AN: {
      
    }

    default: {
      return state;
    }
  }
}