import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE ?? "/api";
import Timetable from "./Timetable";
import './App.css';




function App() {



    const [courses, setCourses] = useState<any[]>([]);



    const [picked, setPicked] = useState<string[]>([]);



    const [routines, setRoutines] = useState<any[]>([]);


 

    const [current, setCurrent] = useState(0);




    useEffect(() => {

        fetch(`${API_BASE}/courses`)
            .then(response => response.json())
            .then(data => {
                setCourses(data);
            })
            .catch(error => {
                console.error("Error loading courses:", error);
            });

    }, []);


 

    function toggle(code: string) {

        if (picked.includes(code)) {

            setPicked(
                picked.filter(courseCode => courseCode !== code)
            );

        } else {

            setPicked([
                ...picked,
                code
            ]);
        }
    }


    function generate() {


        if (picked.length === 0) {
            alert("Please select at least one course.");
            return;
        }


        fetch(`${API_BASE}/solve`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                codes: picked
            })

        })

            .then(response => response.json())

            .then(data => {

                // Save generated routines
                setRoutines(data);

                // Start from the first routine
                setCurrent(0);

            })

            .catch(error => {

                console.error(
                    "Error generating routines:",
                    error
                );

            });
    }



    function nextRoutine() {

        if (current < routines.length - 1) {

            setCurrent(current + 1);

        }
    }



    function previousRoutine() {

        if (current > 0) {

            setCurrent(current - 1);

        }
    }




    return (

        <div className="app">

            <h1>Routine Builder</h1>


            <h2>Select Your Courses</h2>


            <div className="course-list">

                {courses.map(course => (

                    <label key={course.code}>

                        <input
                            type="checkbox"
                            checked={picked.includes(course.code)}
                            onChange={() => toggle(course.code)}
                        />

                        {course.code}

                    </label>

                ))}

            </div>


            <button onClick={generate}>
                Generate Routine
            </button>



            {routines.length > 0 && (

                <div className="results">

                    <h2>
                        Routine {current + 1} of {routines.length}
                    </h2>



                    <Timetable
                        routine={routines[current]}
                    />


                    <div className="navigation">

                        <button
                            onClick={previousRoutine}
                            disabled={current === 0}
                        >
                            Previous
                        </button>


                        <button
                            onClick={nextRoutine}
                            disabled={
                                current === routines.length - 1
                            }
                        >
                            Next
                        </button>

                    </div>

                </div>

            )}


            {routines.length === 0 && picked.length > 0 && (

                <p>
                    Click "Generate Routine" to find possible routines.
                </p>

            )}

        </div>
    );
}


export default App;
