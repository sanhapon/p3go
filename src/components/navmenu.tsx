import * as React from 'react'
import { Link } from 'gatsby'

const NavMenu = () => {
    return (
        <nav>
                <ul>
                    <li><Link to="/">หน้าแรก</Link></li>
                    <li><Link to="/stuffs">รู้ไว้ใช่ว่า</Link></li>
                    <li><Link to="/car-knowledge">เรื่องเกี่ยวกับรถน่ารู้</Link></li>
                    <li><Link to="/traffic-regulations">กฎจราจร</Link></li>
                    <li><Link to="/car-insurance">ประกันรถ</Link></li>
                </ul>
            </nav>
    )
}

export default NavMenu
