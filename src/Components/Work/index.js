import React , {Component} from "react";
import axios from "axios";


import { WorkSection , WorkPart, WorkTile , Span , Icon , Line ,PartTitle ,PartDesc } from './style.js';
import { render } from "@testing-library/react";

class Work extends Component {
   
         state = {
             works : []
         }
         componentDidMount() {

         
         axios.get('js/data.json').then( res => {this.setState({ works: res.data.works })})
        }
        render() {
            const {works} = this.state;
            const workList = works.map( (workItem) =>  {
              return (
                <WorkPart first={workItem.id} key= {workItem.id}>
                <Icon className={workItem.icon_name}></Icon>
                <PartTitle>{workItem.title}</PartTitle>
                <Line />
                <PartDesc>
                   {workItem.body}                
                </PartDesc>
                </WorkPart>
              )
            })
        return (
            <WorkSection>
                <div className="container">
                    <WorkTile><Span>My</Span> Work</WorkTile>
              
                    {workList}
                   
                    
                </div>
            </WorkSection>
        )
    }
    
}
export default Work;