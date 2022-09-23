import { IdeaProps } from "./types";

export function Idea({
  downVotes,
  onDownVote,
  onUpVote,
  onValueChange: onChange,
  rating,
  upVotes,
  value,
}: IdeaProps) {
  return (
    <div className="row">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button type="button" onClick={onUpVote}>
        Up 👍🏾
      </button>
      <button type="button" onClick={onDownVote}>
        Down 👎🏾
      </button>
      <span>👍🏾 Up Votes ({upVotes})</span>
      <span>👎🏾 Down Votes ({downVotes})</span>
      <span>Rating ({rating})</span>
    </div>
  );
}
