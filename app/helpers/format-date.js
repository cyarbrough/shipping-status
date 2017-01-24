import Ember from 'ember';
import dateHelper from 'app-utilities/utils/date-helpers';

export function formatDate(params, hash) {
  var date = params[0] || hash.date,
      format = params[1] || hash.format;
  return dateHelper.formatDate(date, format);
}

export default Ember.Helper.helper(formatDate);
