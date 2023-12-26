import React from 'react'
import LoginPageView from '../views/LoginPageView';
import { useFormik } from 'formik';
import { schema } from '../schema';
import { useNavigate } from 'react-router-dom';

const LoginPageController = () => {
const navigate = useNavigate()  
   /* useFormik: formikin tüm özelliklerini kullanmamızı sağlayan hook tur. */
const formik = useFormik({
    initialValues:{
        email:"",
        age:"",
        password:"",
        confirmPassword:""
    },

//*validation schema formik input verilerinin şemaya uyguluğunu bekler.
//!uygun değilse error state inde hataları tutar.

validationSchema: schema,


    /* form gönderilince çalışan bir fonksiyon: 2 parametre alır
1-formdaki inputların verisi
2- */
onSubmit : (values, actions) => {
    navigate('/home')
}
   
}); 

  
    return (
    <LoginPageView formik={formik}/>
  )
}

export default LoginPageController