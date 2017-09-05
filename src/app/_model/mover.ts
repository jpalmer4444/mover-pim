
export class Mover {

    firstName: string;
    lastName: string;
    username: string;
    password: string;
    memberSince: Date;
    years: number;
    months: number;
    roles: Array<string>;

    constructor() {}

    getFullname(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getExperience(): string {
        return `${this.years} Years ${this.months} Months`;
    }

    isDriver(): Boolean {
        return this.isUserInRole('ROLE_DRIVER');
    }

    isMover(): Boolean {
        return this.isUserInRole('ROLE_MOVER');
    }

    isAdmin(): Boolean {
        return this.isUserInRole('ROLE_ADMIN');
    }

    isUserInRole(role: string): Boolean {
        return this.roles.indexOf(role) != -1;
    }
    
    /**
     * @param firstName string
     * @param lastName string
     * @param username string
     * @param password string
     * @param memberSince Date
     * @param years number
     * @param months number
     * @param roles Array<string>
     */
    static getInstance( firstName: string, lastName: string, username: string, 
                        password: string, memberSince: Date, years: number, 
                        months: number, roles: Array<string> ) {
        let mover = new Mover();
        mover.firstName = firstName;
        mover.lastName = lastName;
        mover.username = username;
        mover.password = password;
        mover.memberSince = memberSince;
        mover.years = years;
        mover.months = months;
        mover.roles = roles;
        return mover;
    }

}
