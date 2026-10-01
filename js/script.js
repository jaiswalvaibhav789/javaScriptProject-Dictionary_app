
let btn = document.getElementById('btn');
// btn.addEventListener('click',()=>{
//     alert("hryy")
// })
async function search(){
    // alert("heyy")
    let word = document.getElementById('word').value.trim().toLowerCase();
    const url = `https://freedictionaryapi.com/api/v1/entries/en/${word}`;
    let res = await fetch(url)
    // console.log(res);
    
    let data = await res.json();
    console.log(data);
    document.getElementById('def').innerHTML=data.entries[0].partOfSpeech
    
}