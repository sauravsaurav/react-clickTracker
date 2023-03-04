import  {useState , useEffect} from "react";
import classes from "./Container.module.css";
import ContainerList from "./ContainerList";


const Container = (props)=>{
  const totalclicks = useState(props.totalClicks)[0];
  // Using for speeding up the animation
  // const [speedValue , setSpeedValue]  = useState(props.speed);
  const [allContainers , setAllContainers] = useState(props.containers);
  const [clickedItems , setClickedItems] = useState([]);
  const [canProcessed , setCanProcessed] = useState(true);



  useEffect(()=>{
    
    if(totalclicks === clickedItems.length){
      setCanProcessed(false);
     
        for(let i = clickedItems.length - 1; i>= 0 ; i--){
          // counterElements(clickedItems[i] , ((clickedItems.length - i) * 1500));
          

            (function(item , time , isLast){
                setTimeout(function(){
                  setAllContainers(prevState=>{
                    const newArray = prevState.map(currentElement => {
                        if((currentElement.id) === (item)){
                            let tempClickStatus = currentElement.isClicked;
                            return {...currentElement , isClicked:!tempClickStatus}
                        }
                        return currentElement;
                    });
                    
                    return newArray;
                });

                if(isLast){
                  setTimeout(function(){
                    setCanProcessed(true);
                  },(100));
                }
                },time);
            })(clickedItems[i] , ((clickedItems.length - i) * 800), i===0);
        }
            

      setClickedItems([]);
    }
  },[clickedItems , canProcessed , totalclicks])

  const clickHandler = (data)=>{
    if(!canProcessed) { alert("Please wait , while processing"); return;}
    // For adding / removing the element from the array , as a stack of elements ordered by the clicks.
    setClickedItems(prevState => {
      let newData = [];
      if(prevState.includes(data)){
        newData = prevState.filter(id => id !== data)
      }
      else {
        newData = [...prevState , data];
      }
      return newData;
    }); 

    


    // For toggling the isClicked property of the clicked element.
    setAllContainers(prevState=>{
        const newArray = prevState.map(currentElement => {
            if((currentElement.id) === (data)){
                let tempClickStatus = currentElement.isClicked;
                return {...currentElement , isClicked:!tempClickStatus}
            }
            return currentElement;
        });
        
        return newArray;
    });
  }


 
  return (
    <div>
      {!canProcessed && <div className={classes.snackbar}>Please wait while processing...</div>}
      <center>
        <h2 className={classes.notice}>Allowed Selection : {totalclicks}</h2>
        {canProcessed === true && <h2 className={classes.bookingCount}>Total Selected : {clickedItems.length}</h2>}
        {canProcessed === false && <h2 className={classes.bookingCountDanger}>Processing and clearing. Please wait...</h2>}
      </center>
      <div className={classes.container}>
          {allContainers.map(container=> <ContainerList  key={container.id} containerid={container.id} classes={container.isClicked ? 'active' : 'default'} onClicked={clickHandler}/>)}
      </div>
    </div>
  );
}

export default Container;