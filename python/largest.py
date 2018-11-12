a = int(input("Enter First Num: "))
b = int(input("Enter second Num: "))
c = int(input("Enter Third Num: "))

if(a>b):
    if(a>c):
        print(a, "is largest")
    else:
        print(c, "is largest")
else:
    if(b>c):
        print(b, "is largest")
    else:
        print(c, "is largest")