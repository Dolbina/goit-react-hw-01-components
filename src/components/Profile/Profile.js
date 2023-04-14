import PropTypes from 'prop-types';
import { InfoBlock, List, StatsInfo, Name, Text } from './Profile.styled';

export const Profile = ({ item: {
    username,avatar,tag,location,stats,
} }) => {
    return (
      <List>
        <img src={avatar} alt={username} width="60"  />
        <Name>{username}</Name>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
        <StatsInfo>
          <InfoBlock>
            <span>Followers</span>
            <span>{stats.followers}</span>
          </InfoBlock>
          <InfoBlock>
            <span>Views</span>
            <span>{stats.views}</span>
          </InfoBlock>
          <InfoBlock>
            <span>Likes</span>
            <span>{stats.likes}</span>
          </InfoBlock>
        </StatsInfo>
      </List>
    );
}

Profile.propTypes = {
    item: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
};