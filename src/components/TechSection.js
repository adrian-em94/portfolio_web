import React from 'react';
import '../components/TechSection.css'


function TechSection() {
    return (
        <div className="tech_container">
            <h2 className='tech_heading'>Technologies</h2>
            <div className='main_container'>
                <div className="mini_container">
                    <h4 className='smaller_tech_heading'>Front-End</h4>
                        <ul className='list_indent'>
                            <li>React</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                </div>
                <div className="mini_container">
                    <h4 className='smaller_tech_heading'>Back-End</h4>
                    <ul className='list_indent'>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>C++</li>
                        <li>Java</li>
                        <li>SQL</li>
                    </ul>
                </div>
            </div>    
        </div>
    )
}

export default TechSection;