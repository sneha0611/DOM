const h1 = document.getElementById('h1');
const h2 = document.getElementById('h2');
const h3 = document.getElementById('h3');
const m1 = document.getElementById('m1');
const m2 = document.getElementById('m2');
const m3 = document.getElementById('m3');
const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const d3 = document.getElementById('d3');
const list = document.getElementById('list');
const total = document.getElementById('total');
const calculate = document.getElementById('calculate');

let bill=[];

h1.addEventListener('click',(e)=>{
let data ={
    name:"Minni pan Pizza",
    price:59
};

bill.push(data);
add();
})

h2.addEventListener('click',(e)=>{
    let data ={
        name:"fresh pan Pizza",
        price:108
    };
    bill.push(data);
    add();
    })

    h3.addEventListener('click',(e)=>{
        let data ={
            name:"Veg Loaded Pizza ",
            price:120
        };

        bill.push(data);
        add();
        })

 m1.addEventListener('click',(e)=>{
            let data ={
                name:"spicy tangy ",
                price:149
            };
            console.log('click')
            bill.push(data);
            add();
            })

m2.addEventListener('click',(e)=>{
                let data ={
                    name:"cheese burst",
                    price:159
                };
                
                bill.push(data);
                add();
                })


    m3.addEventListener('click',(e)=>{
                    let data ={
                        name:"super exotica ",
                        price:169
                    };
                    
                    bill.push(data);
                    add();
                    })


            d1.addEventListener('click',(e)=>{
                        let data ={
                            name:"farmhouse ",
                            price:219
                        };
                        
                        bill.push(data);
                        add();
                        })

             d2.addEventListener('click',(e)=>{
                            let data ={
                                name:"jalpeno",
                                price:239
                            };
                            
                            bill.push(data);
                            add();
                            })


            d3.addEventListener('click',(e)=>{
                                let data ={
                                    name:"crispycorn",
                                    price:229
                                };
                                
                                bill.push(data);
                                add();
                                })
                               

                                function add(){
                                    list.innerHTML=null;
                                    for(let i=0;i<bill.length;i++){

                                        const li =document.createElement('li')
                                        li.style.display="flex";
                                        li.style.justifyContent="space-between";
                                        li.style.alignItems="center";


                                        const no = document.createElement('p');
                                        no.innerText= i+ 1 + " . ";

                                        const n = document.createElement('p');
                                        n.innerText =bill[i].name;


                                        const p = document.createElement('p');
                                        p.innerText =bill[i].price + " /-";

                                        const button = document.createElement('button');
                                        button.innerText = "X";
                                        button.style.cursor="pointer";

                                        button.addEventListener('click',function(e){
                                            console.log(bill[i],bill,i);
                                            bill.splice(i,1);
                                            console.log(bill[i],bill,i);
                                            total.innerText=" /-";
                                            add();
                                        })
                                
                                        li.appendChild(no);
                                        li.appendChild(n);
                                        li.appendChild(p);
                                        li.appendChild(button);
                                        list.appendChild(li);
                            


                                        let sum = 0;
                                        for(let j=0; j<bill.length; j++){
                                            sum += bill[j].price;

                                        }
                                        total.innerText = sum + " /-";
                                    }
                                }

                                calculate.addEventListener('click',(e)=>{
                                    list.innerHTML = null;
                                    bill =[];
                                    total.innerText = " /- ";
                                })
                                    
