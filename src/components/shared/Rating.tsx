import { Fragment } from "react/jsx-runtime";
import { default as StarsRate} from "../../assets/Icons/StarsRate";
import { Color } from "../../utils/variable";
interface RatingProps {
  rating: number;
}
function Rating({ rating }: RatingProps) {
  return (
    <div>
      {Array.from({ length: 5 }).map((_, i) => {
        const isFull = i + 1 <= rating;
        return (
          <Fragment key={i}>
            {isFull ? (
              <StarsRate fill={Color.gold}  />
            ) : (
              <StarsRate fill={"none"}/>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
export default Rating;
