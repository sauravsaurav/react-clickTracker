import React, {useState} from "react";
import classes from "./ContainerList.module.css";

const ContainerList = (props)=>{
    const [isHover , setIsHover] = useState(false);


    const clickHandler = (e)=>{
        props.onClicked(e.target.getAttribute('containerid'));
    }

    const mouseOverHandler = ()=>{
        setIsHover(true);
    }

    const mouseOutHandler = ()=>{
        setIsHover(false);
    }

    return (
        <div className={`${classes.containerList} ${classes[props.classes]} ${isHover ? classes.hoverEffect : ''}`} containerid={props.containerid}  onClick={clickHandler} onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}></div>
    )
}

export default ContainerList;