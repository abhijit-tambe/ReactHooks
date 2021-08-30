import React from 'react';
import { shallow } from "enzyme";
import PersonList   from "./PersonList";


describe("PersonList renders without crashing",()=>{
    let personListWrapper;
    // beforeAll(()=>{
    //     personListWrapper = shallow(<PersonList/>);
    // })
    it("zero li in props",()=>{
        const people =[];
        personListWrapper = shallow(<PersonList people={people} />);
        const personListLi = personListWrapper.find('li');
        expect(personListLi).toHaveLength(0);
    })
    it("one li in props",()=>{
        const people =['li'];
        personListWrapper = shallow(<PersonList people={people} />);
        const personListLi = personListWrapper.find('li');
        expect(personListLi).toHaveLength(1);
    })

    it('multiple li',()=>{
        const people = ['jack','ma'];
        personListWrapper = shallow(<PersonList people={people}/>);
        const personListLi = personListWrapper.find('li'); 
        expect(personListLi).toHaveLength(people.length);
    })

    it("item inside li",()=>{
        const people = ["abhijit","dsad"];
         personListWrapper = shallow(<PersonList people={people}/>);
        const personListLi = personListWrapper.find('li');
        console.log('test',personListLi.length);
        
        // for (let i in people){
            expect(personListWrapper.find('li').forEach((x,i)=>{
                console.log(i);
                x.text().toBe(people[i]);
            }))
        // }
    })

})