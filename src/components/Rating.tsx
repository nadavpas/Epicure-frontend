import { default as StarsRate} from "../assets/Icons/StarsRate";
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
              <StarsRate fill={fill} key={i} />
            ) : (
              <StarsRate fill={"none"} key={i} />
            )}
          </>
        );
      })}
    </div>
  );
}
export default Rating;
