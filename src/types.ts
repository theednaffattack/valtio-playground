export type IdeaProps = {
  value: string;
  onValueChange: (value: string) => void;
  onUpVote: () => void;
  onDownVote: () => void;
  upVotes: number;
  downVotes: number;
  rating: number;
};
