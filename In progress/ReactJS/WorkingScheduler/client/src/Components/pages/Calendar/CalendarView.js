import React from 'react';
import Paper from '@mui/material/Paper';
import {
    Scheduler,
    WeekView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import { priorities } from './today-appointments';
import { appointments } from './today-appointments';

// import { styled, alpha } from '@mui/material/styles';
// import PriorityHigh from '@mui/icons-material/PriorityHigh';
// import LowPriority from '@mui/icons-material/LowPriority';
// import classNames from 'clsx';
// const PREFIX = 'Demo';

// const groupingStyles = ({ theme }) => ({
//     [`&.${classes.cellLowPriority}`]: stylesByPriority.cellLowPriority,
//     [`&.${classes.cellMediumPriority}`]: stylesByPriority.cellMediumPriority,
//     [`&.${classes.cellHighPriority}`]: stylesByPriority.cellHighPriority,
//     [`&.${classes.headerCellLowPriority}`]: stylesByPriority.headerCellLowPriority,
//     [`&.${classes.headerCellMediumPriority}`]: stylesByPriority.headerCellMediumPriority,
//     [`&.${classes.headerCellHighPriority}`]: stylesByPriority.headerCellHighPriority,
//     [`& .${classes.icon}`]: {
//         paddingLeft: theme.spacing(1),
//         verticalAlign: 'middle',
//     },
// });

// const StyledWeekViewTimeTableCell = styled(WeekView.TimeTableCell)(groupingStyles);

// const classes = {
//   flexibleSpace: `${PREFIX}-flexibleSpace`,
//   prioritySelector: `${PREFIX}-prioritySelector`,
//   content: `${PREFIX}-content`,
//   contentContainer: `${PREFIX}-contentContainer`,
//   text: `${PREFIX}-text`,
//   title: `${PREFIX}-title`,
//   icon: `${PREFIX}-icon`,
//   contentItemIcon: `${PREFIX}-contentItemIcon`,
//   grayIcon: `${PREFIX}-grayIcon`,
//   colorfulContent: `${PREFIX}-colorfulContent`,
//   lens: `${PREFIX}-lens`,
//   textCenter: `${PREFIX}-textCenter`,
//   dateAndTitle: `${PREFIX}-dateAndTitle`,
//   titleContainer: `${PREFIX}-titleContainer`,
//   container: `${PREFIX}-container`,
//   bullet: `${PREFIX}-bullet`,
//   prioritySelectorItem: `${PREFIX}-prioritySelectorItem`,
//   priorityText: `${PREFIX}-priorityText`,
//   priorityShortText: `${PREFIX}-priorityShortText`,
//   cellLowPriority: `${PREFIX}-cellLowPriority`,
//   cellMediumPriority: `${PREFIX}-cellMediumPriority`,
//   cellHighPriority: `${PREFIX}-cellHighPriority`,
//   headerCellLowPriority: `${PREFIX}-headerCellLowPriority`,
//   headerCellMediumPriority: `${PREFIX}-headerCellMediumPriority`,
//   headerCellHighPriority: `${PREFIX}-headerCellHighPriority`,
// };

// const stylesByPriority = priorities.reduce((acc, priority) => ({
//     ...acc,
//     [`cell${priority.text.replace(' ', '')}`]: {
//         backgroundColor: alpha(priority.color[400], 0.1),
//         '&:hover': {
//             backgroundColor: alpha(priority.color[400], 0.15),
//         },
//         '&:focus': {
//             backgroundColor: alpha(priority.color[400], 0.2),
//         },
//     },
//     [`headerCell${priority.text.replace(' ', '')}`]: {
//         backgroundColor: alpha(priority.color[400], 0.1),
//         '&:hover': {
//             backgroundColor: alpha(priority.color[400], 0.1),
//         },
//         '&:focus': {
//             backgroundColor: alpha(priority.color[400], 0.1),
//         },
//     },
// }), {});


// const StyledWeekViewDayScaleCell = styled(WeekView.DayScaleCell)(groupingStyles);

// const WeekViewTimeTableCell = ({
//     groupingInfo, ...restProps
// }) => {
//     const groupId = groupingInfo[0].id;
//     return (
//         <StyledWeekViewTimeTableCell
//             className={classNames({
//                 [classes.cellLowPriority]: groupId === 1,
//                 [classes.cellMediumPriority]: groupId === 2,
//                 [classes.cellHighPriority]: groupId === 3,
//             })}
//             groupingInfo={groupingInfo}
//             {...restProps}
//         />
//     );
// };


// const WeekViewDayScaleCell = ({
//     groupingInfo, ...restProps
// }) => {
//     const groupId = groupingInfo[1].id;
//     return (
//         <StyledWeekViewDayScaleCell
//             className={classNames({
//                 [classes.headerCellLowPriority]: groupId === 1,
//                 [classes.headerCellMediumPriority]: groupId === 2,
//                 [classes.headerCellHighPriority]: groupId === 3,
//             })}
//             groupingInfo={groupingInfo}
//             {...restProps}
//         />
//     );
// };

function ViewCalendarComponent() {
    return (
        <div>
            <Paper>
                <Scheduler data={appointments} height={660}>
                    <WeekView startDayHour={8} endDayHour={22} excludedDays={[0, 6]}

                        // timeTableCellComponent={WeekViewTimeTableCell}
                        // dayScaleCellComponent={WeekViewDayScaleCell}

                    />
                    <Appointments />
                </Scheduler>
            </Paper>
        </div>
    );
};

export default ViewCalendarComponent;