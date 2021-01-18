import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.scss';

export default function Button(props) {
    const active = (props.active) ? "active" : "inactive";
    return (
      <div className={`button ${props.type} ${active}`}>
          <a onClick={(props.disabled) ? "" : props.action}>
              <div className="button-name" dangerouslySetInnerHTML={ {__html: props.name} }></div>
              { (!!props.icon) &&
                <FontAwesomeIcon icon={props.icon} />
              }
          </a>
      </div>
    );
  }
  