import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import formSchema from './formSchema'

const pizzaOrders= [{
    name: 'Zach',
    size: 'small',
    sauce: 'original',
    special: '',
    toppings: {
      cheese: false,
      pepperoni: true,
      sausage: false,
      ham: false,
      chicken: false,
      green_peppers: false,
      mushroom: false,
      diced_tomato: false,
      black_olives: false
    }
  }, 
  ];

  const initFormVal = {
    name: '',
    size: '',
    sauce: '',
    special: '',
    toppings: {
      cheese: false,
      pepperoni: false,
      sausage: false,
      ham: false,
      chicken: false,
      green_peppers: false,
      mushroom: false,
      diced_tomato: false,
      black_olives: false
    },
  };

  const initErr = {
    name: '',
    size: ''
  };

export default function Home(props){

    const [pizzaData, setPizzaData] = useState(pizzaOrders);
    const [formValues, setFormValues] = useState(initFormVal);
    const [formErrors, setFormErrors] = useState(initErr);

    const inputChange = (name, value) => {
        yup
          .reach(formSchema, name)
          .validate(value)
          .then(valid => {
            setFormErrors(initErr)
          })
          .catch(err => {
            setFormErrors({
              ...formErrors,
              [name]: err.errors[0]
            })
          })
    
        setFormValues({
          ...formValues,
          [name]: value
        })
      };

      const checkboxChange = (name, isChecked) => {
        setFormValues({
          ...formValues,
          toppings: {
            ...formValues.toppings,
            [name]: isChecked, 
          }
        })
      }

      const submit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      special: formValues.special,
      num: formValues.num,
      toppings: Object.keys(formValues.toppings).filter(tops => formValues.toppings[tops]),
      };
    setPizzaData(newPizza);
  }

    return (
        <div>
            <header>
                <h1>Best Pizza in Town</h1>
                <Link to='/pizza'>Order</Link>
            </header>
            <section>
                
            
            </section>
        </div>
    )
}