import './ButtonComponent.css'

function ButtonComponent (props) {
    console.log(props)
    return (
      <div>
        <button className="btn">{props.label}</button>
        <small>Soy un botón</small>
      </div>
    )
  }

  export default ButtonComponent