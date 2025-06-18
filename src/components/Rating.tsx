import { Star } from "./Icons";
interface RatingProps{
    rating : number
}
function Rating({rating} : RatingProps) {
  const fill = "#DE9200";
  return (
    <div>
      {Array.from({ length: 5 }).map((_, i) => {
        const isFull = i + 1 <= rating;
        return (
          <>
            {isFull? (<Star fill={fill}/>) : (<Star fill={'none'}/>)}
          </>
        );
      })}
    </div>
  );
}
export default Rating;
