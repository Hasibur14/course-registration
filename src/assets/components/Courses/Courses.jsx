import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = (handleCourseSelection) => {

    const [courses, setCourse] = useState([])

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {
                courses.map(item => <Course key={item.id} course={item} handleCourseSelection={handleCourseSelection}></Course>)
            }
         
        </div>
    );
};

export default Courses;