import { useSnapshot } from "valtio";
import { Idea } from "./idea";
import { createIdeaState } from "./idea-state";
import { ideasState } from "./ideas-state";

const ideaOne = createIdeaState();
const ideaTwo = createIdeaState();

export function ValtioDemo() {
  const ideaOneSnap = useSnapshot(ideaOne);
  const ideaTwoSnap = useSnapshot(ideaTwo);
  const snap = useSnapshot(ideasState);
  return (
    <>
      <div className="valtio-demo">
        <Idea {...ideaOneSnap} />
        <Idea {...ideaTwoSnap} />
        <h3>
          Total Votes:{" "}
          {ideaOneSnap.upVotes +
            ideaOneSnap.downVotes +
            ideaTwoSnap.upVotes +
            ideaTwoSnap.downVotes}
        </h3>
      </div>
      <div className="row">
        <button
          type="button"
          onClick={(evt) => {
            evt.preventDefault();
            snap.addIdea();
          }}
        >
          Add Idea
        </button>
        <button
          type="button"
          onClick={(evt) => {
            evt.preventDefault();
            snap.removeIdea();
          }}
        >
          Remove Idea
        </button>
        {snap.ideas.map((ideaState, index) => (
          <Idea key={index} {...ideaState} />
        ))}
        <h3>
          Total Votes:{" "}
          {snap.ideas.reduce(
            (total, ideaState) =>
              total + ideaState.upVotes + ideaState.downVotes,
            0
          )}
        </h3>
      </div>
    </>
  );
}
