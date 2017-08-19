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
function deleteSchedule(day, idx){
    return {
        type: 'DELETE_SCHEDULE',
        day: day,
        idx: idx,
    }
}

module.exports = { addSubject, deleteSchedule }