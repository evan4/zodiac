import data from './data.json';

export default class Zodiac {

  constructor() {

    this.signs = data;

  }

  getSign( birthday ) {

    if ( !this.isDate( birthday ) ) return false;

    const date = birthday.split( '-' );
    const birthdayMonth = Number( date[1] );
    const birthdayDay = Number( date[2] );
    let sign;

    this.signs.forEach( (
      item, index, arr,
    ) => {

      const dateStart = item.date_start.split( '-' );
      const dateStartMonth = Number( dateStart[1] );
      const dateStartDay = Number( dateStart[0] );

      const dateEnd = item.date_end.split( '-' );
      const dateEndMonth = Number( dateEnd[1] );
      const dateEndDay = Number( dateEnd[0] );

      if ( birthdayMonth === 12 ) {

        if ( birthdayDay <= dateStartDay ) {

          sign = arr[11];

        } else {

          sign = item;

        }

      } else if ( dateStartMonth === birthdayMonth ) {

        if ( birthdayDay >= dateStartDay ) {

          sign = item;

        } else {

          const i = index - 1;
          sign = arr[i];

        }

      } else if ( dateEndMonth === birthdayMonth ) {

        if ( birthdayDay <= dateEndDay ) {

          sign = item;

        } else {

          const i = index + 1;
          sign = arr[i];

        }

      }

    } );

    return sign;

  }

  isDate( date ) {

    return !!( ( new Date( date ) !== 'Invalid Date' && !isNaN( new Date( date ) ) ) );

  }

}
