

const Menu = () => {
  return (
    <nav className="px-2">
        <ul className="flex flex-col">
            <li>
                <a href="#" className="h-10 flex items-center text-sm font-semibold text-white rounded hover:text-white px-4 bg-active ">
                    Anasayfa
                </a>
            </li>
            <li>
                <a href="#" className="h-10 flex items-center text-sm font-semibold text-link rounded hover:text-white px-4 ">
                    Ara
                </a>
            </li>
            <li>
                <a href="#" className="h-10 flex items-center text-sm font-semibold text-link rounded hover:text-white px-4">
                    Kitaplıgın
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default Menu