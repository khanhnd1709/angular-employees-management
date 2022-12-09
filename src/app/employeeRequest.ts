export class EmployeeRequest {
    constructor(
        public fullName?: string,
        public dob?: string,
        public phone?: string,
        public homeTown?: string,
        public university?: string,
    ){}
}