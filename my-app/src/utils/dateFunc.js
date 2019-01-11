import moment from '../../node_modules/moment/moment';

export default {
    getMonthViewStartDate(date, firstDay) {
        firstDay = parseInt(firstDay);
        let start = moment(date);
        let startOfMonth = moment(start.startOf('month'));

        start.subtract(startOfMonth.day(), 'days');

        if (startOfMonth.day() < firstDay) {
            start.subtract(7, 'days');
        }

        start.add(firstDay, 'days');

        return start;
    },
    getMonthViewEndDate(date) {
        return this.getMonthViewStartDate().add(6, 'weeks');
    }
};

