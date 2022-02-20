import "./Card2.css";
import Done from "./done.png";
import InProgress from "./inProgress.png";
import Review from "./review.png";
import ToDo from "./toDo.png";
const images = { ToDo, InProgress, Done, Review };

const Card2 = (props) => {
  const {
    children,
    titleText = "To Do",
    titleColor = "white",
    cardColor = "blue",
    icon = "To Do",
  } = props;

  return (
    <div className={`card-${cardColor}`}>
      <div className="img-title">
        <img src={images[icon]} alt="icon" />
        <h1 className={`cardOutside-title-${titleColor}`}> {titleText}</h1>
      </div>
      {children}
    </div>
  );
};

export default Card2;
