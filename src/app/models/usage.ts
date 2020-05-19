export class Options {
    static count={
        options:[]
    }
    static often=[
        {img:"assets/regularly.png",name:"Several times a week",increment:20},
        {img:"assets/occasionally.png",name:"Several times a month",increment:10},
        {img:"assets/rarely.png",name:"Rarely",increment:0}
    ];
    static Renovating = {
        name: 'I am Renovating',
        name2:'Which rooms are you Renovating ?',
        img: 'assets/renovating.jpg',
        options: [
            { img: 'assets/kitchen.png', count: 0, name: 'Kitchen',areareq:25, options : Options.often },
            { img: 'assets/bathroom.png', count: 0, name: 'Bathroom' ,areareq:10, options:Options.often },
            { img: 'assets/bedroom.png', count: 0, name: 'Bedroom' ,areareq:20, options:Options.often },
            { img: 'assets/living.png', count: 0, name: 'Living Room' ,areareq:40, options:Options.often }
        ]
    }

    

    static moving = {
        name: 'I am Moving',
        name2:'How big is your house ?',
        img: 'assets/moving.jpg',
        options: [
            { img: 'assets/studio.png', name: 'Studio Flat',areareq:40,options : Options.often},
            { img: 'assets/bedroom1.png', name: '1-2 Bedroom House',areareq:65,options : Options.often },
            { img: 'assets/bedroom2.png', name: '2-3 Bedroom House' ,areareq:100,options : Options.often},
            { img: 'assets/bedroom3.png', name: '4-5 Bedroom House',areareq:130,options : Options.often },
            { img: 'assets/bedroom4.png', name: 'Larger than 5 Bedroom',areareq:180,options : Options.often }
        ]
    }

    static enoughspace = {
        name: "I don't have enough space at home",
        name2:'How much stuff do you need to store ?',
        img: 'assets/enoughspace.jpg',
        options: [
            { img: 'assets/box.png', name: 'Box', count: 0 ,areareq:5, options : Options.often},
            { img: 'assets/minivan.png', name: 'Mini Van', count: 0,areareq:20 , options : Options.often},
            { img: 'assets/mediumvan.jpg', name: 'Medium Van', count: 0,areareq:35 , options : Options.often},
            { img: 'assets/largevan.jpg', name: 'Large Van', count: 0,areareq:50 , options : Options.often}
        ]
    }
    static someStuff = {
        name: "Some of my stuff",
        name2:'What do you need to store?',
        img: 'assets/stuff.jpg',
        options: [
            { img: 'assets/box.png', name: 'Box', count: 0 ,areareq:5},
            { img: 'assets/minivan.png', name: 'Mini Van', count: 0,areareq:20 },
            { img: 'assets/medium-van.png', name: 'Medium Van', count: 0,areareq:35 },
            { img: 'assets/large-van.png', name: 'Large Van', count: 0,areareq:50 }
        ]
    }

    static content = {
        name: "The content of my house",
        name2:'What do you need to store?',
        img: 'assets/personal.jpg',
        options: [
            { img: 'assets/studio.png', name: 'Studio Flat',areareq:40,options : Options.often},
            { img: 'assets/bedroom1.png', name: '1-2 Bedroom House',areareq:65,options : Options.often },
            { img: 'assets/bedroom2.png', name: '2-3 Bedroom House' ,areareq:100,options : Options.often},
            { img: 'assets/bedroom3.png', name: '4-5 Bedroom House',areareq:130 ,options : Options.often},
            { img: 'assets/bedroom4.png', name: 'Larger than 5 Bedroom',areareq:180,options : Options.often }
        ]
    }

    static overseas = {
        name: "I am moving overseas",
        name2:'What do you need to store?',
        img: 'assets/overseas.jpg',
        options: [
            Options.content,
            Options.someStuff,
        ]
    }



    static student={
        name:"I am student",
        name2:"How much stuff do you need to store?",
        img:'assets/student.jpg',
        options:[
            {img:"assets/box.png",name:"Box",areareq:5,count:0},
            {img:"assets/minivan.png",name:"Mini Van",areareq:20,count:0}
        ]
    }
    static archives = {
        img:"assets/archieves.png",
        name:"I need to store my archives",
        name2:"How many boxes are you storing ?",
        options:[
            {img:"assets/box.png",name:"Box",count:0,areareq:5,options : Options.often }
        ]
    }
    static equipments = {
        img: 'assets/equipment.png',
        name: 'I need to store my equipment',
        name2:"How large is your equipment ?",
        options: [
            { img: 'assets/mini-van.png', name: 'Mini Van', count: 0 ,areareq:20,options : Options.often },
            { img: 'assets/medium-van.png', name: 'Medium Van', count: 0,areareq:35,options : Options.often  },
            { img: 'assets/large-van.png', name: 'Large Van', count: 0,areareq:50,options : Options.often  }
        ]
    }
    static movingoffice = {
        img : "assets/moving.jpg",
        name:"We are moving or renovating our office",
        name2:"How many employees do you have?",
        options:[
                {img: "assets/employee.png",count:0,areareq:0,options : Options.often }
            ]
        }
        static options =
        [
            {
                img: "assets/personal.jpg",
                name: 'Personal',
                increment: 0,
                options: [Options.moving, Options.Renovating, Options.enoughspace, Options.overseas, Options.student]
            },
            {

                img: "assets/business.jpg",
                name: 'Business',
                increment: 20,
                options: [Options.archives, Options.equipments, Options.movingoffice]

            }
        ]


}