import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import * as yup from 'yup';
import formSchema from './formSchema'

const pizzaOrders= [
{
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

  

export default function PizzaForm(props){
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

    const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
      }

    const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name, checked)
    }

    const onSubmit = event => {
        event.preventDefault();
        submit();
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
        setPizzaData([...pizzaData, newPizza]);
      }

    console.log(pizzaData);

    return (
        <div>
            <header>
                <h2>Customize your Pizza!</h2>
                <Link to='/'>Home</Link>
            </header>

            <form onSubmit={onSubmit}>
            <div>
                <label htmlFor='orderName'>Name on Order:</label>
                <input
                    id='orderName'
                    minLength='2'
                    type='text'
                    name='name'
                    onChange={onInputChange}
                    value={formValues['name']}
                />
                <p>{formErrors.name}</p>
            </div>

            <div>
                <label>Size:</label>
                <select name='size' onChange={onInputChange}>
                    <option>- Select Your Size -</option>
                    <option name='size' value='small' checked={formValues['size'] == 'small'}>Small</option>
                    <option name='size' value='medium'checked={formValues['size' == 'medium']}>Medium</option>
                    <option name='size' value='large' checked={formValues['size' == 'large']}>Large</option>
                    <option name='size' value='sheet' checked={formValues['size' == 'sheet']}>Sheet Pizza</option>
                </select>
            </div>

            <div>
                <label>Sauce Options:</label>
                
                <input
                    type='radio'
                    name='sauce'
                    value='original'
                    checked={formValues['sauce'] == 'original'}
                    onChange={onInputChange}
                />
                <label>Pudgies Secret Tomato&trade;</label>

                <input
                    checked={formValues['sauce'] === 'garlic'}
                    type='radio'
                    name='sauce'
                    value='garlic'
                    onChange={onInputChange}
                />
                <label>White Garlic</label>

                <input
                    checked={formValues['sauce'] === 'med-bbq'}
                    type='radio'
                    name='sauce'
                    value='med-bbq'
                    onChange={onInputChange}
                />
                <label>Medium BBQ</label>

                <input
                    checked={formValues['sauce'] === 'hot-bbq'}
                    type='radio'
                    name='sauce'
                    value='hot-bbq'
                    onChange={onInputChange}
                />
                <label>Hot BBQ</label>
            </div>

            <div>
                <label htmlFor='toppings'>Toppings:</label>
                <input
                    className='cheese'
                    type='checkbox'
                    name='cheese'
                    checked={formValues['toppings']['cheese'] == true}
                    onChange={onCheckboxChange}
                />
                <label>Cheese</label>

                <input
                    checked={formValues['toppings']['pepperoni'] == true}
                    type='checkbox'
                    name='pepperoni'
                    onChange={onCheckboxChange}
                />
                <label>Pepperoni</label>

                <input
                    checked={formValues['toppings']['sausage'] == true}
                    type='checkbox'
                    name='sausage'
                    onChange={onCheckboxChange}
                />
                <label>Sausage</label>

                <input
                    type='checkbox'
                    name='ham'
                    checked={formValues['toppings']['ham'] == true}
                    onChange={onCheckboxChange}
                />
                <label>Ham</label>

                <input
                    checked={formValues['toppings']['chicken'] == true}
                    type='checkbox'
                    name='chicken'
                    onChange={onCheckboxChange}
                />
                <label>Chicken</label>

                <input
                    checked={formValues['toppings']['green_peppers'] == true}
                    type='checkbox'
                    name='green_peppers'
                    onChange={onCheckboxChange}
                />
                <label>Green Peppers</label>

                <input
                    checked={formValues['toppings']['mushroom'] == true}
                    type='checkbox'
                    name='mushroom'
                    onChange={onCheckboxChange}
                />
                <label>Mushrooms</label>

                <input
                checked={formValues['toppings']['diced_tomato'] == true}
                    type='checkbox'
                    name='diced_tomato'
                    onChange={onCheckboxChange}
                />
                <label>Diced Tomato</label>

                <input
                    checked={formValues['toppings']['black_olives'] == true}
                    type='checkbox'
                    name='black_olives'
                    onChange={onCheckboxChange}
                />
                <label>Black Olives</label>
            </div>

            <div>
                <label>Special Instructions:</label>
                <input type='text' name="special" value={formValues.special} onChange={onInputChange} />
            </div>

            <div>
                <button disabled={!formValues.name || !formValues.sauce || !formValues.size} className='submitBtn'>Submit</button>
            </div>
            </form>

            <section>
                <h2>Upcoming Orders</h2>
                {
                    pizzaData.map(ord => {
                        return (
                            <div key={ord.name}>
                                <p>{ord.name}</p>
                                <p>{ord.size}</p>
                                <p>{ord.sauce}</p>
                            </div>
                        )
                    })
                }
            </section>

        </div>
    )
}