import './ListItem.css'
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../store/actions/todoActions';
import { uptadeTodo } from './../store/actions/todoActions';

const ListItem=(props)=>{
    const dispatch=useDispatch();
return(
    <div className='list-item hover:bg-gray-200'>
        <div className={props.className}>
       
          <input type='checkbox' className='mr-4' 
          checked={props.item.complete}
          onChange={()=>{
              dispatch(uptadeTodo(props.item.id,!props.item.complete))
          }}
          />
           <span>{props.item.text}</span>
           {/* bura props.item olsa yeterli deilmiydi */}
        </div>
        {!props.item.complete && <div className='remove-list-item' onClick={()=>{
             dispatch(deleteTodo(props.item.id))
        }}>sil</div>}
        
    </div>
)
}

export default ListItem