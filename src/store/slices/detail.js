import { createSlice } from "@reduxjs/toolkit";

// `detail` 상태관리 slice 생성 및 설정
const detail = createSlice({
  name: 'detail', // slice 명
  initialState: { //상태 관리할 state를 정의하는 영역
    cnt: 0,
  },
  reducers: { //state의 상태를 변화시키는 actions를 정의하는 영역
    addCnt(state) {
      state.cnt += 1;
    },
    minusCnt(state) {
      state.cnt -= 1;
    },
    changeCnt(state, action) {
      const regex = /^[0-9]+$/;
      if(regex.test(action.payload)) {
        state.cnt = parseInt(action.payload);
      } else {
        console.log('넘버 아님', action.payload);
      }  
    },
  }
});

// 정의한 Actions 내보내기
export const {
  addCnt,
  minusCnt,
  changeCnt,
} = detail.actions;

// Reducer 내보내기
export default detail.reducer;