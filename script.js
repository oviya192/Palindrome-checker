function palindrome(){
    let input =document.getElementById('input').value;

    let array = input.split("")

    let rev = array.reverse()

    let str = rev.join("")



    if (input == str )
     output = 'Palindrome'       

    else
     output = 'not Palindrome'      

    var result = document.getElementById('show')
    result.innerHTML = "This word is " + output 
}