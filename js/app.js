//constructor function for cafes

class Cafe {
    constructor (name, address, site, /*menu, comm,*/ src){
        this.name = name;
        this.address = address;
        this.site = site;
        // this.work = work;
        // this.menu = menu;
        // this.community = comm;
        this.src = src;
    }
    rateWork(space, outlets, atmosphere){
        this.space = space;
        this.outlets = outlets;
        this.atmosphere = atmosphere;
        this.work = (space + outlets + atmosphere) / 3;
    }

}

//render to search page (image, name, address)
//render rating data to profile page

const starbucks = new Cafe ('Starbucks', '1039 NW Couch St', 'http://www.Starbucks.com', /*3, 4, 2,*/ 'img/starbucks.jpeg');
starbucks.rateWork (2, 3, 5);

