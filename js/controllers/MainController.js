app.controller('MainController',['$scope','myService',function($scope,myService){
    $scope.msg="hello world";
    $scope.morebox=[{
        src_img:'http://blogs-images.forbes.com/samanthasharf/files/2015/06/x4-e1434558185321-1940x1089.jpg',
        link:'#',
        title:"Business",
        brief_msg:"US Fed raise interest rates by 0.25%"
    },
    {
        src_img:'http://rtrfm.com.au/wp-content/uploads/2015/10/470_US_politics_2.jpg',
        link:'#',
        title:"UK Politics",
        brief_msg:"EU leaders to discuss PM's reforms"
    },  
   
    {
        src_img:'http://www.earthofpets.com/wp-content/uploads/2015/09/health8.jpg',
        link:'#',
        title:"Health",
        brief_msg:"Cancer 'not just down to bad luck'"
    },
     {
        src_img:'http://kenstonlocal.org/kenston/wp-content/uploads/2014/07/technology1.jpg',
        link:'#',
        title:"Technology",
        brief_msg:"self-driving cars' must have driver'"
    },
     {
        src_img:'http://www.avatargeneration.com/wp-content/uploads/2013/10/EnvironmentalScience.jpg',
        link:'#',
        title:"Science & Environment",
        brief_msg:"Nepal quake landslide impact reassessed"
    },
     {
        src_img:'http://kazoneart.com/test/wp-content/uploads/2015/04/entertainment-art-2.jpg',
        link:'#',
        title:"Entertainment & Arts",
        brief_msg:"Film critics hail Star Wars 'triumph'"
    },
     {
        src_img:'https://d3ui957tjb5bqd.cloudfront.net/images/screenshots/products/10/106/106044/magazine-mok-up-cover-a5-creativ-o.jpg?1399083713',
        link:'#',
        title:"Magazine",
        brief_msg:"Striking images"
    },
     {
        src_img:'http://www.funnymalaysia.net/wp-content/uploads/2014/10/NBI-Clearance-for-Fresh-Graduate1.jpg',
        link:'#',
        title:"Education & family",
        brief_msg:"Record unviersity places for women"
    },
    ];
    $scope.today=new Date().getTime();
    $scope.news={
        title:"Martin Shkreli quits Turing after arrest",
        datetime: 1450490861000,
        content:"Martin Shkreli resigns as chief executive of Turing Pharmaceuticals following his arres on Thursday on           securities fraud charges",
        src: "http://ichef.bbci.co.uk/news/660/cpsprodpb/C4E9/production/_87290405_gettyimages-501735962.jpg"
    };
    $scope.diff=$scope.today-$scope.news.datetime;
    $scope.diffHrs = Math.floor(($scope.diff % 86400000) / 3600000);
   /* myService.success(function(data){
        $scope.news=data;
    });*/
    $scope.leftNews2=[
        {
            src:'http://ichef-1.bbci.co.uk/news/1024/cpsprodpb/90AF/production/_87293073_gettyimages-462813248.jpg',
            title:'US lifts 40-year ban on oil exports',
            content:'US politicians have approved a measure to lift the ban on exports of crude oil that has stood for four decades',
        },{
            src:'http://ichef.bbci.co.uk/news/660/cpsprodpb/D258/production/_87284835_capture.jpg',
            title:'Revenue rise boosts Blackberry revival',
            content:'Blackberry reports revenues of $548m for the three months to November - 12% higher than the previous quarter'
        }
    ];
    $scope.watchandListenData=[
    {
        src:'http://ichef-1.bbci.co.uk/news/200/media/images/66951000/jpg/_66951438_biz_heads_640x360_with_logo.jpg',
        title:'BBC World News business headlines',
        during:'1:06',
        type:'Business'
    },
    {                
        src:'http://ichef.bbci.co.uk/news/200/cpsprodpb/7CAE/production/_87281913_kiwia1920.jpg',
        title:"Tanzania's 'innovative' bike mechanic",
        during:'3:33',
        type:'Business'
        
    },
    {
        src:'http://ichef.bbci.co.uk/news/130/cpsprodpb/3AA0/production/_87280051_sa_collage1920.jpg',
        title:'South Africa finance minister fiasco',
        during:'2:02',
        type:'Business'
    },
    {
         src:'http://ichef.bbci.co.uk/news/130/cpsprodpb/FEF3/production/_87276256_food_1920.jpg',
         title:'Selling Africa finance minister fiasco',
         during:'2:02',
         type:'Business'
    },
    {
        src:'http://ichef-1.bbci.co.uk/news/130/cpsprodpb/9908/production/_87267193_de17-1.jpg',
        title:"It's different, alien environment",
        during:'1:00',
        type:'Business'
    },
    {
        src:'http://ichef-1.bbci.co.uk/news/130/cpsprodpb/4B37/production/_87255291_factory1920.jpg',
        title:'Inside a rollercoaster factory',
        during:'1:30',
        type:'Technology'
    }
    ]; 
    $scope.leftNews3=[
        {
            title1:'GSK buys HIV medicines for 1.4bn',
            title2:'Apple Pay to launch in China' 
        },
        {
            title1:'Shell to face Nigeria oil spill lawsuit', 
            title2:'Pharma boss Shkreli on fraud charge'
        },
        {
            title1:'Avon strikes deal for new investment',
            title2:'New Zealand milk firm shares soar'
        }
    ];
    $scope.leftNews5={
        title:"EU vote 'in 2016' and free speech fears",
        src:'http://ichef.bbci.co.uk/news/235/cpsprodpb/14B0D/production/_87294748_indexpic.jpg',
        content:"A variety of stories make Saturday's front pages, but several papers suggest the UK's referendum on EU membership will be held in summer 2016"
    };
    $scope.leftNews6=[
        {
            src:'http://ichef-1.bbci.co.uk/news/235/cpsprodpb/7311/production/_87275492_tree-and-menorah.jpg',
            title:'Yule schmule',
            content:'How to have yourself a very Jewish Christmas'
        },
        {
            src:'http://ichef.bbci.co.uk/news/235/media/images/81448000/jpg/_81448712_weekend131708640.jpg',
            title:'Weekend Edition',
            content:'Feature to enjoy, including your comments'
        },
        {
            src:'http://ichef.bbci.co.uk/news/235/cpsprodpb/F673/production/_87219036_7667c4b0-abca-4033-bdd5-051873f19607.jpg',
            title:'Lunchbox London',
            content:"Does the capital's skyline resemble a giants' feast?"
        },
        {
            src:'http://ichef-1.bbci.co.uk/news/304/media/images/70946000/jpg/_70946323_70946322.jpg',
            title:'Lasting legacy',
            content:'Jimmy Hill - player, manager and game changer'
        },
        {
            src:'http://ichef.bbci.co.uk/news/304/cpsprodpb/16A39/production/_87292729_meganwhitneydresses.jpg',
            title:'Ten years after',
            content:"How civil parnerships have changed two couples' lives"
        },
        {
            src:'http://ichef.bbci.co.uk/news/304/cpsprodpb/172C7/production/_87291949_hi030579128.jpg',
            title:'In the spotlight',
            content:'The search for answers over Jermaine Baker shooting'
        }
    ];
    $scope.leftNews7=[
        {
            src:'http://ichef-1.bbci.co.uk/news/165/cpsprodpb/106ED/production/_85190376_976nick-e-e0g030.jpg',
            title:'England',
            content:'$2 betting machine limit proposed'
        },
        {
            src:'http://ichef-1.bbci.co.uk/news/165/cpsprodpb/105D/production/_87298140_crash2.jpg',
            title:'Northern Ireland',
            content:'Pedestrian killed in road accident'
        },
        {
            src:'http://ichef-1.bbci.co.uk/news/165/cpsprodpb/18505/production/_87298599_img_0680.jpg',
            title:'Scotland',
            content:"Woman's death treated as 'unexplaind'",
            
        },
        {
            src:'http://ichef.bbci.co.uk/news/165/cpsprodpb/1715D/production/_87075549_87075545.jpg',
            title:'Wales',
            content:'Lord Janner dies after long illness'
        }
        
    ];
    $scope.rightNews3=[
        {
            day:'SAT',
            content:"January sales start early to coax customers on 'panic Saturday'"
        },
        {
            day:'FRI',
            content:"'Mad Friday' Christmas revellers given alcohol warning"
        },
        {
            day:'THU',
            content:"Greg Rutherford and family received Twitter abuse over Fury stance"
        },
        {
            day:'WED',
            content:"Revealed: Britain's busiest and quietest stations"
        },
        {
            day:'TUE',
            content:"Revealed:Britain's busiest and quietest stations"
        }
    ];
    
    
}]);