import axios from "axios"

export default class MainPageModel {
    static async getCoins(page) {

        /* offset: atlanacak eleman sayısı 
        limit: sayfada gözükecek eleman sayısı
        doğru sayfadaki elemanlara erişebilmek için 
        sayfa sayısı - 1 * 15 dememiz gerekiyor*/
        const params = {
            offset: (page-1)*15,
            limit: 15,
            
        }
        try{
            const res= await axios.get('https://api.coincap.io/v2/assets', {params});
            return res.data.data;
        }catch(err){
            console.log(err)
        }
    }
}