import React from 'react'
import { Item } from './Item'

import classes from './styles.module.scss'
import icon1 from './icon/burger1.png'
import icon2 from './icon/burger2.png'
import icon3 from './icon/burger3.png'



const burgers=[
    {
        "id" : 1,
        "name" : "Сет «Z-Бургер»",
        "compound" : [
            "бургер",
            "картофель",
            "сметанный соус"
        ],

        "photo": icon1,
        "weight" : " 400 грамм",
       
    },

    {
        "id" : 2,
        "name" : "Бургер с мясом и сыром «Чеддер»",
        "compound" : [
            "бургер",
            "картофель",
            "сметанный соус"
        ],

        "photo": icon2,
        "weight" : " от 310 грамм",
       
    
    },

    {
        "id" : 3,
        "name" : "«Дабл-бургер»",
        "compound" : [
            "двойной сыр",
            "две котлеты"

        ],

        "photo": icon3 ,
        "weight" : " 200 грамм",
       
       
    }

]
 

export const Burgers = () => (
    <div className={classes.burgers}>
      {burgers.map((item, index) => (
        <Item
          key={item.id}
          name={item.name}
          compound={item.compound}
          photo={item.photo}
          weight={item.weight}
          />
        

      ))}
      
    </div>
    
  )