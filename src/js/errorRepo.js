export default class ErrorRepository {
    static codes = new Map([
        [404, 'Not Found'],
        [403, 'Forbidden'],
    ]);

    static translate(code) {
        if (this.codes.has(code)) {
            return this.codes.get(code);
        }
        return 'Unknown error';
    }
}