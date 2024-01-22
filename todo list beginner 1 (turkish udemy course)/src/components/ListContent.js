import './ListContent.css'
import ListItem from './ListItem';
import ListItemFooter from './ListItemFooter';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';


const  ListContent=()=>{
   const [list,setList]=useState([])
   const {todoList,todoFilter}=useSelector((state)=>state.todo)  

   useEffect(()=>{
      if(todoFilter==='all'){
      setList(todoList)
      return
      }  
      setList(todoList.filter((x)=>x.complete))
   },[todoList,todoFilter])
   return(
      <div className="List-wrapper">
         <div className='content'>
            {list.length<1 && <div className='text-xs text-gray-700 font-bold text-center'>henuz bir gorev yok</div>}
         
         {list.map((x)=>{
            return(
               <ListItem 
               key={x.id}
               item={x}
               className={x.complete?'completed':''}
               />
              
            )
         })}
         </div>
          <ListItemFooter></ListItemFooter>
      </div>
   )
}  

export default ListContent;