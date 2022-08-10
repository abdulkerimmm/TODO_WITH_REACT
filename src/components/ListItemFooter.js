import './ListItemFooter.css'
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { setTodoFilter } from '../store/actions/todoActions';


const ListItemFooter=()=>{
    const {todoFilter,todoList}=useSelector((state)=>state.todo)
    const dispatch=useDispatch()
    return(
       <di className="main-Footer">
            <div className='left-item'>
              {todoList.filter((x)=>!x.complete).length+'kaldi'}
            </div>


            <div className={`menu-item ${todoFilter==='all'?'active':''}`} onClick={()=>{
                dispatch(setTodoFilter('all'))
            }} >
                ALL
            </div>


            <div className={`menu-item ${todoFilter==='complete'?'active':''}`}  onClick={()=>{
                dispatch(setTodoFilter('complete'))
            }} >
                Completed
           </div>
       
       
       </di>
    )
}

export default ListItemFooter