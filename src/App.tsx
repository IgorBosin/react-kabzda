import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import Accordion from "./components/Accordion/Accordion";
import OnOffUncontrolled from "./components/OnOffUncontrolled/OnOffUncontrolled";
import {RatingUncontrolled} from "./components/RatingUncontrolled/RatingUncontrolled";
import AccordionUncontrolled from "./components/AccordionUncontrolled/AccordionUncontrolled";
import {Select} from "./components/Select/Select";

export const itemsForAccordion = [
    {title: 'Igor', value: 1},
    {title: 'Mary', value: 2},
    {title: 'Leha', value: 3},
]

function App() {

    let [ratingValue, setRatingValue] = useState<number>(4)
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [onOff, setOnOff] = useState(true)

    return (
        <div>
            <Select collapsed={collapsed} setCollapsed={setCollapsed} items={itemsForAccordion}/>

            {/*<OnOffUncontrolled onChange={setOnOff}/>*/}
            {/*<OnOff onOff={onOff}  setOnOff={setOnOff}/>*/}
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}

            {/*<Accordion onClickItems={x=>x} items={itemsForAccordion} titleValue={'Menu'} setCollapsed={setCollapsed} collapsed={collapsed}/>*/}

            <AccordionUncontrolled titleValue={'Menu unControlled'}/>
            <AccordionUncontrolled titleValue={'Users unControlled'}/>

            {/*<RatingUncontrolled onChange={setRatingValue}/>*/}
            {/*<Rating ratingValue={ratingValue} setRatingValue={setRatingValue}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
