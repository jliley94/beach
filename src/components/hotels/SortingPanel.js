import Button from '../Shared/Button';

export default function SortingPanel(props) {
  return (
    <div className="hotel-sortingPanel">
      <nav>
          <Button 
            active={(props.active === 0)} 
            type="sort" 
            name="sort alphabetically" 
            icon="sort-alpha-down" 
            action={() => handleSelection(0, props)}
            disabled={props.loading}
            />
          <Button 
            active={(props.active === 1)} 
            type="sort" 
            name="sort by price" 
            icon="pound-sign" 
            action={() => handleSelection(1, props)} 
            disabled={props.loading}
            />
          <Button 
            active={(props.active === 2)} 
            type="sort" 
            name="sort by star rating" 
            icon="star" 
            action={() => handleSelection(2, props)} 
            disabled={props.loading}
            />
      </nav>
    </div>
  );
}

function handleSelection(i, props) {
    props.setActive(i);
    props.sortContent(i);
}
