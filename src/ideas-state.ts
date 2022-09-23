import { IdeaProps } from "./types";
import { createIdeaState } from "./idea-state";
import { proxy } from "valtio";

type IdeasState = {
  ideas: IdeaProps[];
  addIdea: () => void;
  removeIdea: () => void;
};

export function createIdeasState(): IdeasState {
  const state: IdeasState = proxy({
    ideas: [createIdeaState()],
    addIdea: () => state.ideas.push(createIdeaState()),
    removeIdea: () => {
      if (state.ideas.length > 1) {
        state.ideas.pop();
      }
    },
  });

  return state;
}

// If we want to use as a global store...
export const ideasState = createIdeasState();
