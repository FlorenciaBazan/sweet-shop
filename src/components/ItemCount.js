import React, {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
      initial = 1;
      const [count, setCount] = useState(initial);
      const handleAddItem = () => count < stock && setCount(count + 1);
      const handleRemoveItem = () => count > 0 && setCount(count - 1);

      return (
        <div className="card-body p-4">
            <div>
              <button onClick={handleRemoveItem} disabled={count <= 0} className="btn" style={{backgroundColor: '#FF922E'}}>-
                </button>
              <span style={{backgroundColor: '#ecf0f1', borderRadius: '25px'}}className="mx-5 p-2">{count}</span>
              <button onClick={handleAddItem} disabled={count >= stock} className="btn" style={{backgroundColor: '#FF922E'}}>+
                </button>
            </div>
            <div>
                <p style={{color: '#000'}} className="h4 my-1"> Stock disponible: {stock - count}</p>
                <button className="btn btn-success" style={{backgroundColor: '#39841E'}} onClick={() => onAdd(count)} disabled={count > stock || count <= 0}>Agregar al carrito</button>
            </div>
          </div>
      );
  };


export default ItemCount