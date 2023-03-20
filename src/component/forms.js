import React from 'react'
import'../style/newindex.css'




 const Forms = () => {

    return(
        
        <div className='form-container'>
            <label htmlFor=''> Name</label>
            <input type="text" placeholder='name'/>
            

            <label htmlFor=''> Email Id</label>
            <input type="text" placeholder='mail Id'/>
            


            <label htmlFor=''> New Password</label>
            <input type="text" placeholder='Min. 8 charecter'/>
            <button> submit</button>

  
      
</div>

    
    )

}

export default Forms