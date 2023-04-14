import PropTypes from 'prop-types';
import { InfoFriend, Status } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <InfoFriend>
      <Status isOnline={isOnline} >{isOnline}</Status>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </InfoFriend>
  );
};

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired,
};