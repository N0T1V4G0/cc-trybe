import { FeedbackItem } from './FeedbackItem';

export function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>There's no feedbacks yet</p>;
  }

  return (
    <div>
      {feedback.map((el) => (
        <FeedbackItem key={el.id} item={el} />
      ))}
    </div>
  );
}
