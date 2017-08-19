function addSubject(subject, teacher, room, color, day, timeIn, timeOut){
    return {
        type: 'ADD_SUBJECT',
        subject: subject,
        teacher: teacher,
        room: room,
        color: color,
        day: day,
        timeIn: timeIn,
        timeOut: timeOut
    }
}
function deleteSubject(subject){
    return {
        type: 'DELETE_SUBJECT',
        subject: subject,
    }
}

module.exports = { addSubject, deleteSubject }