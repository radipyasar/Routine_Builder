

const TIMES = [
    { start: "08:00", end: "09:30" },
    { start: "09:40", end: "11:10" },
    { start: "11:20", end: "12:50" },
    { start: "13:00", end: "14:30" },
    { start: "14:40", end: "16:10" },
    { start: "16:20", end: "17:50" },
];



const DAYS = ["S", "M", "T", "W", "R", "A"];




function Timetable({ routine }: { routine: any[] }) {

    // Find which section belongs
    // in a particular day + time
    function findClass(day: string, start: string) {

        for (const section of routine) {

            for (const slot of section.slots) {

                if (
                    slot.day === day &&
                    slot.start === start
                ) {
                    return section;
                }
            }
        }

        return null;
    }



    return (
        <table border={1}>

            {/* TABLE HEADER */}
            <thead>
                <tr>

                    <th>Time</th>

                    {DAYS.map(day => (
                        <th key={day}>
                            {day}
                        </th>
                    ))}

                </tr>
            </thead>


            {/* TABLE BODY */}
            <tbody>

                {TIMES.map(time => (

                    <tr key={time.start}>

                        {/* TIME COLUMN */}
                        <td>
                            {time.start} - {time.end}
                        </td>


                        {/* DAY COLUMNS */}
                        {DAYS.map(day => {

                            const found = findClass(
                                day,
                                time.start
                            );

                            return (
                                <td key={day}>
                                    {found ? found.id  : ""}
                                    <br />
                                    {found ? found.faculty : ""}
                                </td>
                            );

                        })}

                    </tr>

                ))}

            </tbody>

        </table>
    );
}


export default Timetable;