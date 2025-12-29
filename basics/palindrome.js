
class Solution {
  
    isPalindrome(n) {
       if(n<0) return false 
       
      let  rev = 0
       let a=n
       while(a)
       {
           rev = rev*10 + a%10
           a= Math.floor(a/10)
       }
       if(rev==n) return true 
       return false
    }
}
