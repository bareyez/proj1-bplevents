import React from 'react';
import Event from "./Event";

//All images from Pexels.com (a stock image website)

const Grid = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>...for the babies 👶</th>
                        <td></td>
                        <th>...for the teens 🧒</th>
                        <td></td>
                        <th>...for the adults 🧑</th>
                    </tr>
                    <td></td>
                </thead>
                <tbody>
                    <tr>
                        <Event event='Saturday Storytime' img='/storytime.jpg' color="brown1" time="11:00am-11:30am" location='Central Library' link="https://www.bklynlibrary.org/calendar/saturday-storytime-central-library-youth-20240127" />
                        <td></td>
                        <Event event='Beaded Jewelry' img='/jewlery.jpg' color='brown3' time="11:00am-1:00pm" location='Homecrest Library' link="https://www.bklynlibrary.org/calendar/beaded-jewelry-homecrest-library-20240127" />
                        <td></td>
                        <Event event='Linoleum Block Printing' img='/printing.jpg' color='brown4' time="1:30pm-3:00pm" location='Walt Whitman Library' link="https://www.bklynlibrary.org/calendar/linoleum-block-printing-walt-whitman-library-20240127" />
                    </tr>
                    <td></td>
                    <tr>
                        <Event event='Brainy Babies' img='/brainy.jpg' color="brown2" time="10:30am-11:30am" location='Arlington Library' link="https://www.bklynlibrary.org/calendar/brainy-babies-arlington-arlington-library-program-20240127" />
                        <td></td>
                        <Event event='Read to a Therapy Dog' img='/dog.jpg' color='brown4' time="11:00am-12:00pm" location='brown3point' link="https://www.bklynlibrary.org/calendar/read-therapy-dog-brown3point-eco-lab-1-20240127" />
                        <td></td>
                        <Event event='Invoking Ancestral Radiance' img='/skincare.jpg' color='brown3' time="1:00pm-2:00pm" location='Cortelyou' link="https://www.bklynlibrary.org/calendar/nourish-heal-restore-skin-cortelyou-meeting-room-20240127" />
                    </tr>
                    <td></td>
                    <tr>
                        <Event event='Sensory-Friendly Open Playroom' img='/playroom.jpg' color="brown3" time="11:00am-12:00pm" location='Paerdegat Library' link="https://www.bklynlibrary.org/calendar/sensory-friendly-open-paerdegat-library-20240127" />
                        <td></td>
                        <Event event='Scratch Coding for Kids!' img='/coding.jpg' color='brown2' time="11:00am-12:00pm" location='Virtual' link="https://www.bklynlibrary.org/calendar/scratch-coding-for-kids-virtual-20240127" />
                        <td></td>
                        <Event event='Windsor Terrace Weekend Writers' img='/writer.jpg' color='brown1' time="12:30pm-2:30pm" location='Windsor Terrace Library' link="https://www.bklynlibrary.org/calendar/windsor-terrace-weekend-windsor-terrace-library-20240127" /> 
                    </tr>
                    <td></td>
                    <tr>
                        <Event event='Ready, Set, Kindergarten!' img='/kindergarten.jpg' color='brown4' time="11:00am-12:00pm" location='Sunset Park Library' link="https://www.bklynlibrary.org/calendar/ready-set-kindergarten-sunset-park-library-20240127" />
                        <td></td>
                        <Event event='Chess Workshop' img='/chess.jpg' color ='brown1' time="11:30am-12:30am" location='Fort Hamilton Library' link="https://www.bklynlibrary.org/calendar/chess-workshop-fort-hamilton-library-20240127" />
                        <td></td>
                        <Event event='Line Dancing' img='/dancing.jpg' color='brown3' time="11:00am-12:30pm" location='Jamaica Bay Library' link="https://www.bklynlibrary.org/calendar/jamaica-bay-friends-jamaica-bay-meeting-room-20240127" />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Grid;