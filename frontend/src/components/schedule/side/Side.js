import React,{useState} from 'react'
import './Side.scss'
import Occurrence from '../occurrence/Occurrence'
import { useSelector } from 'react-redux'

function Side() {
  const events = useSelector(state => state.events.events)
  const [eventFilter, setEventFilter] = useState(events);
  const [filtered, setFiltered] = useState(false);

  const filter=(event)=>{
    setFiltered(true);
    let tempFilter=events.filter((ev)=>{
      let val=event.target.value;
      return ev.title.includes(val) || ev.type.includes(val);
    })
    setEventFilter(tempFilter)
  }

  const mapEvents=(data)=>(
    data.map(el => <Occurrence key={el._id} el={el}></Occurrence>)
  )

  return (
    <div className="side">
      <div className="side__searchBar">
        <img
            className="side__searchBar__searchIcon"
            src={require('../../../assets/icons/magnifying-glass.svg')}
            alt="search-icon"
          />
        <input className="side__searchBar__searchInput" type="text" placeholder="Buscar..." onChange={filter}/>
      </div>


      <div className="side__events">
        {filtered || eventFilter.length>0?mapEvents(eventFilter):mapEvents(events)}
      </div>
      
    </div>
  )
}

export default Side
