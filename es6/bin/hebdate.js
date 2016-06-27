#!/usr/bin/env node

import yargs  from 'yargs';
import moment from 'moment';
import API    from '../lib/date-api';

const argv = yargs
  .usage('$0 [DATE]')
  .option('d', {
    alias: 'debug',
    default: false,
    required: false
  })
  .help('h')
  .argv;

let date = moment();

if (argv._.length > 0) {
  date = moment(argv._[0]);
}

let api = new API({ debug: argv.debug });

api.hebrewDate(date).then((json) => {
  console.log(`${json.hd} ${json.hm}, ${json.hy}`);
});
