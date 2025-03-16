import React from 'react'
const AddProduct = () => {
  return (
    <div className='FirmSection'>
        <form className='tableForm'>
            <h3>Add Products</h3>
            <label>Product Name</label>
            <input type='text' placeholder='Firm Name'/>
            <label>Price</label>
            <input type='text' placeholder='price'/>
            <div className='checkInp'>
          <label>Category</label>
          <div className="checkBokContainer">
            <label>Petrol</label>
            <input type="checkbox" value="Petrol"  />
          </div>
          <div className="checkBokContainer">
            <label>Diesel</label>
            <input type="checkbox" value="Diesel"  />
          </div>
            </div>
            <label>Image</label>
            <input type='file'/>
            <div className='SubmitBut'>
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddProduct
