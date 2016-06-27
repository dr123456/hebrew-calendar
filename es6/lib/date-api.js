import http        from 'q-io/http';
import moment      from 'moment';
import queryString from 'query-string';

const readBody = (resp) => resp.body.read();

class DateAPI {

  constructor(options = {}) {
    this.baseURL = 'http://www.hebcal.com/converter/';
    this.debug   = !!options.debug;
  }

  log() {
    if (!this.debug) return;
    console.log.apply(console, arguments);
  }

  hebrewDate(gregorianDate) {
    gregorianDate = moment(gregorianDate);

    let query = {
      gy: gregorianDate.year(),
      gm: gregorianDate.month() + 1,
      gd: gregorianDate.date(),
      g2h: 1,
      gs: 'on',
      cfg: 'json'
    };

    this.log('Date Query Object: ', query);

    let url = `${this.baseURL}?${queryString.stringify(query)}`;

    this.log('Pinging URL: ', url);

    return http.request({
      url: url,
      method: 'GET'
    }).then(readBody).then(JSON.parse);
  }

}

export default DateAPI;
