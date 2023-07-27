import './ButtonComponent.css'

function ButtonComponent (props) {
  
  const { children } = props


  return (
      <div>
        <button className="btn">
          {children}Comprar
        </button>
      </div>
    )
  }

  export default ButtonComponent