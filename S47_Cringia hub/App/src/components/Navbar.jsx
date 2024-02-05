import React from 'react'

const navdata = {
  options: ['About', 'Home', 'Contact', 'Login'],
}

function Navbar() {
  return (
    <>
    <div className='bar' style={{display: 'flex' ,justifyContent: 'space-between' ,alignItems: 'center'}}>
        <div className="logo" style={{width: '1100px', fontSize: '30px', fontWeight: 'bold', marginLeft: '10px'}}>
          <marquee behavior="sliding" direction="left" scrollamount="30" ><p>Cringia Hub😁🙂🤣🥳😅😍😒😂😂🤦‍♀️🤦‍♂️🤷‍♀️❤️💕😎🤔🙄😏Cringia Hub😁🙂🤣🥳😅😍😒😂😂🤦‍♀️🤦‍♂️🤷‍♀️❤️💕😎🤔🙄😏Cringia Hub😁🙂🤣🥳😅😍😒😂😂🤦‍♀️🤦‍♂️🤷‍♀️❤️💕😎🤔🙄😏Cringia Hub</p></marquee>
        </div>
        <div className='details' style={{display: 'flex' ,justifyContent: 'space-between' ,alignItems: 'center'}}>
            {
              navdata.options.map((option) => (
                <p key={option} style={{margin : '10px'}}>{option}</p>
              ))
            } 
        </div>
    </div>
    </>
  )
}

export default Navbar