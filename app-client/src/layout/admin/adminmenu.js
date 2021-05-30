import {  Link } from 'react-router-dom';

export default function AdminMenu(){
    return  <div>
        <Link  to='/admin/usersinfo'>Users </Link>
        <Link  to='/admin/productsinfo'>Products</Link>
        
    </div>
}