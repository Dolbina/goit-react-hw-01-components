import { StatList } from "components/StatList/StatList";
import PropTypes from 'prop-types';
import { ListWrap } from "./Statistics.styled";

export const Statistics = ({ items, title }) => {
    return (
      <div>
        {title && <h2> {title}</h2>}
        <ListWrap>
          {items.map(item => (
            <li key={item.id}>
              <StatList item={item} />
            </li>
          ))}
        </ListWrap>
      </div>
    );
};

Statistics.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ).isRequired,
};