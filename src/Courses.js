import Course from "./Course";
import { useState } from "react";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
function Courses({courses, removeCourse}) {
    
    const [index, setIndex] = useState(0);

    const {content, title, price} = courses[index];
    //

    const prevCourse = () => {
        setIndex((index) => {
            let newIndex = index-1;
            return checkIndex(newIndex);
        })
    }

    const nextCourse = () => {
        setIndex((index) => {
            let newIndex = index +1;
            return checkIndex(newIndex);
        })
    }

    const checkIndex = (index) => {
        if(index<0){
            return courses.length-1;
        }
        if(index> courses.length-1){
            return 0;
        }

        return index;
    }

    return <div className="courseMainDiv">
        <div>
            <h2>Kurslarım</h2>
        </div>
        <div className="cardDiv">
            <button className="FaChevronButton" onClick={prevCourse}>
                <FaChevronLeft />
            </button>
            <div className="card">
                <div className="cardTitlePrice">
                    <h2 className="cardTitle">{title}</h2>
                    <h4 className="cardPrice">{price} TL</h4>
                </div>
                <p>{content}</p>
            </div>
            <button className="FaChevronButton" onClick={nextCourse}>
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