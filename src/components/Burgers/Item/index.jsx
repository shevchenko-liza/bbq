
import classes from '../styles.module.scss'


export const Button=({button,form})=>(
    (
        <div>
        <button className={classes.button}>{button}Заказать</button>
        <form className={classes.form}>{form}
        <button type="reset" value="-">-</button>
        <input type="text" size="1"></input>
        <button type="submit" value="+">+</button>
  
        </form>
        
        </div>
    )
)

export const Item = ({name,compound,weight,photo,button}) => (
  <div className={classes.item}>
    <span className={classes.name}>{name}</span>
      <img className={classes.photo} src={photo} alt="" />
    
    <span className={classes.compound}>{compound}</span>
    <span className={classes.weight}>{weight}</span>

    <Button/>
    
  </div>
)

