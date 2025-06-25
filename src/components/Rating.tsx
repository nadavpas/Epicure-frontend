import { Star } from "../assets/Icons";
interface RatingProps {
  rating: number;
}
function Rating({ rating }: RatingProps) {
  const fill = "#DE9200";
  return (
    <div>
      {Array.from({ length: 5 }).map((_, i) => {
        const isFull = i + 1 <= rating;
        return (
          <>
            {isFull ? (
              <Star fill={fill} key={i} />
            ) : (
              <Star fill={"none"} key={i} />
            )}
          </>
        );
      })}
    </div>
  );
}
export default Rating;
