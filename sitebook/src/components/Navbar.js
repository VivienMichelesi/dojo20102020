import React from 'react';

const liens = [
  {
    text: 'Link 1',
    lien: "#"
  },
  {
    text: 'Link 2',
    lien: "#"
  },
  {
    text: 'Link 2',
    lien: "#"
  }
];

function ListLien (test) {
  return (
    test.map(item => <li className="nav-item">
    <a className="nav-link" href={item.lien}  key={item.text}>{item.text}</a>
  </li>)
  )
}

const Navbar = () => {
  return (
    // A grey horizontal navbar that becomes vertical on small screens
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        {/* Links */}
        <ul className="navbar-nav">
          { ListLien(liens) }
        </ul>
      </div>
    </nav>
  )
}



// function ListLien () {
//   return (
//     liens.map(item => <Navbar key={item.text} text={item.text} lien={item.lien} />)
//   )
// }

export default Navbar;


// const MenuList = ({ menuItems }) => {
//   return (
//       <div>
//           { menuItems.map(item => <MenuItem itemInfo={item} key={item.itemName} /> ) }
//       </div>
//   )
// }
