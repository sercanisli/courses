import Course from "./Course";
import { useState } from "react";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
function Courses({courses, removeCourse}) {
    
    const [index, setIndex] = useState(0);
    // index vererek idler üzerinden gösterebilirim.

    const {content, title, price} = courses[index];
    //

    return <div className="courseMainDiv">
        <div>
            <h2>Kurslarım</h2>
        </div>
        <div className="cardDiv">
            <button className="FaChevronButton">
                <FaChevronLeft />
            </button>
            <div className="card">
                <div className="cardTitlePrice">
                    <h2 className="cardTitle">{title}</h2>
                    <h4 className="cardPrice">{price} TL</h4>
                </div>
                <p>{content}</p>
            </div>
            <button className="FaChevronButton">
                <FaChevronRight />
            </button>
            {/* {
                courses.map((course) => {
                    return (
                        <Course key={course.id} {...course} removeOneCourse={removeCourse}/>
                    )
                })
            } */}
        </div>
    </div>;
}

export default Courses;