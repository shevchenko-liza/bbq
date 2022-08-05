import { useCallback, useState } from 'react'
import clsx from 'clsx'

import classes from '../styles.module.scss'

export const Order = () => {
  const [amount, setAmount] = useState(1)
  const handleChange = useCallback(event => {
    setAmount(event.target.value)
  }, [])

  const handleSubmit = useCallback(event => {
    event.preventDefault()

    console.log({ id: NaN, amount })
  }, [amount])

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.inputBox}>
        <button type="button" className={clsx(classes.button, classes.decrease)} value="-">-</button>
        <input type="text" size="3" className={classes.input} value={amount} onChange={handleChange} />
        <button type="button" className={clsx(classes.button, classes.increase)} value="+">+</button>
      </div>
      <button type="submit" className={clsx(classes.button, classes.order)}>Заказать</button>
    </form>
  )
}

export const Item = ({ name, compound, weight, photo }) => (
  <div className={classes.item}>
    <div className={classes.photoBox}>
      <img className={classes.photo} src={photo} alt="" />
    </div>
    <div className={classes.infoBox}>
      <h3 className={classes.name}>{name}</h3>
      <p className={classes.compound}>Состав: {compound.join(', ')}</p>
      <span className={classes.weight}>{weight}</span>
      <Order />
    </div>
  </div>
)

