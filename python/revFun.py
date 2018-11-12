def rev(x):
    temp = 0
    reverse = 0
    while(x!=0):
        temp = x%10
        reverse = reverse*10 + temp
        x = x//10
    return reverse
num = int(input("Enter Num: "))

rever = rev(num)
print(rever)