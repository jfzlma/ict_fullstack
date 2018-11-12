num = int(input("Enter Number: "))
x = num
rev = 0
temp = 0
while(num!=0):
    temp = num%10
    rev = rev*10 + temp
    num = num//10
if(x == rev):
    print("Palindrome")
else:
    print("Not Palindrome")