import NavBar from "../NavBar";

const StatSalary =()=>{
    const location = "/manager/stat_salary"
    return(
        <div className="relative h-screen">
            <NavBar location={location}/>
        </div>
    )
}
export default StatSalary;