
import moment from 'moment'

function groupBy(arr, duration) {
    var results = {}, rarr = [], i, date;

    for (i = 0; i < arr.length; i++) {
        // get the date
        date = [moment(arr[i].date).format('YYYY'), moment(arr[i].date).format('DD'), moment(arr[i].date).format('MM')].join("-");

        results[date] = results[date] || 0;
        results[date]++;
    }
    // you can always convert it into an array of objects, if you must
    for (i in results) {
        if (results.hasOwnProperty(i)) {
            rarr.push({ Date: i, Count: results[i] });
        }
    }
    return rarr;
}

export default groupBy
