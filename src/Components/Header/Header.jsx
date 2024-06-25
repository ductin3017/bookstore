import logo from '../../assets/images/logo.png'; 
import { Link } from 'react-router-dom';
import CountryDropdown from '../CountryDropdown';
import { IoIosSearch } from "react-icons/io";
import Button from '@mui/material/Button';



const Header =()=> {
    return (
        <>
            <div className="headerWrapper">
                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}><img src={logo} alt='Logo'/></Link>
                            </div>
                            <div className='col-sm-10 d-flex align-items-center part2'>
                                <CountryDropdown />

                                {/* Header Search Start */}
                                    <div className='headerSearch ml-3 mr-3'>
                                        <input type='text' placeholder='Tìm kiếm sách...'/>
                                        <Button><IoIosSearch/></Button>
                                    </div>
                                {/* Header Search End */}

                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
};

export default Header;