//constructor function for cafes

function Cafe( name, address, site, work, menu, comm, src){
    this.name = name;
    this.address = address;
    this.site = site;
    this.work = work;
    this.menu = menu;
    this.community = comm;
    this.src = src;
}

//render to search page (image, name, address)
//render rating date to profile page

const starbucks = new Cafe ('Starbucks', '1039 NW Couch St', 'http://www.Starbucks.com', 3, 4, 2, 'img/starbucks.jpeg');

