import { useFormik } from "formik"
import { schema } from "./schema";
import InputFieldView from "./views/InputFieldView";
import { inputs } from "./constant";

const LoginPage = () => {

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
    console.log(values);
}
   
}); 

  
}

export default LoginPage