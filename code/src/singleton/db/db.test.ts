import { DB } from "./db";

describe('db', () => {
    it('be able to instantiate only one instance', () => {
        const db = DB.getInstance();

        db.id = 1;
        const db2 = DB.getInstance();

        expect(db2.id).toBe(1);


    });

    it('should be able to connect nly 5 times', () => {
        const db = DB.getInstance();
        for (let i = 0; i < 5; i++) {
            expect(db.connect()).toEqual(true);
        }
        expect(db.connect()).toEqual(false);
    });
});
