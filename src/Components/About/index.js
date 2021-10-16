import React from "react";
import { AboutSection ,AboutInfo , InfoDesc , InfoDir , InfoTitle , Span } from './style.js'
const About = () => {
    return (
        <AboutSection>
            <div class="container">
                <AboutInfo>
                    <InfoTitle><span>This is</span> Me</InfoTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <a href="#">explicabo</a> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc>
                       
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
               
               
                       </InfoDesc>
               
                


            </AboutInfo>


            
            </div>

        </AboutSection>
    )
}
export default About;