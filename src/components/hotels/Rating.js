import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SortingPanel(props) {
  return (
    <div className="hotel-rating">
      { [...Array(props.rating)].map((e, i) => (
        <FontAwesomeIcon icon="star" />
      ))}
    </div>
  );
}
