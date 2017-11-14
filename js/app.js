//constructor function for cafes

class Cafe {
    constructor (name, address, site, /*menu, comm,*/ src) {
        this.name = name;
        this.address = address;
        this.site = site;
        // this.work = work;
        // this.menu = menu;
        // this.community = comm;
        this.src = src;
    }
    rateWork(space, outlets, atmosphere) {
        this.space = space;
        this.outlets = outlets;
        this.atmosphere = atmosphere;
        this.work = Math.abs((space + outlets + atmosphere) / 3);
    }
    rateMenu(quality, variety, price) {
        this.quality = quality;
        this.variety = variety;
        this.price = price;
        this.menu = Math.abs((quality + variety + price) / 3);
    }
    rateComm(kids, corp, neighborhood) {
        this.kids = kids;
        this.corp = corp;
        this.neighborhood = neighborhood;
        this.comm = Math.abs((kids + corp + neighborhood) / 3);
    }
}

//render to search page (image, name, address)
//render rating data to profile page

const starbucks = new Cafe ('Starbucks', '1039 NW Couch St', 'http://www.Starbucks.com', 'img/starbucks.jpeg');
starbucks.rateWork (4, 2, 3);

