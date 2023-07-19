const form = document.querySelector('form');
const naam = document.querySelector('input[type="text"]');
const result = document.querySelector('.result');

function ok() {
    if(naam.value == ''){
        naam.placeholder = "Domain naam can't be Empty";
        naam.style.border = "2px solid red";
        setTimeout(() => {
            naam.style.border= "1px solid #ccc";
            naam.placeholder = "Enter Domain naam";
        }, 1234);
        return false;
    }
    
    result.innerHTML = '<img src="loaderGif.gif" alt="loader" width="100px" height="100px">';
    const apiKey = 'at_Q47VNqyRPRB6DMz61C8oH8di7dcuj';
    const domainnaam = naam.value;

    let arr = [];

    fetch(`https://domain-availability.whoisxmlapi.com/api/v1?apiKey=${apiKey}&domainName=${domainnaam}`)
        .then(response => response.json())
        .then(data =>{
            arr.push(data);
            console.log(arr[0].DomainInfo.domainAvailability);
            result.innerHTML = arr[0].DomainInfo.domainAvailability;
            result.style.fontSize = '32px';
            if(arr[0].DomainInfo.domainAvailability == 'AVAILABLE'){
                result.style.color = '#4BB543';
                result.style.border = "2px solid #4BB543";
            }else{
                result.style.color = 'red';
                result.style.border = "2px solid red";
            }
        })
        .catch(error => console.log('Error:', error));
}
naam.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        ok();
    }
});