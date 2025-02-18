export const getUserChatRoom = chatroom_id => {
    return $.ajax({
        method: 'GET',
        url: `api/chat_rooms/${chatroom_id}`,
        data: {
            chatroom_id
        }
    })
}

// UPDATE WITH USER_ID? 
export const getTherapistChatRooms = chat_room_ids => {
    return $.ajax({
        method: 'GET',
        url: `api/chat_rooms/${chat_room_ids}`,
        data: {
            chat_room_ids
        }
    })
}

// Do I have to pass a chatroom into here? It just needs current_user and current_user.current_therapist_id
export const createChatRoom = () => {
    return $.ajax({
        method: 'POST',
        url: 'api/chat_rooms'
    })
}

// export const getChatRoomId = (userId) => {
//     return $.ajax({
//         method: 'GET',
//         url: 'api/get_chatroom_id'
//     })
// };

export const getChatRoomId = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/get_chatroom_id'
    })
};

