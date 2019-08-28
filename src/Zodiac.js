import data from './data.json';

export default class Zodiac {

    constructor(){
        this.signs = data;
    }

    getSign(birthday){
        if(!this.isDate(birthday)) return false;

        const date = birthday.split("-");
        const birthdayMonth = Number(date[1]);
        const birthdayDay = Number(date[2]);

       const sign = this.signs.find( (item, index, arr) => {
            
            const dateStart = item.date_start.split("-");
            const dateStartMonth = Number(dateStart[1]);
            const dateStartDay = Number(dateStart[0]);

            const dateEnd = item.date_end.split("-");
            const dateEndMonth = Number(dateEnd[1]);
            const dateEndDay = Number(dateEnd[0]);

            if(birthdayMonth === 1){
                
            }else{
                
                if(dateStartMonth ===  birthdayMonth){

                    if(birthdayDay >= dateStartDay){
                        return item;
                    }else{
                        let i = index - 1;
                        return arr[i];
                    }

                }else if(dateEndMonth === birthdayMonth){

                    if(birthdayDay <= dateEndDay){
                        return item;
                    }else{
                        let i = index + 1;
                        return arr[i];
                    }

                }

            }
            
        });

        return sign;
    }

    isDate(date){
        return (new Date(date) !== "Invalid Date" && !isNaN(new Date(date)) ) ? true : false;
    }
}
