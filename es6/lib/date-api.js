import _           from 'lodash';
import http        from 'q-io/http';
import moment      from 'moment';
import queryString from 'query-string';

class DateAPI {

  constructor() {
    this.baseURL = 'http://www.hebcal.com/converter/';
  }

  hebrewDate(gregorianDate) {
    gregorianDate = moment(gregorianDate);

    let query = {
      gy: gregorianDate.year(),
      gm: gregorianDate.month(),
      gd: gregorianDate.date(),
      g2h: 1,
      gs: 'on',
      cfg: 'json'
    };

    let url = `${this.baseURL}?${queryString.stringify(query)}`;

    console.log(url);

    return http.request({
      url: url,
      method: 'GET'
    });
  }

}

export default DateAPI;
