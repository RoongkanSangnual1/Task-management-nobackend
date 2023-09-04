import "./Addform.css"
export default function Addform(props) {
    const { title, setTitle,saveTask,editid,timee,setTime} = props
    return (
        <>
            <h2>แอพบริหารจัดการงาน</h2>
            <form onSubmit={saveTask}>
                <div className="from-control">
                    <input type="text" className="text-input" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <input type="time" className="text-input" value={timee} onChange={(e) => setTime(e.target.value)} />
                    <button type="submit" className="submit-button" > {editid ? "อัพเดท" : "เพิ่ม"  } </button>
                </div>
            </form>
        </>
    )
}