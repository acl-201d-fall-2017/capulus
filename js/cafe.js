//adds constructor for cafes which render to search and profile page
class Cafe { //eslint-disable-line
    constructor (name, address, site, src) {
        this.name = name;
        this.address = address;
        this.site = site;
        this.src = src;
    }
    rateWork(space, outlets, atmosphere) {
        this.space = space;
        this.outlets = outlets;
        this.atmosphere = atmosphere;
        this.work = Math.ceil((space + outlets + atmosphere) / 3);
    }
    rateMenu(quality, variety, price) {
        this.quality = quality;
        this.variety = variety;
        this.price = price;
        this.menu = Math.ceil((quality + variety + price) / 3);
    }
    rateComm(kids, local, neighborhood) {
        this.kids = kids;
        this.local = local;
        this.neighborhood = neighborhood;
        this.comm = Math.ceil((kids + local + neighborhood) / 3);
    }
    rateOverall() {
        this.overall = ((this.work + this.menu + this.comm ) / 3).toFixed(1);
    }
}

//adds a constructor for suggested cafes which render to suggestion page
class NewCafe { //eslint-disable-line
    constructor(suggestName, suggestAddress, suggestSite) {
        this.suggestName = suggestName;
        this.suggestAddress = suggestAddress;
        this.suggestSite = suggestSite;
    }
}
