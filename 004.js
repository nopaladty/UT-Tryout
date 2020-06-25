function checkPalindrome() {
  var str = document.getElementById("str").value;
  var revStr = str.split('').reverse().join('');
  if(str == revStr) {
    alert("The entry is Palindrome");
  }  
  else {
    alert("The entry is not a Palindrome");
  }
}
Enter a String/Number: <input type="text" id="str" name="string" /> 
<br />
<input type="submit" value="Check" onclick="checkPalindrome();"/>
