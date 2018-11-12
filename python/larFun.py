def largest(x, y, z):
    if(x>y):
        if(x>z):
            return x
        else:
            return z
    else:
        if(y>z):
            return y
        else:
            return z


a = int(input("Enter Num1: "))
b = int(input("Enter Num2: "))
c = int(input("Enter Num3: "))

larg = largest(a,b,c)
print("Largest Number is: ", larg)