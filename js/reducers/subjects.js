import moment from 'moment';

const initialState = {
    subjectList:{
        'Chemistry':{
            name: 'Chemistry',
            teacher: 'Xandra Junio',
            room: 'SHB 111',
            color: '#C2185B',
        },
        'Biology':{
            name: 'Biology',
            teacher: 'Con Kontos',
            room: 'Room A',
            color: '#71FF5B',
        },
        'Maths B':{
            name: 'Maths B',
            teacher: 'Petri Espanol',
            room: 'SHB 402',
            color: '#000',
        },
    },
    scheduleList:{
        'Monday':{
            name: 'Monday',
            schedule:_sortByTime([
                {name: 'Chemistry', timeIn: '11:40', timeOut: '1:00'},
                {name: 'Biology', timeIn: '11:35', timeOut: '1:00'},
            ])
        },
        'Tuesday':{
            name: 'Tuesday',
            schedule:_sortByTime([
                {name: 'Maths B', timeIn: '11:40', timeOut: '1:00'},
                {name: 'Biology', timeIn: '11:35', timeOut: '1:00'},
            ])
        }
    }
}

function _sortByTime(list){
    return list.sort(function(a,b){
        return moment(a.timeIn, ['h:m a', 'H:m']) - moment(b.timeIn, ['h:m a', 'H:m'])
    });
}

function subjects(state = initialState, action){
    switch(action.type){
        case 'ADD_SUBJECT':{
            return {
                ...state,
                subjectList:{
                    ...state.subjectList,
                    [action.subject]:{
                        name: action.subject,
                        teacher: action.teacher,
                        room: action.room,
                        color: action.color
                    }
                },
                scheduleList:{
                    ...state.scheduleList,
                    [action.day]:{
                        name: [action.day],
                        schedule: _sortByTime([
                            ...state.scheduleList[action.day].schedule,
                            {
                                name: action.subject,
                                timeIn: action.timeIn,
                                timeOut: action.timeOut,
                            },
                        ])
                    }
                }
            }
        }
        case 'DELETE_SUBJECT':{
            let { [action.subject]: omit, ...res} = state.subjectList
            return{
                subjectList: res
            }
        }
        case 'ADD_SCHEDULE':{
            return {
                subjectList: subjectList,
                scheduleList:{
                    ...scheduleList,
                    [action.day]:{
                        name: [action.day],
                        schedule: [
                            ...scheduleList[action.day].schedule,
                            {
                                name: action.subject,
                                timeIn: action.timeIn,
                                timeOut: action.timeOut,
                            },
                        ]
                    }
                }
            }
        }
        default:
            return state
    }
}

module.exports = subjects