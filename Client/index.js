let options = {
  valueNames: ["name", "city"],
  item: '<li><h3 class="name"></h3><p class="city"></p></li>',
};

let values = [
  { name: "Jonny", city: "Stockholm" },
  { name: "Jonas", city: "Berlin" },
];

const fetchApi = () => {
    fetch('http://localhost:3000/v1', {method: 'POST'}).then(res=> res.json()).then((data)=> console.log(data))
   
    
}
const test = () => {
    console.log('hello there')
}
export { options, values, fetchApi, test };
