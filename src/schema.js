/* tek tek import etmek yerine yup taki tüm methodları import ettik. */
import * as yup from "yup";



//Koşullar:
/* 
en az 
1-1 büyük harf
2-1 küçük harf
3-1 sayı
4-1 özel karakter
5-min 5 karakter


*/
const regex =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$';



//*Validation schema:
//* form içindeki inputların geçerli olması için koşulları tanımladığımız şemadır.


//*İnput alanı için koşulları tanımlarken kullanmamız gereken ilk yup koşulu verinin
//* tipini tanımlamalıdır. Devamına ise zincirleme fonksiyonlar şeklinde
//*koşulları sıralarız. 
export const schema= yup.object().shape({
    //*email zorunluluklarını belirle
    email: yup.string().email("Lütfen geçerli bir email formatı giriniz!")
    .required("email alanı zorunludur."),

    //*yas için zorunluluklar
    age:yup.number().min(18,"Yaşınız 18'den büyük olmalı!").max(100, "Yaşınız 100'den küçük olamaz!")
    .integer("Lütfen tam sayı giriniz!")
    .required("Yaş alanı zorunludur!"),

    //*password için zorunluluklar
    password:yup
    .string()
    .min(5,"Şifre en az 5 karakterli olmalı!")
    //şifre yukarıda belirlenen regex kurallarına uyuyor mu kontrolü yup kütüphanesindeki .matches(regex) methodunu kullanırız.
    .matches(regex, "Şifreniz yeterince güçlü değil!")
    .required("Şifre alanı zorunludur!"),
    
    //*confirmPassword için zorunluluklar
    confirmPassword: yup
    .string()
    /* oneOf methodu verdiğimiz dizideki metinlerle inputtaki veri eşleşiyor mu kontrolünü yapar. */
    //yup.ref farklı input alanlarındaki veriyi çağırmamızı sağlar.
    .oneOf([yup.ref('password')],'Şifreniz eşleşmiyor!')
    .required("Şifrenizi tekrar girmeniz gerekiyor")

})