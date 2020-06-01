


const fetchPokedex= () =>{

	const	promises=[];
	for (let i=1; i <=150; i++) {
	
		const url=`https://pokeapi.co/api/v2/pokemon/${i}`;
		promises.push(fetch (url)
			.then((res)=>res.json()));

	}	
		Promise.all(promises).then((results) =>{

			const pokemon =results.map((data)=>({
				id:data.id,
				name: data.name,
				images:data.sprites['front_default']

			}));
			displayPokemon(pokemon);
		});
		
		
};

const displayPokemon=(pokemon)=>{
	console.log(pokemon);
	const pokemonHtml= pokemon.map(
		(pokeman )=>
		`<li class="card">
		<img class="card-image" src="${pokeman.images}">
		<h2 class="card-title">${pokeman.name}</h2>
		</li>	
		
		`).join('');

		

	document.getElementById("pokedex").innerHTML=pokemonHtml;

};
fetchPokedex();
/*${pokeman.id}. &nbsp*/

const	searchFun=()=>{
	let	filter= document.getElementById('filter_pokemon').value.toLowerCase();
	//let ul=document.getElementById('pokedex');
	//let li= ul.getElementsByTagName('pokemonHtml');
	for (var i=0; i<=pokemon.length;i++)
	{
		//let a = li[i].getElementsByTagName('card-title')[1];
		//let value=a.innerHTML;


		if (pokemon.length[i].toLowerCase().indexOf(filter)>-1){
			li[i].style.display='pokemonHtml';
		}
		else{
			li[i].style.display='none';

		}
	}
}


/*var persons = [{name: "Harry"}, {name: "Alice"}, {name: "Peter"}];
    
    // Find if the array contains an object by comparing the property value
    if(persons.some(person => person.name === "Peter")){
        alert("Object found inside the array.");
    } else{
        alert("Object not found.");
    }

    var productList = [{category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'}, {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'}, {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'}, {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'}, {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'}, {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}]
function customFilter(objList, text){
if(undefined === text || text === '' ) return objList;
return objList.filter(product => {
    let flag;
    for(let prop in product){
        flag = false;
        flag = product[prop].toString().indexOf(text) > -1;
        if(flag)
        break;
    }
return flag;
});}

// Filter all users that are less than 30 years old AND their first name is Erica
const res = queryable(users).and(filters);

// Filter all users that are less than 30 years old OR their first name is Erica
const res = queryable(users).or(filters);

var json = {
jsonData: {
one: [11, 12, 13, 14, 15],
two: [21, 22, 23],
three: [31, 32]
}
};

for (var key in json.jsonData) {
    for (var key1 in json.jsonData[key]) {
        console.log(json.jsonData[key][key1])
    }
}*/