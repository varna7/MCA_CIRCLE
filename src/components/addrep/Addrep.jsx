import './addrep.css'

function Addrep() {
  return (
    <div className='addrep'>
        <form action="" className="addrepForm">
            <div className="formItem">
                <label htmlFor="Repname"> Name:</label>
                <input type="text" id='Repname' placeholder='name of representative'/>
            </div>
            <div className="formItem">
                <label htmlFor="email">Email:</label>
                <input type="email"  id="email" />
            </div>
            <div className="formItem">
                <label htmlFor="phone">Phone no.:</label>
                <input type="number"  id="phone" />
            </div>
            <div className="formItem">
                <label htmlFor="clgid">College id:</label>
                <input type="text" id='clgid'/>
            </div>  
        </form>
    </div>
  )
}

export default Addrep