import NavBar from "../NavBar"
import EmployeesImg from "../../assets/image/employees.png"
import CustomerImg from "../../assets/image/customers.png"
import CarImg from "../../assets/image/car.png"
import BillImg from "../../assets/image/bill.png"
import Footer from "../Footer";
import ServiceImg from "../../assets/image/service.png"
import ComponentImg from "../../assets/image/component.png"
const ManagerDashboard = () =>{
    const location = "/manager/home"
    return(
        <div className="relative a font-sora min-h-[896px] p-0 bg-gradient-to-b  from-[#1F3095] via-[#96577F] to-[#FA8E44] overflow-auto"  >
            <NavBar location = {location} />
            <div className=" absolute  top-[140px] w-full h-auto" >
                <div className=" box-content   left-[70px]" >
                    <img src={EmployeesImg} className="img-content" alt=""></img>
                    <br/>
                    <div className="absolute inset-x-1 bottom-5">
                        <i className="i-content"> 10 </i> Nhân viên
                    </div>
                </div>

                <div className=" box-content  right-[70px]" >
                    <img src={CustomerImg} className="img-content" alt=""></img>
                    <br/>
                    <div className="absolute inset-x-1 bottom-5">
                        <i className="i-content"> 500</i> 
                         Khách hàng
                    </div>
                </div>

                <div className=" box-content  top-[200px] left-[70px]" > 
                        <img src={CarImg} className="img-content" alt=""></img>
                        <br/>
                        <div className="absolute inset-x-1 bottom-5">
                            <i className="i-content"> 50</i> Xe sửa chữa
                        </div>
                </div>

                <div className=" box-content  top-[200px] right-[70px]" > 
                        <img src={BillImg} className="img-content" alt=""></img>
                        <br/>
                        <div className="absolute inset-x-1 bottom-5">
                            <i className="i-content"> 500</i> Hóa đơn
                        </div>
                </div>

                <div className=" box-content  top-[400px] left-[70px]" > 
                        <img src={ServiceImg} className="img-content" alt=""></img>
                        <br/>
                        <div className="absolute inset-x-1 bottom-5">
                            <i className="i-content"> 1000</i>Dịch vụ
                        </div>
                </div>

                <div className=" box-content top-[400px] right-[70px]" >
                        <img src={ComponentImg} className="img-content" alt=""></img>
                        <br/>
                        <div className="absolute inset-x-1 bottom-5">
                            <i className="i-content"> 1000</i>Linh kiện
                        </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default ManagerDashboard;