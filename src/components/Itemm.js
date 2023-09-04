import "./Itemm.css"
import { BsTrash3Fill } from "react-icons/bs";
import { BiMessageSquareEdit } from "react-icons/bi";
export default function Itemm(props) {
    const { item , deleteTask , editTask} = props;



    return (
        <div className="list-item">
            <p className="title">{item.title} เวลา:{item.timee}</p>
            <div className="button-container">
                <BsTrash3Fill className="btn" onClick={()=>deleteTask(item.id)}>ลบ</BsTrash3Fill>
                <BiMessageSquareEdit className="btn" onClick={()=>editTask(item.id)}>แก้ไข</BiMessageSquareEdit>

            </div>
        </div>
    )
}