import { RecoilState, atom } from "recoil";

export const userState: RecoilState<UserStateType | null> =
  atom<UserStateType | null>({
    key: "userState",
    default: null,
  });
