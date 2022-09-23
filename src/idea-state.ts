import { IdeaProps } from "./types";
import { proxyWithComputed } from "valtio/utils";

export function createIdeaState(): IdeaProps {
  const state = proxyWithComputed(
    {
      value: "",
      onValueChange: (value: string) => (state.value = value),
      upVotes: 0,
      downVotes: 0,
      onUpVote: () => state.upVotes++,
      onDownVote: () => state.downVotes++,
    },
    { rating: (snap) => snap.upVotes - snap.downVotes }
  );
  return state;
}
