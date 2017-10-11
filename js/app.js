var initialCats = [{
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        imgAttribution: 'Papa',
        myArray: ["Jaime", "Pepe", "Carlos", "pedro"]
    },
    {
        clickCount: 0,
        name: 'George',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'Daddy',
        myArray: ["kiss", "velvet", "star", "ringo"]              
    }]




var Cat = function(data){
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.myArray = ko.observableArray(data.myArray);
    
    this.title = ko.computed(function(){
        var title;
        var clicks = this.clickCount();
        if (clicks < 10){
            title = 'Newborn';
        }
        else{
            title = 'Infant';
        }
        return title;
    }, this);
}

var viewModel = function(){
    var self = this;
    this.catList = ko.observableArray([]);
    
    initialCats.forEach(function(catItem){
        self.catList.push(new Cat(catItem));
        
    });
    
    this.currentCat = ko.observable(this.catList()[0]);
    
    this.incrementCounter = function(){
        this.clickCount(this.clickCount() + 1);
    };
    
    this.setCat = function(clickedCat){
        self.currentCat(clickedCat);
    }
}

ko.applyBindings(new viewModel());