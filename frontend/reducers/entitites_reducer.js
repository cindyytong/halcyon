import { combineReducers } from 'redux';
import users from './users_reducer';
import therapists from './therapists_reducer';
import matches from './matches_reducer';
import topics from './topics_reducer';
import topicInterests from './topicInterests_reducer';
import chatrooms from './chatroom_reducer';
import messages from './message_reducer';
import notes from './notes_reducer';

export default combineReducers({
    users,
    therapists, 
    // matches,
    topics,
    // topicInterests,
    chatrooms,
    messages,
    notes
});
