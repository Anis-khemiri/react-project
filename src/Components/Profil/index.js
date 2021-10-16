import React from "react";
import {ProfileSection , ProfileSkills , ProfileList ,ProfileItem , Span ,SkillParent,  SpanWeb , SkillSection , SkillDesc , SkillBar ,SkillBarTitle , SkillBarPer ,  SkillBarSpan ,Sp1 , Sp2 , Sp3 , PoskiTitle ,  ProskiSpan  } from './style.js'


const Profil = () => {
    return (
        <ProfileSection>
        <div class="container">
            <ProfileSkills>
                <PoskiTitle><Span>My </Span>Profile</PoskiTitle>
                <ProfileList>
                    <ProfileItem>
                        <Span>Name</Span>
                        Hamza Nabil
                    </ProfileItem>
                    <ProfileItem>
                        <Span>Birthday</Span>
                        21/1/1996
                    </ProfileItem>
                    <ProfileItem>
                        <Span>Address</Span>
                        Ain shams
                    </ProfileItem>
                    <ProfileItem >
                        <Span>Phone</Span>
                        4444 5555 6666
                    </ProfileItem>
                    <ProfileItem >
                        <Span>Email</Span>
                        hamza@hamza.com
                    </ProfileItem>
                    <ProfileItem >
                        <Span>Website</Span>
                        <SpanWeb>www.google.com</SpanWeb>
                    </ProfileItem>
                </ProfileList>
            </ProfileSkills>
            
            <SkillSection>
                <PoskiTitle>Some <Span>skills</Span></PoskiTitle>
                <SkillDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </SkillDesc>
                <SkillBar>
                    <SkillBarTitle>Bootstrap</SkillBarTitle>
                    <SkillBarPer>100%</SkillBarPer>
                    <SkillParent>
                    <SkillBarSpan> 
                    <Sp1>sp1</Sp1>
                    </SkillBarSpan>
                    </SkillParent>
                
                </SkillBar>
                
                <SkillBar>
                    <SkillBarTitle>CSS3</SkillBarTitle>
                    <SkillBarPer>90%</SkillBarPer>
                    <SkillParent>
                    <SkillBarSpan><Sp2 /></SkillBarSpan>
                    </SkillParent>
                </SkillBar>
                
                <SkillBar>
                    <SkillBarTitle>Photoshop</SkillBarTitle>
                    <SkillBarPer>80%</SkillBarPer>
                    <SkillParent>
                    <SkillBarSpan>sp3</SkillBarSpan>
                    </SkillParent>
                </SkillBar>
            </SkillSection>
            
        </div>
    </ProfileSection>
    
    )
}

export default Profil;
