import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "First name must be at least 2 characters")
      .required("First name is Required"),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large', 'sheet'], 'Size selection required'),
    sauce: yup
        .string()
        .required()
        .oneOf(['original', 'garlic', 'med-bbq', 'hot-bbq']),
    toppings: yup
        .boolean()
        .oneOf(['true', 'false']),
    special: yup
        .string()
})

export default formSchema